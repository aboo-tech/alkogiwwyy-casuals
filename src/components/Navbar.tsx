import { useState } from "react";

const navLinks = [
    {label: 'Home', href: '#home' },
    {label: 'Collection', href: '#collection'},
    {label: 'Our Story', href: '#about'}
];

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
         <header className="relative z-20 border-b border-black/10 bg-[#F7F4ED]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
        <a
          href="#home"
          className="text-lg font-bold uppercase tracking-[0.16em]"
        >
          Alkogiwwyy
          <span className="ml-2 font-normal tracking-normal text-[#9A783D]">
            Casuals
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-neutral-700 transition hover:text-[#9A783D]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#collection"
          className="hidden border border-black px-5 py-3 text-xs font-semibold uppercase tracking-widest transition hover:bg-black hover:text-white md:inline-block"
        >
          Explore Collection
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-black/10 px-5 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#collection"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold text-[#9A783D]"
          >
            Explore Collection →
          </a>
        </div>
      )}
    </header>
    )
}