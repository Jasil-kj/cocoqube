"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 w-full z-50 flex flex-col items-center px-4">
      <nav className="w-full max-w-5xl bg-surface/80 dark:bg-black/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-outline-variant/30 rounded-full px-6 md:px-8 py-3 flex justify-between items-center transition-all duration-300 relative z-50">
        <Link href="/" onClick={() => setIsMenuOpen(false)} className="font-display-lg text-body-lg font-bold text-primary dark:text-primary-fixed-dim tracking-tight hover:opacity-80 transition-opacity">
          Cocoqube
        </Link>
        
        {/* Desktop Menu */}
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
        
        {/* Desktop Button */}
        <button className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-full font-body-md text-sm font-medium hover:bg-secondary hover:shadow-lg transition-all duration-300 scale-100 active:scale-95">
          Get Quote
        </button>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-primary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-in fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-24 left-4 right-4 z-50 md:hidden bg-surface dark:bg-[#1a1a1a] shadow-2xl border border-outline-variant/30 rounded-[28px] overflow-hidden flex flex-col p-6 gap-2 animate-in fade-in slide-in-from-top-8 duration-300">
            <Link
              className="font-body-md text-lg font-medium text-gray-900 dark:text-gray-100 p-4 rounded-2xl hover:bg-surface-container-high dark:hover:bg-white/10 transition-colors active:bg-surface-variant flex items-center justify-between group"
              href="/products"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
            </Link>
            <Link
              className="font-body-md text-lg font-medium text-gray-900 dark:text-gray-100 p-4 rounded-2xl hover:bg-surface-container-high dark:hover:bg-white/10 transition-colors active:bg-surface-variant flex items-center justify-between group"
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
            </Link>
            <Link
              className="font-body-md text-lg font-medium text-gray-900 dark:text-gray-100 p-4 rounded-2xl hover:bg-surface-container-high dark:hover:bg-white/10 transition-colors active:bg-surface-variant flex items-center justify-between group"
              href="/export"
              onClick={() => setIsMenuOpen(false)}
            >
              Export
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
            </Link>
            <Link
              className="font-body-md text-lg font-medium text-gray-900 dark:text-gray-100 p-4 rounded-2xl hover:bg-surface-container-high dark:hover:bg-white/10 transition-colors active:bg-surface-variant flex items-center justify-between group"
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
            </Link>
            <button className="mt-4 bg-primary text-on-primary w-full py-5 rounded-2xl font-body-md text-lg font-medium hover:bg-secondary active:scale-[0.98] transition-all shadow-md">
              Get Quote
            </button>
          </div>
        </>
      )}
    </div>
  );
}
