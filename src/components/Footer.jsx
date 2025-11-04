export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-lg font-semibold">Visit Us</h3>
          <p className="mt-1 text-neutral-600">123 Sugar Lane, Sweetwater, CA</p>
          <p className="text-neutral-600">Open daily 8am – 7pm</p>
        </div>
        <div className="sm:text-right">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <p className="mt-1 text-neutral-600">(555) 123-4567</p>
          <p className="text-neutral-600">hello@sweetcrumbs.example</p>
        </div>
      </div>
      <div className="text-center text-xs text-neutral-500 pb-6">© {new Date().getFullYear()} SweetCrumbs Bakery. All rights reserved.</div>
    </footer>
  );
}
