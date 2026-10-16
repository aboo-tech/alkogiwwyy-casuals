
export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-10 md:py-20"
    >
      <div className="max-w-xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#9A783D]">
          Style with intention
        </p>

        <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
          Tradition,
          <br />
          refined for
          <br />
          <span className="font-normal italic text-[#9A783D]">
            today.
          </span>
        </h1>

        <p className="mt-7 max-w-md text-base leading-7 text-neutral-600">
          Discover timeless traditional wear, thoughtfully selected
          for the modern man. A refined expression of culture,
          confidence, and personal style.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#collection"
            className="bg-black px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#9A783D]"
          >
            Explore the collection
          </a>

          <a
            href="#about"
            className="border-b border-black pb-1 text-sm transition hover:text-[#9A783D]"
          >
            Discover our story →
          </a>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Timeless style. Modern expression.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -bottom-4 -left-4 -z-10 h-2/3 w-2/3 bg-[#E6D9BF]" />

        <img
          src="/images/homepage.jpg?auto=format&fit=crop&w=1200&q=85"
          alt="Men's fashion editorial"
          className="h-[440px] w-full object-cover md:h-[600px]"
        />

        <p className="mt-4 text-right text-xs uppercase tracking-[0.2em] text-neutral-500">
          Alkogiwwyy Casuals
        </p>
      </div>
    </section>
  );
}
