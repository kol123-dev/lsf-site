'use client'

import Image from 'next/image'

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Lillian Siyoi',
      role: 'Founder & Executive Director',
      bio: 'Visionary leader dedicated to sustainable development and community empowerment across East Africa.',
      image: '/images/team-1.png',
    },
    {
      id: 2,
      name: 'Dr. Samuel Kiprop',
      role: 'Director of Programs',
      bio: 'Environmental scientist with 15+ years of experience in conservation and sustainable agriculture.',
      image: '/images/team-2.png',
    },
    {
      id: 3,
      name: 'Grace Mwangi',
      role: 'Health & Wellness Lead',
      bio: 'Healthcare professional committed to expanding medical access and health education in underserved areas.',
      image: '/images/team-3.png',
    },
    {
      id: 4,
      name: 'James Ochieng',
      role: 'Education Director',
      bio: 'Educator and curriculum developer focused on innovative learning approaches and youth empowerment.',
      image: '/images/team-4.png',
    },
  ]

  return (
    <section id="team" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Dedicated professionals driving our mission forward with passion and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Name and Role */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-foreground/70 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
