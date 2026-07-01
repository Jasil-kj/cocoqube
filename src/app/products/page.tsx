"use client";

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import PRODUCTS from '@/data/products.json';

// --- Filter Categories (Exact from Prompt) ---
const FILTER_CATEGORIES = {
  material: [
    "Coco Chips", "Coco Coir", "Coco Fiber", "Coco Peat", "Coco Pith (100%)", 
    "Coconut Coir", "Coconut Fiber", "Coir", "Coir Fiber", "Coir Fiber Yarn", "HDPE", "Jute"
  ],
  shape: [
    "Block", "Brick", "Conical", "Half Liner", "N/A", "Oval", "Pole", 
    "Rectangular", "Roll", "Rope", "Round", "Round Disc", "Round/Rectangular", "Slab"
  ],
  usage: [
    "Balcony", "Cleaning", "Commercial Growing", "Container Growing", "Decoration", 
    "Decoration / Garden", "Erosion Control", "Landscaping", "Floor Mounted", "Garden", 
    "Gardening", "General Purpose", "Home / Terrace Gardening", "Horticulture", 
    "Hydroponics", "Hydroponics, Container Gardens", "Nursery / Commercial"
  ]
};

function ProductsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for Mobile Drawer
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // State for Filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(searchParams.get("material")?.split(',').filter(Boolean) || []);
  const [selectedShapes, setSelectedShapes] = useState<string[]>(searchParams.get("shape")?.split(',').filter(Boolean) || []);
  const [selectedUsages, setSelectedUsages] = useState<string[]>(searchParams.get("usage")?.split(',').filter(Boolean) || []);
  const [sortOption, setSortOption] = useState(searchParams.get("sort") || "Default");

  // Accordion State
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    material: true,
    shape: true,
    usage: true
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Sync to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("q", searchQuery);
    if (selectedMaterials.length) params.set("material", selectedMaterials.join(','));
    if (selectedShapes.length) params.set("shape", selectedShapes.join(','));
    if (selectedUsages.length) params.set("usage", selectedUsages.join(','));
    if (sortOption !== "Default") params.set("sort", sortOption);

    const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
    router.push(newUrl, { scroll: false });
  }, [searchQuery, selectedMaterials, selectedShapes, selectedUsages, sortOption, router]);

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => {
        const mat = Array.isArray(p.material) ? p.material.join(' ') : (p.material || '');
        return p.name.toLowerCase().includes(q) || 
               p.id.toLowerCase().includes(q) ||
               mat.toLowerCase().includes(q);
      });
    }

    // Material Filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p => {
        const mats = Array.isArray(p.material) ? p.material : [p.material];
        return mats.some(m => selectedMaterials.includes(m));
      });
    }

    // Shape Filter
    if (selectedShapes.length > 0) {
      result = result.filter(p => {
        const shapes = Array.isArray(p.shape) ? p.shape : [p.shape];
        return shapes.some(s => selectedShapes.includes(s));
      });
    }

    // Usage Filter
    if (selectedUsages.length > 0) {
      result = result.filter(p => {
        const usages = Array.isArray(p.usage) ? p.usage : [p.usage];
        return usages.some(u => selectedUsages.includes(u));
      });
    }

    // Sorting
    switch(sortOption) {
      case "Name A-Z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Name Z-A":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Product Code":
        result.sort((a, b) => a.id.localeCompare(b.id));
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedMaterials, selectedShapes, selectedUsages, sortOption]);

  // Count helper
  const getCount = (category: string, value: string) => {
    return PRODUCTS.filter(p => {
      const vals = Array.isArray(p[category as keyof typeof p]) ? p[category as keyof typeof p] : [p[category as keyof typeof p]];
      // @ts-ignore
      return vals.includes(value);
    }).length;
  };

  const handleCheckbox = (value: string, selectedState: string[], setSelectedState: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedState.includes(value)) {
      setSelectedState(selectedState.filter(item => item !== value));
    } else {
      setSelectedState([...selectedState, value]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedMaterials([]);
    setSelectedShapes([]);
    setSelectedUsages([]);
    setSortOption("Default");
  };

  // Filter Sidebar UI
  const FilterContent = () => (
    <div className="flex flex-col h-full bg-white md:bg-transparent rounded-2xl md:rounded-none">
      <div className="flex-1 overflow-y-auto px-6 py-8 md:px-0 md:py-0 space-y-8">
        
        {[
          { key: 'material', title: 'Material', state: selectedMaterials, setter: setSelectedMaterials, options: FILTER_CATEGORIES.material },
          { key: 'shape', title: 'Shape', state: selectedShapes, setter: setSelectedShapes, options: FILTER_CATEGORIES.shape },
          { key: 'usage', title: 'Usage / Application', state: selectedUsages, setter: setSelectedUsages, options: FILTER_CATEGORIES.usage },
        ].map(section => (
          <div key={section.key} className="border-b border-[#E8E3DD] pb-6">
            <button 
              onClick={() => toggleSection(section.key)} 
              className="flex items-center justify-between w-full font-medium text-gray-900 tracking-wide text-sm mb-2"
            >
              {section.title}
              <motion.span 
                animate={{ rotate: openSections[section.key] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </motion.span>
            </button>
            
            <AnimatePresence>
              {openSections[section.key] && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 pt-3">
                    {section.options.map(opt => {
                      const count = getCount(section.key, opt);
                      if (count === 0) return null; // Hide empty filters automatically
                      return (
                        <label key={opt} className="flex items-center justify-between cursor-pointer group">
                          <div className="flex items-center space-x-3">
                            <div className="relative flex items-center justify-center w-5 h-5">
                              <input 
                                type="checkbox" 
                                checked={section.state.includes(opt)}
                                onChange={() => handleCheckbox(opt, section.state, section.setter)}
                                className="appearance-none w-5 h-5 rounded border border-[#E8E3DD] checked:bg-[#6B4A34] checked:border-[#6B4A34] transition-colors cursor-pointer"
                              />
                              <AnimatePresence>
                                {section.state.includes(opt) && (
                                  <motion.svg 
                                    initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                    className="absolute w-3 h-3 text-white pointer-events-none" 
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </motion.svg>
                                )}
                              </AnimatePresence>
                            </div>
                            <span className="text-sm text-gray-600 group-hover:text-[#6B4A34] transition-colors">{opt}</span>
                          </div>
                          <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">{count}</span>
                        </label>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

      </div>
      
      {/* Mobile Action Buttons */}
      <div className="p-6 md:p-0 md:pt-6 bg-white md:bg-transparent flex items-center gap-3 md:sticky bottom-0">
        <button onClick={clearAllFilters} className="flex-1 py-3 px-4 rounded-xl border border-[#E8E3DD] text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors">
          Clear All
        </button>
        <button onClick={() => setIsMobileFiltersOpen(false)} className="flex-1 py-3 px-4 rounded-xl bg-[#6B4A34] text-white font-medium text-sm hover:bg-[#5a4035] transition-colors md:hidden">
          Apply Filters
        </button>
      </div>
    </div>
  );

  return (
    <main className="pt-32 pb-24 min-h-screen bg-[#F8F6F2]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3A2D27] mb-4">Export Catalogue</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
            Discover our collection of premium, sustainable coir solutions. Engineered for durability, crafted for luxury, and exported globally with a commitment to zero-waste.
          </p>
        </header>

        {/* Search & Mobile Filter Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 group">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#6B4A34] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-white border border-[#E8E3DD] rounded-2xl focus:ring-2 focus:ring-[#6B4A34] outline-none transition-all shadow-sm hover:shadow-md text-gray-800"
              placeholder="Search products by name, SKU, material..."
              type="text"
            />
          </div>
          <button 
            onClick={() => setIsMobileFiltersOpen(true)}
            className="md:hidden py-4 px-6 bg-white border border-[#E8E3DD] rounded-2xl shadow-sm text-[#6B4A34] font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-[320px] flex-shrink-0 sticky top-32 bg-white rounded-[18px] p-8 shadow-sm">
            <FilterContent />
          </aside>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isMobileFiltersOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-50 md:hidden" 
                  onClick={() => setIsMobileFiltersOpen(false)} 
                />
                <motion.div 
                  initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 w-[90%] max-w-md h-full bg-white shadow-2xl z-50 flex flex-col md:hidden"
                >
                  <div className="flex items-center justify-between p-6 border-b border-[#E8E3DD]">
                    <h2 className="text-xl font-serif text-[#3A2D27]">Filters</h2>
                    <button onClick={() => setIsMobileFiltersOpen(false)} className="text-gray-400 hover:text-black transition-colors p-2 rounded-full hover:bg-gray-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <FilterContent />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Product Grid Area */}
          <section className="flex-1 w-full min-w-0">
            {/* Top Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-[#3A2D27]">{filteredProducts.length}</span> products
              </p>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Sort by</span>
                <div className="relative group">
                  <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="pl-4 pr-10 py-2.5 bg-white border border-[#E8E3DD] rounded-xl text-[#3A2D27] font-medium outline-none focus:ring-2 focus:ring-[#6B4A34] appearance-none cursor-pointer shadow-sm hover:border-[#6B4A34] transition-colors"
                  >
                    <option>Default</option>
                    <option>Newest</option>
                    <option>Name A-Z</option>
                    <option>Name Z-A</option>
                    <option>Product Code</option>
                    <option>Featured</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover:text-[#6B4A34] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredProducts.map((prod) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={prod.id} 
                      className="group flex flex-col bg-white border border-[#E8E3DD] rounded-[18px] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center cursor-pointer" onClick={() => router.push(`/products/${prod.id}`)}>
                        <img className="w-full h-full object-cover" alt={prod.name} src={prod.image || prod.img} />
                      </div>
                      <div className="flex flex-col flex-1 p-6 space-y-4">
                        <div className="cursor-pointer" onClick={() => router.push(`/products/${prod.id}`)}>
                          <p className="text-xs font-semibold text-gray-400 mb-1 tracking-wider">{prod.id}</p>
                          <h3 className="text-lg text-[#3A2D27] font-serif font-medium leading-tight group-hover:text-[#6B4A34] transition-colors">{prod.name}</h3>
                        </div>
                        <p className="text-sm text-gray-500 flex-1 leading-relaxed line-clamp-2">
                          {Array.isArray(prod.material) ? prod.material[0] : prod.material} 
                          {prod.shape && prod.shape !== 'N/A' && ` · ${Array.isArray(prod.shape) ? prod.shape[0] : prod.shape}`}
                        </p>
                        
                        <div className="pt-2">
                          <button onClick={() => router.push(`/products/${prod.id}`)} className="w-full py-3 px-4 bg-[#F8F6F2] text-[#6B4A34] rounded-xl text-sm font-semibold hover:bg-[#6B4A34] hover:text-white transition-colors duration-300">
                            View Details
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Empty State */
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-32 px-4 text-center bg-white rounded-[18px] border border-[#E8E3DD] shadow-sm"
              >
                <div className="w-24 h-24 mb-6 rounded-full bg-[#F8F6F2] flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#6B4A34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-[#3A2D27] mb-3">No products found</h3>
                <p className="text-gray-500 mb-8 max-w-md">Try changing your filters or searching with different keywords.</p>
                <button 
                  onClick={clearAllFilters}
                  className="py-3 px-8 bg-white border border-[#E8E3DD] text-[#3A2D27] rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F8F6F2]"><div className="w-10 h-10 border-4 border-[#E8E3DD] border-t-[#6B4A34] rounded-full animate-spin"></div></div>}>
      <ProductsClient />
    </Suspense>
  );
}
