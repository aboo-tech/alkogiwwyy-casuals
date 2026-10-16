
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

const categories = [
  'All',
  'Kaftans',
  'Senator',
  'Corporate',
  'Jalabias',
] as const;

export default function App() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>('All');
    const [searchQuery, setSearchQuery] = useState('');

  
const filteredProducts = products.filter((product) => {
  const matchesCategory =
    activeCategory === 'All' ||
    product.category === activeCategory;

  const query = searchQuery.trim().toLowerCase();

  const matchesSearch =
    product.name.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query);

  return matchesCategory && matchesSearch;
});


  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#171717]">
      <Navbar />

      <main>
        <Hero />

        <section
          id="collection"
          className="border-t border-black/10 px-5 py-20 md:px-10"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9A783D]">
              Curated for you
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Discover the collection
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-neutral-600">
              Explore traditional pieces that bring together
              craftsmanship, comfort, and contemporary style.
            </p>
          </div>

<div className="mx-auto mt-8 max-w-md">
  <label
    htmlFor="product-search"
    className="mb-2 block text-xs uppercase tracking-[0.2em] text-neutral-500"
  >
    Find your style
  </label>

  <div className="flex items-center border-b border-black/20 transition-colors focus-within:border-black">
    <span className="pr-3 text-neutral-500" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    </span>

    <input
      id="product-search"
      type="search"
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
      placeholder="Search kaftans, senator..."
      className="w-full bg-transparent px-2 py-4 text-sm outline-none placeholder:text-neutral-400"
    />
  </div>
</div>

          {/* Category filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`border px-5 py-3 text-xs uppercase tracking-widest transition ${
                  activeCategory === category
                    ? 'border-black bg-black text-white'
                    : 'border-black/15 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product grid */}
     
<div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
  {filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

{filteredProducts.length === 0 && (
  <div className="py-16 text-center">
    <h3 className="text-lg font-medium">
      No matching styles found
    </h3>

    <p className="mt-2 text-sm text-neutral-500">
      Try another search or explore a different category.
    </p>

    <button
      type="button"
      onClick={() => {
        setSearchQuery('');
        setActiveCategory('All');
      }}
      className="mt-6 border-b border-[#9A783D] pb-1 text-xs uppercase tracking-widest hover:text-[#9A783D]"
    >
      Clear filters
    </button>
  </div>
)}

        </section>

        <section
          id="about"
          className="bg-[#EAE2D3] px-5 py-16 text-center md:px-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#9A783D]">
            The brand
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Style rooted in tradition.
          </h2>
        </section>
      </main>

      <footer
        id="contact"
        className="bg-[#171717] px-5 py-8 text-center text-sm text-white/70"
      >
        © {new Date().getFullYear()} Alkogiwwyy Casuals.
        <p className="mt-2 text-xs">Designed with care.</p>
      </footer>
    </div>
  );
}
