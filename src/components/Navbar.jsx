import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-pink-500 text-white grid place-items-center font-bold">🍰</div>
          <span className="font-semibold text-lg tracking-tight">SweetCrumbs Bakery</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#menu" className="hover:text-pink-600 transition">Menu</a>
          <a href="#about" className="hover:text-pink-600 transition">About</a>
          <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 text-sm shadow-sm">
          <ShoppingBag size={18} /> Order Now
        </button>
      </div>
    </header>
  );
}
