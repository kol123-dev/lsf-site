'use server';

interface VerificationResult {
  success: boolean;
  message: string;
  amount?: number;
}

export async function verifyDonation(reference: string): Promise<VerificationResult> {
  if (!reference) {
    return { success: false, message: "Missing transaction reference" };
  }

  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always get fresh verification data
    });

    const result = await response.json();

    if (result.status === true && result.data.status === 'success') {
      // Paystack returns amount in lower denominations (Cents/Kobo)
      const amountReceived = result.data.amount / 100;
      
      // TODO: Save to your Database here
      // Example: await db.donation.create({ data: { reference, amount: amountReceived, email: result.data.customer.email } });

      return { 
        success: true, 
        message: "Donation verified successfully!", 
        amount: amountReceived 
      };
    }

    return { success: false, message: result.message || "Verification failed." };
  } catch (error) {
    console.error("Paystack Verification Error:", error);
    return { success: false, message: "Internal server verification error." };
  }
}