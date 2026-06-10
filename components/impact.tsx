'use client'

export default function Impact() {
  const stats = [
    {
      number: '50K+',
      label: 'Lives Impacted',
      description: 'Direct beneficiaries across our programs',
    },
    {
      number: '25',
      label: 'Communities',
      description: 'Active partnerships in rural Kenya',
    },
    {
      number: '1.5M',
      label: 'Trees Planted',
      description: 'Environmental restoration projects',
    },
    {
      number: '3,500',
      label: 'Students',
      description: 'Supported through education initiatives',
    },
    {
      number: '95%',
      label: 'Program Efficiency',
      description: 'Funds directly to community programs',
    },
    {
      number: '12',
      label: 'Years',
      description: 'Of sustained impact and growth',
    },
  ]

  return (
    <section id="impact" className="py-24 sm:py-32 bg-secondary/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Measurable Impact
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Numbers tell our story of transformation and lasting change.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700 ease-out" />
              
              {/* Number */}
              <div className="mb-4 relative z-10">
                <p className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-primary to-accent group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.number}
                </p>
              </div>

              {/* Label */}
              <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-base text-foreground/70 relative z-10">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
