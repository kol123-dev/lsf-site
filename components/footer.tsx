'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

interface FooterProps {
  onDonateClick: () => void
}

export default function Footer({ onDonateClick }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Lillian Siyoi Foundation</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Building sustainable futures through climate action, health initiatives, and transformative education across Kenya.
            </p>
            <button
              onClick={onDonateClick}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
            >
              Donate Now
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="text-background/80 hover:text-background transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/impact" className="text-background/80 hover:text-background transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/donate" className="text-background/80 hover:text-background transition-colors">
                  Donate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-background/80">Nairobi, Kenya</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <span className="text-background/80">+254 (0) 700 000 000</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <span className="text-background/80">info@lilliansiyoifoundation.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-background/60 text-sm">
            &copy; {currentYear} Lillian Siyoi Foundation. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
              Collaborations
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
