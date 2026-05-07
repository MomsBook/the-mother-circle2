import Link from "next/link"

const features = [
  {
    title: "Real Stories",
    description:
      "Authentic experiences from mothers who understand the journey.",
  },
  {
    title: "Encouragement",
    description: "Uplifting words to carry you through the hard days.",
  },
  {
    title: "Community",
    description: "Join a circle of mothers who support and uplift each other.",
  },
  {
    title: "Reflection",
    description: "Space to pause, breathe, and reconnect with yourself.",
  },
]

const blogPosts = [
  {
    id: 1,
    slug: "welcome",
    category: "Motherhood",
    title: "Welcome to The Mother Circle",
    excerpt:
      "A space for mothers to feel seen, supported, and connected.",
  },
  {
    id: 2,
    slug: "healing",
    category: "Healing",
    title: "You Were Never Meant to Mother Alone",
    excerpt:
      "Motherhood becomes lighter when we allow ourselves to lean on community.",
  },
  {
    id: 3,
    slug: "stories",
    category: "Stories",
    title: "Why Shared Stories Matter",
    excerpt:
      "Real stories remind us that we are not failing — we are human.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf7f2] text-[#4a3f39]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#ead8d1] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-16 lg:px-24">
          <h1 className="text-2xl font-bold">The Mother Circle</h1>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-[#b87b6a]">
              Home
            </a>

            <a href="#about" className="hover:text-[#b87b6a]">
              About
            </a>

            <a href="#blog" className="hover:text-[#b87b6a]">
              Blog
            </a>

            <a href="#contact" className="hover:text-[#b87b6a]">
              Contact
            </a>
          </nav>

          <a
            href="https://www.amazon.com/dp/B0GZR5W7NJ"
            target="_blank"
            className="rounded-full bg-[#b87b6a] px-5 py-2 text-sm font-semibold text-white shadow transition hover:scale-105"
          >
            Pre-Order
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7d8d2]/40 to-[#f3ede7]/80" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#b87b6a]">
              13 Stories. One Shared Journey.
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              For Moms, By Moms
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#665a54]">
              Through pregnancy, loss, and motherhood. A heartfelt collection
              of real stories that remind every mother she is never alone.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.amazon.com/dp/B0GZR5W7NJ"
                target="_blank"
                className="inline-block rounded-2xl bg-[#b87b6a] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                Pre-Order Now
              </a>

              <a
                href="#blog"
                className="inline-block rounded-2xl border border-[#b87b6a] px-8 py-4 font-semibold text-[#b87b6a] transition hover:bg-[#b87b6a] hover:text-white"
              >
                Read the Blog
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-[#f1cfc7] blur-3xl" />

            <div className="relative w-full max-w-sm">
              <img
                src="/images/book-cover.jpg"
                alt="The Mother Circle Book Cover"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-bold">About the Book</h2>

            <p className="mb-5 text-lg leading-relaxed text-[#665a54]">
              The Mother Circle was created to give mothers a place to feel
              seen, heard, and understood.
            </p>

            <p className="text-lg leading-relaxed text-[#665a54]">
              Whether you are a new mom, a seasoned mother, or someone
              searching for encouragement, this collection was written to wrap
              you in comfort and connection.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl bg-[#fdf7f2] p-8 shadow-sm"
              >
                <h3 className="mb-3 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-[#665a54]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b87b6a]">
              Blog & Journal
            </p>

            <h2 className="text-4xl font-bold">Latest Posts</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group overflow-hidden rounded-[2rem] bg-[#fdf7f2] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-52 bg-gradient-to-br from-[#e9c1b7] to-[#f7e7e1]" />

                <div className="p-8">
                  <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#b87b6a]">
                    {post.category}
                  </p>

                  <h3 className="mb-4 text-2xl font-semibold leading-snug">
                    {post.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-[#665a54]">
                    {post.excerpt}
                  </p>

                  <span className="font-semibold text-[#b87b6a]">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        id="contact"
        className="px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white p-12 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b87b6a]">
                Join the Community
              </p>

              <h2 className="mb-4 text-4xl font-bold">
                Receive Encouragement Straight to Your Inbox
              </h2>

              <p className="text-lg leading-relaxed text-[#665a54]">
                Subscribe for blog updates, motherhood encouragement,
                exclusive content, and future releases.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ead8d1] p-6">
              Newsletter form coming soon.
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}