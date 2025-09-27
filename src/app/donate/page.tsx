import { DonationForm } from '@/components/DonationForm';
import { HandHeart } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <HandHeart className="h-16 w-16 mx-auto text-primary mb-4" />
            <h1>Make a Donation</h1>
            <p className="text-lg text-muted-foreground">
              Your generosity fuels our mission. Every contribution, no matter the size, brings hope and creates lasting change. Thank you for your support.
            </p>
          </div>
          
          <DonationForm />
        </div>
      </div>
    </div>
  );
}
