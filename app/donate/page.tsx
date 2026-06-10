'use client'

import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import DonationModal from '@/components/donation-modal'
import { Heart, Users, Leaf, BookOpen, Award, TrendingUp } from 'lucide-react'

export default function DonatePage() {
  const [showDonationModal, setShowDonationModal] = useState(false)

  const impactBreakdown = [
    {
      amount: 'KSh 1,000',
      title: 'Empower One',
      description: 'Provides health education materials for one community',
      icon: Heart,
      items: ['Health education resources', 'Community awareness session', 'Support for one person'],
    },
    {
      amount: 'KSh 5,000',
      title: 'Educate a Student',
      description: 'Supports one student for one month in our scholarship program',
      icon: BookOpen,
      items: ['One month scholarship', 'School supplies', 'Mentorship support'],
    },
    {
      amount: 'KSh 10,000',
      title: 'Plant a Forest',
      description: 'Funds reforestation and environmental conservation efforts',
      icon: Leaf,
      items: ['50 trees planted', 'Soil preparation & maintenance', 'Farmer training'],
    },
    {
      amount: 'KSh 25,000',
      title: 'Transform a Community',
      description: 'Supports comprehensive interventions in one village',
      icon: Users,
      items: ['Health camp & consultations', 'Education programs', 'Climate initiative'],
    },
  ]

  const donationTypes = [
    {
      type: 'One-Time Donation',
      description: 'Make a single contribution when you\'re able to give',
      benefits: ['Immediate impact', 'Flexible amount', 'Simple process'],
    },
    {
      type: 'Monthly Giving',
      description: 'Become a monthly sustainer and create lasting impact',
      benefits: ['Recurring impact', 'Tax benefits', 'Exclusive updates', 'Community recognition'],
    },
    {
      type: 'Corporate Giving',
      description: 'Partner with us as a company or organization',
      benefits: ['CSR alignment', 'Employee engagement', 'Brand visibility', 'Tax deductions'],
    },
  ]

  const testimonials = [
    {
      name: 'Rachel',
      type: 'Monthly Donor',
      quote: 'Giving monthly to LSF is part of my values. I love seeing the direct impact of my contribution on communities.',
      amount: 'KSh 5,000/month',
    },
    {
      name: 'Muiruri',
      type: 'One-Time Donor',
      quote: 'The transparency and impact reporting makes me confident my donation is making a real difference.',
      amount: 'KSh 50,000',
    },
    {
      name: 'Kenya Tech',
      type: 'Corporate Partner',
      quote: 'Partnering with LSF aligns perfectly with our mission. Our team loves volunteering too!',
      amount: 'Corporate Partnership',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar onDonateClick={() => setShowDonationModal(true)} />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:py-32 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            Make a Real Impact
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 text-balance">
            Your generosity fuels our mission to empower communities across Kenya through climate action, health, and education.
          </p>
          <button
            onClick={() => setShowDonationModal(true)}
            className="inline-block px-8 py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-lg transition-colors text-lg"
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Impact by Amount */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            See Your Impact
          </h2>
          <p className="text-xl text-foreground/70 text-center mb-12 max-w-3xl mx-auto">
            Different giving levels create different types of impact. Choose what works best for you.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {impactBreakdown.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setShowDonationModal(true)}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary w-6 h-6" />
                    </div>
                    <p className="text-2xl font-bold text-primary mb-2">
                      {item.amount}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.items.map((itemText, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-foreground/70">
                          <span className="text-primary mt-1">✓</span>
                          <span>{itemText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Give */}
      <section className="py-16 px-6 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How You Can Give
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {donationTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {type.type}
                </h3>
                <p className="text-foreground/70 mb-6">
                  {type.description}
                </p>
                <div className="space-y-2 mb-6">
                  {type.benefits.map((benefit, idx) => (
                    <p key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-primary">✓</span>
                      {benefit}
                    </p>
                  ))}
                </div>
                <button
                  onClick={() => setShowDonationModal(true)}
                  className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
                >
                  {type.type === 'Corporate Giving' ? 'Learn More' : 'Start Giving'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Give */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Support LSF?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Proven Track Record</h3>
              <p className="text-foreground/70">
                9+ years of creating measurable, sustainable impact in communities across Kenya
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparent & Accountable</h3>
              <p className="text-foreground/70">
                85% of funds directly support programs. Regular impact reports and external audits.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Measurable Results</h3>
              <p className="text-foreground/70">
                100,000+ lives impacted. 50,000+ trees planted. 500+ students scholarshipped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="py-16 px-6 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Voices From Our Donors
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-foreground/80 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/70 mb-2">
                    {testimonial.type}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {testimonial.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-16 px-6 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            More Ways to Help
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Volunteer</h3>
              <p className="text-foreground/70 mb-4">
                Give your time and skills to support our programs
              </p>
              <a href="/contact" className="text-primary hover:text-primary/80 font-medium">
                Learn more →
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Leaf className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Partner With Us</h3>
              <p className="text-foreground/70 mb-4">
                Collaborate as an organization to create greater impact
              </p>
              <a href="/contact" className="text-primary hover:text-primary/80 font-medium">
                Get in touch →
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-3">Share Our Story</h3>
              <p className="text-foreground/70 mb-4">
                Spread awareness and help us reach more supporters
              </p>
              <a href="/" className="text-primary hover:text-primary/80 font-medium">
                Follow us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Donation FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Is my donation tax-deductible?',
                a: 'Yes! The Lillian Siyoi Foundation is a registered nonprofit. Your donation is tax-deductible as per local regulations.',
              },
              {
                q: 'How is my donation used?',
                a: '85% of donations go directly to our programs (climate action, health, education). 15% covers administrative costs. We publish detailed impact reports annually.',
              },
              {
                q: 'Can I donate in other currencies?',
                a: 'Yes, we accept donations in KES, USD, EUR, and GBP through our payment processor.',
              },
              {
                q: 'Can I set up a monthly donation?',
                a: 'Absolutely! Monthly donations help us plan long-term programs. You can adjust or cancel anytime.',
              },
              {
                q: 'Is my information secure?',
                a: 'Yes, we use industry-standard encryption and never share your personal information. Stripe handles all payments securely.',
              },
              {
                q: 'How will I know about my donation\'s impact?',
                a: 'Monthly donors receive impact updates. All donors can access impact reports on our website and request personalized impact stories.',
              },
            ].map((faq, index) => (
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

      {/* Final CTA */}
      <section className="py-16 px-6 md:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Every donation, no matter the size, creates real change in the lives of Kenyans.
          </p>
          <button
            onClick={() => setShowDonationModal(true)}
            className="inline-block px-8 py-4 bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold rounded-lg transition-colors text-lg"
          >
            Donate Now
          </button>
        </div>
      </section>

      <Footer onDonateClick={() => setShowDonationModal(true)} />
      <DonationModal isOpen={showDonationModal} onClose={() => setShowDonationModal(false)} />
    </main>
  )
}
