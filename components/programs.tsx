'use client'

import Image from 'next/image'
import { Leaf, Heart, BookOpen } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: 'Climate Action',
      description: 'Combating environmental degradation through sustainable practices, reforestation initiatives, and community-led conservation efforts.',
      icon: Leaf,
      image: '/images/program-climate.png',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      id: 2,
      title: 'Health Initiatives',
      description: 'Improving community wellness through accessible healthcare programs, medical outreach, and preventative health education.',
      icon: Heart,
      image: '/images/program-health.png',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      id: 3,
      title: 'Education Programs',
      description: 'Empowering the next generation with quality education, scholarships, and skills training for sustainable career development.',
      icon: BookOpen,
      image: '/images/program-education.png',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ]

  return (
    <section id="programs" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Our Core Programs
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We tackle Kenya&apos;s most pressing challenges across three interconnected pillars.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.id}
                className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Icon */}
                  <div className={`${program.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`${program.color} w-6 h-6`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-block mt-4 text-primary hover:text-primary/80 font-medium text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
