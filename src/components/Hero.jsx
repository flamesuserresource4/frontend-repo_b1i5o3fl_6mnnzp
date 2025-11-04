import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/60 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10 sm:pt-24 sm:pb-16 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-pink-50 text-pink-700 px-3 py-1 text-xs font-medium ring-1 ring-pink-200 mb-4">
              <Star size={14} /> Freshly baked every morning
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Handcrafted Cakes That Melt In Your Mouth
            </h1>
            <p className="mt-4 text-neutral-600 max-w-prose">
              From classic layers to modern flavors, we bake with real butter, farm-fresh eggs, and lots of love. Choose your size, pick your flavor, and we’ll make your celebration extra sweet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center justify-center rounded-lg bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 text-sm font-medium shadow-sm">
                Browse Cakes
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-lg bg-white border border-neutral-200 hover:border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800">
                Our Story
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-200 via-rose-100 to-amber-100 p-6 shadow-inner">
              <div className="h-full w-full rounded-xl bg-white shadow-lg grid place-items-center text-7xl select-none">
                🎂
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 text-sm border border-neutral-100">
              <span className="font-semibold">Baked Today:</span> Red Velvet • Black Forest • Lemon Zest
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
