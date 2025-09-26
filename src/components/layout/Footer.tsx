
import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-espresso text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-primary-foreground/80 text-sm">
              Sowing seeds of hope, nurturing communities with compassion.
            </p>
          </div>
          <div>
            <h3 className="font-bold tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="/causes" className="text-primary-foreground/80 hover:text-primary-foreground">Our Causes</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
              <li><Link href="/donate" className="text-primary-foreground/80 hover:text-primary-foreground">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold tracking-wider uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 text-primary-foreground/80" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 text-primary-foreground/80" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 text-primary-foreground/80" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} <span className="font-bold">Barakah Oasis</span>. All rights reserved. A 501(c)(3) non-profit organization.</p>
        </div>
      </div>
    </footer>
  );
}
