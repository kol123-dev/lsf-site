import { PaymentProvider, PaymentInitialization, PaymentVerification } from './types';

export class InstasendProvider implements PaymentProvider {
  private apiKey = process.env.INSTASEND_API_KEY || '';
  // Note: Adjust the base URL to match Instasend's official API documentation
  private baseUrl = 'https://api.instasend.co/v1'; 

  async initiatePayment(amount: number, email: string, name: string): Promise<PaymentInitialization> {
    const reference = `LSF-INSTA-${Date.now()}`;
    
    const response = await fetch(`${this.baseUrl}/checkout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount,
        currency: 'USD',
        email: email,
        customer_name: name,
        reference: reference,
        redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/donate/verify`
      }),
    });
    
    const data = await response.json();
    if (!data.status) {
      throw new Error(data.message || 'Instasend initialization failed');
    }
    
    return { 
      url: data.checkout_url, 
      reference: reference 
    };
  }

  async verifyPayment(reference: string): Promise<PaymentVerification> {
    const response = await fetch(`${this.baseUrl}/transactions/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });
    
    const data = await response.json();
    
    if (data.status && data.data?.payment_status === 'successful') {
      return { 
        success: true, 
        message: 'Payment successful', 
        amount: data.data.amount 
      };
    }
    
    return { 
      success: false, 
      message: data.message || 'Payment verification failed or pending' 
    };
  }
}