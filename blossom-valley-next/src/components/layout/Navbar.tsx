import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 w-full z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl bg-surface/80 dark:bg-black/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-outline-variant/30 rounded-full px-8 py-3 flex justify-between items-center transition-all duration-300">
        <Link href="/" className="font-display-lg text-body-lg font-bold text-primary dark:text-primary-fixed-dim tracking-tight hover:opacity-80 transition-opacity">
          Cocoqube
        </Link>
        <div className="hidden md:flex items-center gap-8 bg-surface-container-high/50 px-6 py-2 rounded-full border border-outline-variant/20">
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
            href="/export"
          >
            Export
          </Link>
          <Link
            className="font-body-md text-sm font-medium text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-body-md text-sm font-medium hover:bg-secondary hover:shadow-lg transition-all duration-300 scale-100 active:scale-95">
          Get Quote
        </button>
      </nav>
    </div>
  );
}
