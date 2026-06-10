'use client'

import { useState } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

interface PaymentFormProps {
  amount: number
  frequency: 'one-time' | 'monthly'
  onBack: () => void
  onClose: () => void
}

function PaymentFormContent({ amount, frequency, onBack, onClose }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      setError('Stripe is not loaded')
      return
    }

    if (!email || !name) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Create payment intent
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          frequency,
          email,
          name,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create payment intent')
      }

      const { clientSecret } = await response.json()

      // Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: {
            name,
            email,
          },
        },
      })

      if (result.error) {
        setError(result.error.message || 'Payment failed')
        setLoading(false)
      } else if (result.paymentIntent?.status === 'succeeded') {
        setSuccess(true)
        setLoading(false)
        // Close modal after 2 seconds
        setTimeout(onClose, 2000)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="p-6 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-foreground">Donation Successful!</h3>
        <p className="text-foreground/70">
          Thank you for your generous contribution to the Lillian Siyoi Foundation.
        </p>
        <p className="text-sm text-foreground/60">
          A confirmation email has been sent to {email}
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-1 hover:bg-muted rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-bold text-foreground">Payment Details</h2>
      </div>

      {/* Content */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Amount Summary */}
        <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
          <p className="text-sm text-foreground/70 mb-1">
            {frequency === 'monthly' ? 'Monthly donation:' : 'Donation amount:'}
          </p>
          <p className="text-2xl font-bold text-primary">
            KSh {amount.toLocaleString()}
          </p>
        </div>

        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Card Element */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Card Details
          </label>
          <div className="px-4 py-3 border border-border rounded-lg bg-background">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: 'var(--color-foreground)',
                    '::placeholder': {
                      color: 'var(--color-foreground-70)',
                    },
                  },
                  invalid: {
                    color: 'var(--color-destructive)',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Terms */}
        <p className="text-xs text-foreground/60">
          By donating, you agree to our donation terms. Your payment information is secure and encrypted.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !stripe || !elements}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Processing...
            </>
          ) : (
            `Donate KSh ${amount.toLocaleString()}`
          )}
        </button>
      </form>
    </>
  )
}

export default function PaymentForm(props: PaymentFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <PaymentFormContent {...props} />
    </Elements>
  )
}
