export default function ASquaredStudiosWebsite() {
  const packages = [
    {
      name: 'Silver',
      price: '$600',
      detail: '5 short-form videos',
      note: 'Clean, consistent, high-quality edits for brands that want a strong presence.'
    },
    {
      name: 'Gold',
      price: '$800',
      detail: '10 short-form videos',
      note: 'Best for businesses that want volume, consistency, and momentum.'
    },
    {
      name: 'Platinum',
      price: '$400',
      detail: '3 premium cinematic videos',
      note: 'High-impact cinematic content built to impress, convert, and elevate your brand.'
    }
  ];

  const services = [
    'Short-form video editing',
    'Cinematic brand reels',
    'Event highlight edits',
    'Content strategy support',
    'Social media visuals'
  ];

  const portfolio = [
    {
      title: 'Cinematic Brand Reel',
      description: 'Story-driven visuals made to stop the scroll and build presence.'
    },
    {
      title: 'Event Highlight Film',
      description: 'Emotional, polished edits that capture energy and atmosphere.'
    },
    {
      title: 'Short-Form Social Content',
      description: 'Fast-paced edits built for Instagram, TikTok, and YouTube Shorts.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#140909] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 via-transparent to-black" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-400">A² Studios</p>
              <h1 className="text-5xl font-black leading-tight md:text-7xl">
                Built from Vision.<br />
                <span className="text-red-500">Fueled by Emotion.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                A Squared Studios helps businesses and personal brands stand out through cinematic edits,
                short-form content, and visuals designed to leave a lasting impression.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#packages"
                  className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold shadow-2xl shadow-red-900/40 transition hover:scale-[1.02]"
                >
                  View Packages
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
                >
                  Book a Call
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[28px] border border-red-500/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.25em] text-red-400">What we do</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <div key={service} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 text-sm text-white/85">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-black/40 p-7">
                  <p className="text-3xl font-bold text-red-500">Content that feels premium.</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Designed for businesses that want more than just edits — they want identity, emotion, and authority.
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-7">
                  <p className="text-3xl font-bold">Fast. Clean. Cinematic.</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Built to perform across social platforms while still feeling polished enough to represent your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">Portfolio</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Work that hits with emotion.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65">
            Showcase your best edits, reels, client transformations, or event visuals here.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-xl">
              <div className="mb-5 h-56 rounded-2xl bg-gradient-to-br from-red-700/30 to-black" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="border-y border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">Packages</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Simple offers. Premium delivery.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">
              Structured for brands and creators who want professional short-form content without the confusion.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`rounded-[30px] border p-8 shadow-2xl ${
                  index === 1
                    ? 'border-red-500 bg-red-600/10'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <p className="text-sm uppercase tracking-[0.25em] text-red-400">{pkg.name}</p>
                <h3 className="mt-4 text-4xl font-black">{pkg.price}</h3>
                <p className="mt-2 text-lg text-white/85">{pkg.detail}</p>
                <p className="mt-6 text-sm leading-7 text-white/65">{pkg.note}</p>
                <button className="mt-8 w-full rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.01]">
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-red-400">Why A² Studios</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">You do not need more content. You need stronger content.</h2>
            <p className="mt-5 text-sm leading-8 text-white/70">
              The goal is not to just post. The goal is to make people feel something, remember your brand,
              and trust what they see. That is what cinematic storytelling does.
            </p>
          </div>

          <div id="contact" className="rounded-[30px] border border-red-500/20 bg-gradient-to-br from-red-700/10 to-black p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-red-400">Contact</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Let’s build your next visual identity piece.</h2>
            <p className="mt-5 text-sm leading-8 text-white/70">
              Add your Instagram, email, booking form, or WhatsApp link here so clients can reach you fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:hello@asquaredstudios.com" className="rounded-2xl bg-red-600 px-6 py-3 text-sm font-semibold">
                Email Us
              </a>
              <a href="#" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
