export default function Home() {
  const brand = {
    name: 'A² Studios',
    fullName: 'A Squared Studios',
    tagline: 'Built from Vision. Fueled by Emotion.',
    description:
      'We focus on turning ideas into visuals that feel powerful, intentional, and real. The goal isn’t just content—it’s creating something people remember and connect with instantly.',
    location: 'Edmonton, Alberta',
    email: 'hello@asquaredstudios.com',
    instagram: 'https://instagram.com/a2studios.ca',
    tiktok: 'https://www.tiktok.com/@a2studios.com',
    youtube: 'http://www.youtube.com/@a2studios-ca',
    phone: '+1 (306) 515-1631',
    ctaPrimary: 'Book a Call',
    ctaSecondary: 'View Work',
  };

  const stats = [
    { label: 'Projects Created', value: '50+' },
    { label: 'Turnaround Time', value: 'Fast' },
    { label: 'Editing Experience', value: '8+ Years' },
  ];

  const services = [
    {
      title: 'Short-Form Editing',
      description:
        'Fast, engaging edits for social media built to hold attention and keep your brand looking sharp.',
      price: '$120 / video',
    },
    {
      title: 'Cinematic Brand Reels',
      description:
        'High-end visuals with strong presence for brands that want to feel elevated and intentional.',
      price: '$300 / video',
    },
    {
      title: 'Event Highlights',
      description:
        'Clean, emotional recap videos that capture the energy, people, and atmosphere of the moment.',
      price: '$400 / project',
    },
    {
      title: 'Content Direction',
      description:
        'Ideas, hooks, structure, and creative direction to make your content feel clear and purposeful.',
      price: '$150 / session',
    },
  ];

  const featuredProjects = [
    {
      title: 'Geared Up',
      type: 'Cinematic Poster / Music Visual',
      result: 'Bold, aggressive, high-impact visual identity.',
      description:
        'A high-contrast, red-toned visual built to feel intense and attention-grabbing.',
      image: '/geared-up.jpg',
    },
    {
      title: 'Automotive Cinematic',
      type: 'Brand / Product Visual',
      result: 'Clean, dark, premium aesthetic.',
      description:
        'A sleek, low-light composition focused on detail, reflections, and atmosphere.',
      image: '/automotive-cinematic.jpg',
    },
    {
      title: 'Behind the Lens',
      type: 'Creator / Studio Visual',
      result: 'Professional, cinematic, authentic presence.',
      description:
        'A strong visual representing the creator and the process behind the work.',
      image: '/behindthelens.jpg',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your brand, vision, and goals.',
    },
    {
      step: '02',
      title: 'Creation',
      description: 'Shoot and edit with cinematic intent and precision.',
    },
    {
      step: '03',
      title: 'Refinement',
      description: 'Review and polish for maximum impact.',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final content ready to post and perform.',
    },
  ];

  const packages = [
    {
      name: 'Starter Growth',
      price: '$500',
      subtitle: '10 short-form videos',
      description: 'Clean, consistent content to build presence.',
      features: [
        'Clean cuts + captions',
        'Basic color grading',
        'Hook optimization',
        '2 revisions',
        'Standard delivery',
      ],
      highlighted: false,
    },
    {
      name: 'Content Engine',
      price: '$800',
      subtitle: '10 short-form videos',
      description: 'High-volume, optimized content for growth.',
      features: [
        'Advanced editing (pacing, SFX, captions)',
        'Trend-based structure',
        'Hook optimization (retention focused)',
        '3 revisions',
        'Priority delivery',
      ],
      highlighted: true,
    },
    {
      name: 'Cinematic Pack',
      price: '$400',
      subtitle: '3 premium videos',
      description: 'Cinematic visuals built for impact and authority.',
      features: [
        'Cinematic storytelling',
        'Film-level color grading',
        'Sound design',
        'Script + hook assistance',
        'High revision cap',
      ],
      highlighted: false,
    },
  ];

  const faq = [
    {
      question: 'Who is this for?',
      answer: 'Brands, creators, and businesses looking to stand out online.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Usually 24–72 hours depending on the project.',
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes, revisions are included in every package.',
    },
    {
      question: 'Can I request custom work?',
      answer: 'Yes, custom projects are available based on your needs.',
    },
    {
      question: 'What do I need to provide?',
      answer: 'Your footage and basic direction, and we handle the rest.',
    },
    {
      question: 'How do I get started?',
      answer: 'Choose a package or reach out through contact.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-[#140606] via-[#0b0b0b] to-[#080808]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-400">
                {brand.fullName}
              </p>

              <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
                {brand.name}
                <span className="mt-2 block text-red-500">
                  {brand.tagline}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Cinematic visuals designed to express your story and elevate your brand.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
                We create cinematic visuals that feel intentional, clean, and built with purpose. Every piece is designed to elevate your brand and hold attention. It’s not just about content, it’s about how your brand is perceived. The goal is to leave a strong, lasting impression every time someone watches.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-red-950/40 transition hover:scale-[1.02]"
                >
                  {brand.ctaPrimary}
                </a>

                <a
                  href="#work"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  {brand.ctaSecondary}
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-2xl font-bold text-red-400">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-white/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[28px] border border-red-500/20 bg-white/[0.04] p-8 shadow-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                  Brand Positioning
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  We create cinematic content that hits with emotion and makes your brand impossible to ignore.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  Clean visuals, strong intention, and a premium feel. This site is built to present your studio like a real visual brand, not just another editor page.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-black/40 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                    Audience
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Businesses, creators, and personal brands.
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-black/40 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                    Offer
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Cinematic edits, social content, and story-first visuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              About
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              From vision to cinematic reality.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
              I started editing years ago, just experimenting and learning how visuals can create emotion. Over time, it became more than just editing—it became a way to express ideas, energy, and perspective. Now I use that same approach to build content that actually feels intentional and impactful.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
              I started this business to create content that goes beyond basic edits and actually represents brands at a higher level. Every piece is built with purpose—focused on emotion, pacing, and presence, not just visuals.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-red-400">
              Quick Info
            </p>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <p>
                <span className="font-semibold text-white">Studio:</span>{' '}
                {brand.fullName}
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span>{' '}
                {brand.location}
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                {brand.email}
              </p>
              <p>
                <span className="font-semibold text-white">Instagram:</span>{' '}
                @a2studios.ca
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              What you can offer
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[28px] border border-white/10 bg-black/40 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300">
                    {service.price}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Real visuals. Real presence.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/65">
            A glimpse into the visual direction, quality, and identity behind A² Studios.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-red-400">
                  {project.type}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {project.description}
                </p>
                <p className="mt-4 text-sm font-medium text-white">
                  Result: <span className="text-white/70">{project.result}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              How clients work with you
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[28px] border border-white/10 bg-black/40 p-6"
              >
                <p className="text-sm font-bold tracking-[0.25em] text-red-400">
                  {item.step}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            Packages
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Offers you can personalize
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">
            Clear pricing, strong presentation, and a premium look.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-[30px] border p-8 shadow-2xl ${
                pkg.highlighted
                  ? 'border-red-500 bg-red-600/10'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                {pkg.name}
              </p>
              <h3 className="mt-4 text-4xl font-black">{pkg.price}</h3>
              <p className="mt-2 text-lg text-white/85">{pkg.subtitle}</p>
              <p className="mt-5 text-sm leading-7 text-white/65">
                {pkg.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.01]"
              >
                Choose {pkg.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Questions clients may ask
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-b from-[#0b0b0b] to-[#140606]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Let’s build something that actually stands out.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                If you’re serious about your content and how your brand is perceived, this is where we start. Reach out and let’s create something that feels intentional and high-level.
              </p>
            </div>

            <div className="rounded-[30px] border border-red-500/20 bg-white/[0.04] p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                Get In Touch
              </p>

              <div className="mt-6 space-y-4 text-sm text-white/75">
                <p>
                  <span className="font-semibold text-white">Email:</span>{' '}
                  {brand.email}
                </p>
                <p>
                  <span className="font-semibold text-white">Instagram:</span>{' '}
                  @a2studios.ca
                </p>
                <p>
                  <span className="font-semibold text-white">TikTok:</span>{' '}
                  @a2studios.com
                </p>
                <p>
                  <span className="font-semibold text-white">YouTube:</span>{' '}
                  @a2studios-ca
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{' '}
                  {brand.phone}
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>{' '}
                  {brand.location}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${brand.email}`}
                  className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold"
                >
                  Email Now
                </a>
                <a
                  href={brand.instagram}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
          <p>Built from Vision. Fueled by Emotion.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Portfolio
            </a>
            <a href="#packages" className="transition hover:text-white">
              Packages
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
          <p>© A² Studios</p>
        </div>
      </footer>
    </main>
  );
}