const cakes = [
  {
    name: 'Classic Vanilla',
    description: 'Moist vanilla sponge with silky buttercream.',
    emoji: '🧁',
    prices: [
      { label: 'Slice', price: 4.5 },
      { label: '6" (serves 6–8)', price: 18 },
      { label: '8" (serves 10–12)', price: 28 },
      { label: '10" (serves 16–20)', price: 42 },
    ],
    tag: 'Best value',
  },
  {
    name: 'Chocolate Fudge',
    description: 'Rich cocoa layers with dark chocolate ganache.',
    emoji: '🍫',
    prices: [
      { label: 'Slice', price: 5 },
      { label: '6" (serves 6–8)', price: 20 },
      { label: '8" (serves 10–12)', price: 32 },
      { label: '10" (serves 16–20)', price: 48 },
    ],
    tag: 'Customer favorite',
  },
  {
    name: 'Red Velvet',
    description: 'Velvety crumb with tangy cream cheese frosting.',
    emoji: '🎈',
    prices: [
      { label: 'Slice', price: 5 },
      { label: '6" (serves 6–8)', price: 22 },
      { label: '8" (serves 10–12)', price: 34 },
      { label: '10" (serves 16–20)', price: 50 },
    ],
    tag: 'Limited today',
  },
  {
    name: 'Lemon Zest',
    description: 'Bright lemon sponge with zesty curd and cream.',
    emoji: '🍋',
    prices: [
      { label: 'Slice', price: 4.5 },
      { label: '6" (serves 6–8)', price: 19 },
      { label: '8" (serves 10–12)', price: 30 },
      { label: '10" (serves 16–20)', price: 46 },
    ],
  },
  {
    name: 'Strawberry Shortcake',
    description: 'Vanilla layers, fresh strawberries, whipped cream.',
    emoji: '🍓',
    prices: [
      { label: 'Slice', price: 5 },
      { label: '6" (serves 6–8)', price: 21 },
      { label: '8" (serves 10–12)', price: 33 },
      { label: '10" (serves 16–20)', price: 49 },
    ],
  },
];

function PricePill({ label, price }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm">
      <span className="text-neutral-700">{label}</span>
      <span className="font-semibold text-neutral-900">${price.toFixed(2)}</span>
    </div>
  );
}

function CakeCard({ cake }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50/60 p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div className="h-12 w-12 rounded-xl bg-pink-100 grid place-items-center text-2xl">
          {cake.emoji}
        </div>
        {cake.tag && (
          <span className="ml-3 inline-flex items-center rounded-full bg-pink-50 text-pink-700 px-2 py-1 text-xs font-medium ring-1 ring-pink-200">
            {cake.tag}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-900">{cake.name}</h3>
      <p className="mt-1 text-sm text-neutral-600">{cake.description}</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {cake.prices.map((p) => (
          <PricePill key={p.label} label={p.label} price={p.price} />
        ))}
      </div>
      <button className="mt-4 w-full rounded-lg bg-neutral-900 text-white py-2 text-sm font-medium hover:bg-neutral-800">
        Customize & Order
      </button>
    </div>
  );
}

export default function CakesSection() {
  return (
    <section id="menu" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Our Cakes & Prices</h2>
            <p className="mt-2 text-neutral-600 max-w-prose">Pick a size that suits your celebration. Every cake is baked to order with premium ingredients.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-medium text-pink-700 hover:text-pink-800">Need a custom design?</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cakes.map((cake) => (
            <CakeCard key={cake.name} cake={cake} />
          ))}
        </div>
      </div>
    </section>
  );
}
