import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full rounded-t-xl mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-20 max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <div className="font-display-lg text-headline-md text-primary dark:text-primary-fixed mb-6">
            Cocoqube
          </div>
          <p className="text-on-surface-variant text-body-md mb-6">
            Sustainable luxury for global horticultural markets. Crafting excellence from the heart of the tropics.
          </p>
          <div className="flex gap-4">
            <Link className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined">mail</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Products</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/products">Coco Peat Blocks</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/products">Coir Garden Pots</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/products">Erosion Control Logs</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/products">Hydroponic Grow Bags</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Company</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/about">Our Story</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/sustainability">Sustainability</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/certifications">Certifications</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary transition-colors" href="/export">Global Export</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary mb-6">Newsletter</h4>
          <p className="text-on-surface-variant text-sm mb-4">
            Stay updated with our latest sustainable solutions and market insights.
          </p>
          <div className="flex">
            <input
              className="bg-white border-none rounded-l-full px-4 py-3 w-full focus:ring-1 focus:ring-secondary text-on-surface"
              placeholder="Email address"
              type="email"
            />
            <button className="bg-secondary text-white px-6 py-3 rounded-r-full hover:bg-primary transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-8 text-center px-margin-mobile">
        <p className="text-on-surface-variant text-sm">
          © {new Date().getFullYear()} Cocoqube Coir. All rights reserved. Sustainable Luxury.
        </p>
      </div>
    </footer>
  );
}
