import { PaymentProvider, PaymentInitialization, PaymentVerification } from './types';

export class PaystackProvider implements PaymentProvider {
  private secretKey = process.env.PAYSTACK_SECRET_KEY || '';

  async initiatePayment(amount: number, email: string, name: string): Promise<PaymentInitialization> {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // Paystack expects lowest denomination (Cents)
        email,
        currency: process.env.NEXT_PUBLIC_CURRENCY || 'KES',
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/donate/verify`,
        metadata: { custom_fields: [{ display_name: "Name", variable_name: "name", value: name }] }
      }),
    });
    
    const data = await response.json();
    if (!data.status) {
      throw new Error(data.message || 'Paystack initialization failed');
    }
    
    return { url: data.data.authorization_url, reference: data.data.reference };
  }

  async verifyPayment(reference: string): Promise<PaymentVerification> {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
      },
      cache: 'no-store',
    });
    
    const data = await response.json();
    if (data.status && data.data.status === 'success') {
      return { success: true, message: 'Payment successful', amount: data.data.amount / 100 };
    }
    
    return { success: false, message: data.message || 'Payment verification failed' };
  }
}