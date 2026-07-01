"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top whenever the pathname changes
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto"
    });
    
    // Restore smooth scroll after a brief delay if it was set in CSS
    const timeout = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
