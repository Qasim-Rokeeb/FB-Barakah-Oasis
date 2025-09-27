
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../Logo';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-espresso text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-white/80">
              Sowing seeds of hope, nurturing communities with compassion.
            </p>
          </div>
          <div>
            <h3 className="font-bold tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/80 hover:text-clay">About Us</Link></li>
              <li><Link href="/causes" className="text-white/80 hover:text-clay">Our Causes</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-clay">Contact</Link></li>
              <li><Link href="/donate" className="text-white/80 hover:text-clay">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold tracking-wider uppercase mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
                 <li>
                    <a href="mailto:contact@barakahoasis.org" className="text-white/80 hover:text-clay flex items-center gap-2">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        <span>contact@barakahoasis.org</span>
                    </a>
                </li>
                 <li>
                    <a href="tel:+1234567890" className="text-white/80 hover:text-clay flex items-center gap-2">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        <span>+1 (234) 567-890</span>
                    </a>
                </li>
            </ul>
             <h3 className="font-bold tracking-wider uppercase mb-4 mt-8">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-white/80 hover:text-clay">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-clay">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold tracking-wider uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Button type="button" variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook" rel="noopener noreferrer"><Facebook className="h-5 w-5 text-white/80" aria-hidden="true" /></a>
              </Button>
              <Button type="button" variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter" rel="noopener noreferrer"><Twitter className="h-5 w-5 text-white/80" aria-hidden="true" /></a>
              </Button>
              <Button type="button" variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram" rel="noopener noreferrer"><Instagram className="h-5 w-5 text-white/80" aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p className='m-0'>&copy; {new Date().getFullYear()} <span className="font-bold">Barakah Oasis</span>. All rights reserved. A 501(c)(3) non-profit organization.</p>
        </div>
      </div>
    </footer>
  );
}
