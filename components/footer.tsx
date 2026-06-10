'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

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
            <div className="relative h-16 w-32 mb-6">
              <Image 
                src="/LSFlogo.png" 
                alt="Lillian Siyoi Foundation Logo" 
                fill
                className="object-contain object-left brightness-0 invert" 
              />
            </div>
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

          {/* Newsletter / Call to Action */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Stay Updated</h3>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Subscribe to our newsletter to receive updates on our impact and upcoming programs.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/10 border border-background/20 text-background placeholder:text-background/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-full"
                required
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-background/60 text-sm">
            &copy; {currentYear} Lillian Siyoi Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-background/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-white text-sm transition-colors">
              Collaborations
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
