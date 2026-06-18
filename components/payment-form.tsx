'use client'

import { useState } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { initiateDonationAction } from '@/app/actions/payments'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !name) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')

    try {
      const result = await initiateDonationAction(amount, email, name);
      
      if (result.success && result.url) {
        // Redirect the user to the generic payment gateway URL (Paystack/Pesapal/Instasend)
        window.location.href = result.url;
      } else {
        setError(result.message || 'Failed to initialize payment. Please try again.')
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
      setError('An unexpected error occurred.')
      setLoading(false)
    }
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
