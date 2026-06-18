export interface PaymentInitialization {
  url: string;
  reference: string;
}

export interface PaymentVerification {
  success: boolean;
  message: string;
  amount?: number;
}

export interface PaymentProvider {
  initiatePayment(amount: number, email: string, name: string): Promise<PaymentInitialization>;
  verifyPayment(reference: string): Promise<PaymentVerification>;
}