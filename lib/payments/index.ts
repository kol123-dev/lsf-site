import { PaymentProvider } from './types';
import { PaystackProvider } from './paystack';
import { PesapalProvider } from './pesapal';
import { InstasendProvider } from './instasend';

export function getPaymentProvider(): PaymentProvider {
  const gateway = process.env.NEXT_PUBLIC_ACTIVE_GATEWAY || 'paystack';
  
  switch (gateway.toLowerCase()) {
    case 'pesapal':
      return new PesapalProvider();
    case 'instasend':
      return new InstasendProvider();
    case 'paystack':
    default:
      return new PaystackProvider();
  }
}