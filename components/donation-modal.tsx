'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import PaymentForm to avoid SSR "window is not defined" issues with react-paystack
const PaymentForm = dynamic(() => import('./payment-form'), { ssr: false })

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time')
  const [amount, setAmount] = useState<number | null>(5000)
  const [customAmount, setCustomAmount] = useState('')
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const presetAmounts = [1000, 5000, 10000]

  const selectedAmount = customAmount ? parseInt(customAmount) : amount

  const handleDonate = () => {
    if (selectedAmount && selectedAmount > 0) {
      setShowPaymentForm(true)
    }
  }

  const handleBack = () => {
    setShowPaymentForm(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-border">
          {showPaymentForm ? (
            <PaymentForm
              amount={selectedAmount || 0}
              frequency={frequency}
              onBack={handleBack}
              onClose={onClose}
            />
          ) : (
            <>
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Make a Donation</h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <p className="text-foreground/70 text-sm">
                  Your donation directly supports our climate action, health initiatives, and education programs across Kenya.
                </p>

                {/* Frequency Toggle */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Donation Frequency
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setFrequency('one-time')}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                        frequency === 'one-time'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                        frequency === 'monthly'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Preset Amounts */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">
                    Select Amount (KSh)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => {
                          setAmount(preset)
                          setCustomAmount('')
                        }}
                        className={`py-3 px-4 rounded-lg font-semibold text-sm transition-colors ${
                          amount === preset && !customAmount
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
                        }`}
                      >
                        {preset.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Custom Amount (KSh)
                  </label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      if (e.target.value) setAmount(null)
                    }}
                    placeholder="Enter custom amount"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                {/* Amount Summary */}
                {selectedAmount && (
                  <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
                    <p className="text-sm text-foreground/70 mb-1">
                      {frequency === 'monthly' ? 'Monthly donation:' : 'Donation amount:'}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      KSh {selectedAmount.toLocaleString()}
                    </p>
                    {frequency === 'monthly' && (
                      <p className="text-xs text-foreground/60 mt-2">
                        KSh {(selectedAmount * 12).toLocaleString()} per year
                      </p>
                    )}
                  </div>
                )}

                {/* Donate Button */}
                <button
                  onClick={handleDonate}
                  disabled={!selectedAmount || selectedAmount <= 0}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
                >
                  Continue to Payment
                </button>

                {/* Trust Badge */}
                <p className="text-xs text-foreground/60 text-center">
                  🔒 Secure payment powered by Paystack
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
