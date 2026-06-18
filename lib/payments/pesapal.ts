import { PaymentProvider, PaymentInitialization, PaymentVerification } from './types';

export class PesapalProvider implements PaymentProvider {
  private consumerKey = process.env.PESAPAL_CONSUMER_KEY || '';
  private consumerSecret = process.env.PESAPAL_CONSUMER_SECRET || '';
  private baseUrl = process.env.PESAPAL_ENV === 'production' 
    ? 'https://pay.pesapal.com/v3' 
    : 'https://cybqa.pesapal.com/pesapalv3';

  /**
   * Step 1: Authenticate with Pesapal to get a Bearer Token
   */
  private async getAuthToken(): Promise<string> {
    const res = await fetch(`${this.baseUrl}/api/Auth/RequestToken`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      },
      body: JSON.stringify({ 
        consumer_key: this.consumerKey, 
        consumer_secret: this.consumerSecret 
      })
    });
    
    const data = await res.json();
    if (data.status !== '200') {
      throw new Error(data.message || 'Pesapal Authentication Failed');
    }
    return data.token;
  }

  /**
   * Step 2: Register an IPN (Instant Payment Notification) URL
   * Pesapal requires this to know where to send background webhooks
   */
  private async getIpnId(token: string): Promise<string> {
    const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/ipn/pesapal`;
    const res = await fetch(`${this.baseUrl}/api/URLSetup/RegisterIPN`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ 
        url, 
        ipn_notification_type: 'GET' 
      })
    });
    
    const data = await res.json();
    return data.ipn_id;
  }

  async initiatePayment(amount: number, email: string, name: string): Promise<PaymentInitialization> {
    const token = await this.getAuthToken();
    const ipnId = await this.getIpnId(token);
    
    // Create a unique merchant reference for this order
    const reference = `LSF-${Date.now()}`;
    const names = name.split(' ');
    
    // Step 3: Submit the Order Request
    const res = await fetch(`${this.baseUrl}/api/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        id: reference,
        currency: process.env.NEXT_PUBLIC_CURRENCY || 'KES',
        amount: amount,
        description: 'Donation to Lillian Siyoi Foundation',
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/donate/verify`,
        notification_id: ipnId,
        billing_address: { 
          email_address: email, 
          first_name: names[0] || 'Donor', 
          last_name: names.slice(1).join(' ') || 'User' 
        }
      })
    });
    
    const data = await res.json();
    
    if (data.error) {
      throw new Error(data.error.message || 'Failed to submit Pesapal order');
    }
    
    // Return the hosted checkout URL and Pesapal's generated tracking ID
    return { 
      url: data.redirect_url, 
      reference: data.order_tracking_id 
    };
  }

  async verifyPayment(reference: string): Promise<PaymentVerification> {
    const token = await this.getAuthToken();
    
    // Step 4: Verify the transaction status using the Order Tracking ID
    const res = await fetch(`${this.baseUrl}/api/Transactions/GetTransactionStatus?orderTrackingId=${reference}`, {
      method: 'GET',
      headers: { 
        'Authorization': `Bearer ${token}`, 
        'Accept': 'application/json' 
      },
      cache: 'no-store'
    });
    
    const data = await res.json();
    
    // Status Code 1 means COMPLETED in Pesapal v3
    if (data.status_code === 1) {
      return { 
        success: true, 
        message: 'Payment successful', 
        amount: data.amount 
      };
    }
    
    return { 
      success: false, 
      message: `Payment status: ${data.payment_status_description || 'Pending/Failed'}` 
    };
  }
}