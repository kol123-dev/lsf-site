'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { usePaystackPayment } from 'react-paystack'
import { verifyDonation } from '@/app/actions/paystack'

interface PaymentFormProps {
  amount: number
  frequency: 'one-time' | 'monthly'
  onBack: () => void
  onClose: () => void
}

export default function PaymentForm({ amount, frequency, onBack, onClose }: PaymentFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: amount * 100, // Paystack amount is in kobo/cents (lowest currency unit)
    currency: 'KES', // Set currency to Kenyan Shillings
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name
        },
        {
          display_name: "Frequency",
          variable_name: "frequency",
          value: frequency
        }
      ]
    }
  }

  // Remove the conditional hook rule violation, the dynamic import solves the SSR issue entirely
  const initializePayment = usePaystackPayment(config);

  const onSuccess = async (reference: any) => {
    setLoading(true) // Keep loading state while verifying
    try {
      const result = await verifyDonation(reference.reference)
      
      if (result.success) {
        setSuccess(true)
        setLoading(false)
        setTimeout(onClose, 3000)
      } else {
        setError(result.message || 'Payment verification failed.')
        setLoading(false)
      }
    } catch (err) {
      setError('An error occurred during verification.')
      setLoading(false)
    }
  }

  const onClosePayment = () => {
    setLoading(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !name) {
      setError('Please fill in all fields')
      return
    }

    if (!process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) {
      setError('Paystack public key is missing')
      return
    }

    setLoading(true)
    setError('')

    initializePayment({
      onSuccess,
      onClose: onClosePayment
    })
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

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Terms */}
        <p className="text-xs text-foreground/60">
          By donating, you agree to our donation terms. Your payment information is secure and encrypted by Paystack.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Initializing...
            </>
          ) : (
            `Donate KSh ${amount.toLocaleString()}`
          )}
        </button>
      </form>
    </>
  )
}
