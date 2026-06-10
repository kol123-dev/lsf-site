'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DonationModal from '@/components/donation-modal'
import { Mail, Phone, MapPin, SendHorizontal, Globe } from 'lucide-react'

export default function ContactPage() {
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const openDonation = () => setShowDonationModal(true)
  const closeDonation = () => setShowDonationModal(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const offices = [
    {
      name: 'Head Office',
      location: 'Nairobi, Kenya',
      address: '123 Green Street, Nairobi 00100',
      email: 'info@lilliansiyoi.org',
      phone: '+254 (0) 123 456 789',
    },
    {
      name: 'Regional Office',
      location: 'Kisumu, Kenya',
      address: '456 Community Lane, Kisumu 40100',
      email: 'kisumu@lilliansiyoi.org',
      phone: '+254 (0) 798 765 432',
    },
    {
      name: 'Field Office',
      location: 'Mombasa, Kenya',
      address: '789 Coast Road, Mombasa 80100',
      email: 'mombasa@lilliansiyoi.org',
      phone: '+254 (0) 789 456 123',
    },
  ]

  const faqs = [
    {
      q: 'How can I support the foundation?',
      a: 'You can support us through donations (one-time or monthly), volunteering, partnerships, or by spreading the word about our work.',
    },
    {
      q: 'Are donations tax-deductible?',
      a: 'Yes, the Lillian Siyoi Foundation is a registered nonprofit organization. Donations are tax-deductible as per local regulations.',
    },
    {
      q: 'How are funds used?',
      a: 'We maintain transparency in fund allocation. 85% of funds go directly to programs, while 15% covers administrative and operational costs.',
    },
    {
      q: 'Can I volunteer with the foundation?',
      a: 'Absolutely! We welcome volunteers. Contact us to learn about volunteer opportunities in your area of interest.',
    },
    {
      q: 'How can I stay updated on our work?',
      a: 'Subscribe to our newsletter, follow us on social media, or visit our website regularly for updates and impact reports.',
    },
    {
      q: 'Do you work in my area?',
      a: 'We operate primarily in Kenya. Contact us to learn about our current projects in your region.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar onDonateClick={openDonation} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:py-36 bg-linear-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mb-32" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
            Get <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">In Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            We&apos;d love to hear from you. Reach out with questions, partnership opportunities, or to learn more about our work.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <Mail className="text-primary w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-primary font-medium text-sm mb-2">info@lilliansiyoi.org</p>
              <p className="text-xs text-foreground/70">Send us your inquiry</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <Phone className="text-accent w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-accent font-medium text-sm mb-2">+254 (0) 123 456 789</p>
              <p className="text-xs text-foreground/70">Call us during office hours</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <MapPin className="text-secondary w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Nairobi HQ</h3>
              <p className="text-secondary font-medium text-sm mb-2">Head Office</p>
              <p className="text-xs text-foreground/70">Kenya</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <Globe className="text-primary w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Website</h3>
              <p className="text-primary font-medium text-sm mb-2">www.lilliansiyoi.org</p>
              <p className="text-xs text-foreground/70">Visit anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-16 px-6 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-100 border border-green-300 text-green-800 rounded-lg p-6 text-center">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="mt-2">We&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="+254..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    >
                      <option value="">Select a subject</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="donation">Donation Information</option>
                      <option value="question">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <SendHorizontal className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Offices */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Offices</h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {office.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-4">
                      {office.location}
                    </p>

                    <div className="space-y-2 text-sm text-foreground/70">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        {office.address}
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                          {office.email}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                          {office.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Partnership */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Connect With Us
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Follow Our Journey</h3>
              <p className="text-foreground/70 mb-6">
                Stay updated with our latest initiatives, success stories, and impact news by following us on social media.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
                  aria-label="Twitter"
                >
                  𝕏
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold text-lg"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Partnership Opportunities</h3>
              <p className="text-foreground/70 mb-6">
                Interested in partnering with us? We welcome collaborations with organizations, government agencies, and individual partners who share our vision.
              </p>
              <button
                onClick={openDonation}
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
              >
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-foreground/70">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onDonateClick={openDonation} />
      <DonationModal isOpen={showDonationModal} onClose={closeDonation} />
    </main>
  )
}
