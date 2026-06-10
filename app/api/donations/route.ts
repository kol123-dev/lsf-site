import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripeKey = process.env.STRIPE_SECRET_KEY
if (!stripeKey) {
  console.warn('STRIPE_SECRET_KEY is not set in environment variables')
}

const stripe = stripeKey ? new Stripe(stripeKey, {
  apiVersion: '2024-12-18' as any,
}) : null

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment processing is not configured' },
        { status: 500 }
      )
    }

    const { amount, frequency, email, name } = await request.json()

    // Validate input
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      )
    }

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Create or retrieve customer
    let customer
    try {
      // Try to find existing customer
      const customers = await stripe.customers.list({ email })
      if (customers.data.length > 0) {
        customer = customers.data[0]
      } else {
        // Create new customer
        customer = await stripe.customers.create({
          email,
          name,
          metadata: {
            donorName: name,
          },
        })
      }
    } catch (error) {
      console.error('Error managing customer:', error)
      return NextResponse.json(
        { error: 'Failed to process customer' },
        { status: 500 }
      )
    }

    // Create payment intent
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: 'kes',
        customer: customer.id,
        metadata: {
          donationType: frequency,
          donorName: name,
          donorEmail: email,
        },
        description: `${frequency === 'monthly' ? 'Monthly' : 'One-time'} donation to Lillian Siyoi Foundation`,
      })

      return NextResponse.json({
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      })
    } catch (error) {
      console.error('Error creating payment intent:', error)
      return NextResponse.json(
        { error: 'Failed to create payment intent' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Donation API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
