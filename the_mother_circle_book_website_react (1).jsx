// DEPLOY-READY NEXT.JS + VERCEL SETUP
// ====================================
// 1. Create a new Next.js app:
// npx create-next-app@latest the-mother-circle
// 
// 2. When prompted:
// ✔ Use Tailwind CSS? → YES
// ✔ Use App Router? → YES
// ✔ Use TypeScript? → NO
// 
// 3. Replace the contents of:
// app/page.jsx
// with the code below.
// 
// 4. Run locally:
// npm run dev
// 
// 5. Upload the entire project folder to GitHub.
// 
// 6. Import the GitHub repo into Vercel.
// 
// Your website will deploy automatically.

export default function HomePage() {
  const blogPosts = [
    {
      title: "Why Every Mother Needs a Safe Circle",
      excerpt:
        "Motherhood was never meant to be walked alone. Discover how support, honesty, and shared experiences can transform the journey.",
      date: "May 2026",
    },
    {
      title: "The Stories Behind The Mother Circle",
      excerpt:
        "A closer look at the inspiration, emotions, and real-life experiences that shaped this book.",
      date: "April 2026",
    },
    {
      title: "Creating Meaningful Moments with Your Children",
      excerpt:
        "Simple ways to build memories, connection, and confidence inside your home every day.",
      date: "March 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdf7f2] text-[#4a3f39]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#ead8d1] bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-16 lg:px-24">
          <div>
            <h1 className="text-2xl font-bold">The Mother Circle</h1>
          </div>

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
              A Book for Mothers, By Mothers
            </p>

            <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              The Mother Circle
            </h2>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#665a54]">
              A heartfelt collection of stories, encouragement, and real moments that remind every mother she is never alone.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#b87b6a] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                Buy the Book
              </button>

              <button className="rounded-2xl border border-[#b87b6a] px-8 py-4 font-semibold text-[#b87b6a] transition hover:bg-[#b87b6a] hover:text-white">
                Read the Blog
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-80 w-80 rounded-full bg-[#f1cfc7] blur-3xl" />

            <div className="relative w-full max-w-sm rounded-[2rem] bg-white p-6 shadow-2xl">
              <div className="aspect-[3/4] rounded-[1.5rem] bg-gradient-to-b from-[#d9b2a7] to-[#f4e3db] p-6 shadow-inner">
                <div className="flex h-full flex-col items-center justify-center rounded-[1.2rem] border border-white/60 bg-white/30 backdrop-blur-sm">
                  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/80">
                    Book Cover
                  </p>

                  <h3 className="px-6 text-center text-4xl font-bold text-white">
                    The Mother Circle
                  </h3>
                </div>
              </div>
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
              The Mother Circle was created to give mothers a place to feel seen, heard, and understood.
            </p>

            <p className="text-lg leading-relaxed text-[#665a54]">
              Whether you are a new mom, a seasoned mother, or someone searching for encouragement, this collection was written to wrap you in comfort and connection.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              "Real Stories",
              "Encouragement",
              "Community",
              "Reflection",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-[#fdf7f2] p-8 shadow-sm"
              >
                <h3 className="mb-3 text-2xl font-semibold">{item}</h3>

                <p className="leading-relaxed text-[#665a54]">
                  Beautiful motherhood-centered content for your readers and community.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE QUOTE */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#b87b6a] px-10 py-16 text-center text-white shadow-xl">
          <p className="mb-6 text-lg uppercase tracking-[0.3em] text-white/80">
            Featured Message
          </p>

          <blockquote className="text-3xl font-semibold leading-relaxed md:text-4xl">
            “You were never meant to mother alone.”
          </blockquote>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#b87b6a]">
                Blog & Journal
              </p>

              <h2 className="text-4xl font-bold">Latest Posts</h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-[2rem] bg-[#fdf7f2] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-52 bg-gradient-to-br from-[#e9c1b7] to-[#f7e7e1]" />

                <div className="p-8">
                  <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#b87b6a]">
                    {post.date}
                  </p>

                  <h3 className="mb-4 text-2xl font-semibold leading-snug transition group-hover:text-[#b87b6a]">
                    {post.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-[#665a54]">
                    {post.excerpt}
                  </p>

                  <button className="font-semibold text-[#b87b6a]">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="contact" className="px-6 py-24 md:px-16 lg:px-24">
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
                Subscribe for blog updates, motherhood encouragement, exclusive content, and future releases.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-[#ead8d1] px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[#ead8d1] px-5 py-4 outline-none"
              />

              <button className="w-full rounded-2xl bg-[#b87b6a] px-6 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#ead8d1] bg-[#fffaf7] px-6 py-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold">The Mother Circle</h3>

            <p className="mt-2 text-[#665a54]">
              A community rooted in motherhood, healing, and connection.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium text-[#665a54]">
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
          </div>
        </div>
      </footer>
    </main>
  );
}

