export default function ProductsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Export Catalogue</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Discover our collection of premium, sustainable coir solutions. Engineered for durability, crafted for luxury, and exported globally with a commitment to zero-waste.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter items-start">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 sticky top-28 h-fit space-y-8 p-8 rounded-3xl bg-surface-container-low backdrop-blur-xl atmospheric-shadow">
            {/* Search */}
            <div className="space-y-3">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Search Collection</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input
                  className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none text-body-md"
                  placeholder="Product name or code..."
                  type="text"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-primary uppercase">Categories</h4>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full border border-outline-variant text-body-md hover:bg-primary hover:text-on-primary transition-colors">Residential</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant text-body-md bg-primary text-on-primary">Industrial</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant text-body-md hover:bg-primary hover:text-on-primary transition-colors">Landscape</button>
                <button className="px-4 py-2 rounded-full border border-outline-variant text-body-md hover:bg-primary hover:text-on-primary transition-colors">Acoustics</button>
              </div>
            </div>

            {/* Material Filter */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-primary uppercase">Material Type</h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary transition-all" type="checkbox" />
                  <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Hand-Woven Natural Coir</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary transition-all" type="checkbox" />
                  <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">PVC Backed Coir</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary transition-all" type="checkbox" />
                  <span className="text-body-md text-on-surface-variant group-hover:text-primary transition-colors">Recycled Rubber Coir</span>
                </label>
              </div>
            </div>

            {/* Market Filter */}
            <div className="space-y-4">
              <h4 className="font-label-caps text-label-caps text-primary uppercase">Export Region</h4>
              <select className="w-full py-3 px-4 bg-white border border-outline-variant rounded-xl focus:ring-1 focus:ring-primary outline-none appearance-none cursor-pointer text-body-md">
                <option>European Union</option>
                <option>North America</option>
                <option>Asia Pacific</option>
                <option>Middle East</option>
              </select>
            </div>
            
            <button className="w-full py-4 bg-secondary text-on-secondary rounded-full font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity">
              Clear All Filters
            </button>
          </aside>

          {/* Product Grid Area */}
          <section className="lg:col-span-3">
            {/* Top Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
              <p className="font-body-md text-on-surface-variant">Showing <span className="font-bold text-primary">1 - 8</span> of 48 products</p>
              <div className="flex items-center space-x-4">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Sort By</span>
                <div className="relative inline-block">
                  <select className="pl-4 pr-10 py-2 bg-transparent border-b border-primary text-primary font-semibold outline-none appearance-none cursor-pointer">
                    <option>Latest Arrivals</option>
                    <option>Most Popular</option>
                    <option>Name A-Z</option>
                    <option>Price (High-Low)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  id: "BV-2024-HM",
                  name: "Heritage Hand-Woven",
                  desc: "Authentic hand-tufted natural fiber matting designed for high-traffic luxury residential projects.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA392AR7uZOoTvdDx--FAOUNoCfH7RnEXHTZHdaWQCAnNORT9cyFKFOBOdVMQuHb02uwpEgzpy-l3nddbbGRS6Qbt8pu_iTBsQF6yDvxkQPZ5ctSUGb4p-Pj4paCBx96VZeaJeKrotSn1BRqfn8Wap5M_sX3QZbpsOs729UNw5j_7JjyxzUnOVlBLG_hLSmgI8ALCWehtKStO26X3MyDHprImu30ZehR0Lqbl0tAmQaJt3AJLFVWC7p81rJ-Y0D5NWuGpabEhG2O9IC",
                  badge1: "Eco-Friendly",
                  badge2: "Best Seller",
                  spec: "60cm x 90cm x 15mm"
                },
                {
                  id: "BV-8800-PV",
                  name: "Steel-Core PVC Series",
                  desc: "Maximum durability backing with reinforced edge control for commercial lobby spaces.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClHMSF2s444aR0kF397Cn4JUC2dESxOS3Ct5Pr6D2a6lEgAfoJyqQeevBy3_xDmtfyivnSLNYVjECqQJ1DcodNxRjJ7rQwtnjTbMdmqCSDqyTXb4xpMbmVL71Vf31sC6iAe2cUjtC40x5h3Pk8abNuDrGJg54BSr7-3dNV3gxQahsrU54ryCHz22ZpfGSCeoLsoE1oAh-7unMef4nUkhYo2JmhPsNWsQ0L0fpE7MHwSanE1rOPuWsgSZ09J3KUHJvoEcHb1NXahIlR",
                  badge1: "Industrial",
                  badge2: null,
                  spec: "Roll Form: 2m x 15m"
                },
                {
                  id: "BV-920-LA",
                  name: "Verdant Landscape Geo",
                  desc: "Biodegradable erosion control and aesthetic ground covering for sustainable landscaping.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPmFnLkRxhiyzgjKSMceS675-0qbnGsvGyEXHDKIUZyf9BE4hcxtvOwP9wpHSl_rbOONlsESn620jKByWvs-StRljA_AfYiYgBu1sSBYcQKNYxrfrTAsrk-_vb5X48haZUkfK2M6oF3YMxUBgkCX8giYDgrNcke63nTJOmGgE4YoLMlyvOFVry6TRThLHEEdNpkVFVlsviRg5amEGNNu4WuqUNO4fUVzNid0a19IPUDf_nnN4hnY3uIzSOohdNM0P3m8WgNj2VZI_5",
                  badge1: null,
                  badge2: null,
                  spec: "Custom Dimensions"
                },
                {
                  id: "BV-AC-105",
                  name: "Acoustical Fiber Slab",
                  desc: "Sustainable sound absorption panels for high-end workspace and studio interiors.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-XK_U6GACbgAp6bsN_bSytSrTmPUarpsE_-JmSrO_P154vBAbhn8f-m_ab6KNd8_G7WLaaTcN0TEwdVpdQR45ovCukSmmwjANrdVQN24-T_2kWejSJt6AiM7wv4rCtASqiJgGumpucEN8cZQfo7JVwGLvolRRATVOC16q4_q2PEnOxqGBfbHjl-COQLwi3hIGYyHOwbqCV7KRjsf64DCPYqKD8sx50JSkOz2kkpA7t6462wu63FrUrcEFcmCtuhZJXTQeTZ7b7HLd",
                  badge1: "New Release",
                  badge2: null,
                  spec: "120cm x 120cm"
                },
                {
                  id: "BV-2024-HM-2",
                  name: "Heritage Hand-Woven",
                  desc: "Authentic hand-tufted natural fiber matting designed for high-traffic luxury residential projects.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA392AR7uZOoTvdDx--FAOUNoCfH7RnEXHTZHdaWQCAnNORT9cyFKFOBOdVMQuHb02uwpEgzpy-l3nddbbGRS6Qbt8pu_iTBsQF6yDvxkQPZ5ctSUGb4p-Pj4paCBx96VZeaJeKrotSn1BRqfn8Wap5M_sX3QZbpsOs729UNw5j_7JjyxzUnOVlBLG_hLSmgI8ALCWehtKStO26X3MyDHprImu30ZehR0Lqbl0tAmQaJt3AJLFVWC7p81rJ-Y0D5NWuGpabEhG2O9IC",
                  badge1: "Eco-Friendly",
                  badge2: "Best Seller",
                  spec: "60cm x 90cm x 15mm"
                },
                {
                  id: "BV-8800-PV-2",
                  name: "Steel-Core PVC Series",
                  desc: "Maximum durability backing with reinforced edge control for commercial lobby spaces.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClHMSF2s444aR0kF397Cn4JUC2dESxOS3Ct5Pr6D2a6lEgAfoJyqQeevBy3_xDmtfyivnSLNYVjECqQJ1DcodNxRjJ7rQwtnjTbMdmqCSDqyTXb4xpMbmVL71Vf31sC6iAe2cUjtC40x5h3Pk8abNuDrGJg54BSr7-3dNV3gxQahsrU54ryCHz22ZpfGSCeoLsoE1oAh-7unMef4nUkhYo2JmhPsNWsQ0L0fpE7MHwSanE1rOPuWsgSZ09J3KUHJvoEcHb1NXahIlR",
                  badge1: "Industrial",
                  badge2: null,
                  spec: "Roll Form: 2m x 15m"
                },
                {
                  id: "BV-920-LA-2",
                  name: "Verdant Landscape Geo",
                  desc: "Biodegradable erosion control and aesthetic ground covering for sustainable landscaping.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPmFnLkRxhiyzgjKSMceS675-0qbnGsvGyEXHDKIUZyf9BE4hcxtvOwP9wpHSl_rbOONlsESn620jKByWvs-StRljA_AfYiYgBu1sSBYcQKNYxrfrTAsrk-_vb5X48haZUkfK2M6oF3YMxUBgkCX8giYDgrNcke63nTJOmGgE4YoLMlyvOFVry6TRThLHEEdNpkVFVlsviRg5amEGNNu4WuqUNO4fUVzNid0a19IPUDf_nnN4hnY3uIzSOohdNM0P3m8WgNj2VZI_5",
                  badge1: null,
                  badge2: null,
                  spec: "Custom Dimensions"
                },
                {
                  id: "BV-AC-105-2",
                  name: "Acoustical Fiber Slab",
                  desc: "Sustainable sound absorption panels for high-end workspace and studio interiors.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-XK_U6GACbgAp6bsN_bSytSrTmPUarpsE_-JmSrO_P154vBAbhn8f-m_ab6KNd8_G7WLaaTcN0TEwdVpdQR45ovCukSmmwjANrdVQN24-T_2kWejSJt6AiM7wv4rCtASqiJgGumpucEN8cZQfo7JVwGLvolRRATVOC16q4_q2PEnOxqGBfbHjl-COQLwi3hIGYyHOwbqCV7KRjsf64DCPYqKD8sx50JSkOz2kkpA7t6462wu63FrUrcEFcmCtuhZJXTQeTZ7b7HLd",
                  badge1: "New Release",
                  badge2: null,
                  spec: "120cm x 120cm"
                }
              ].map((prod, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-surface-container-high mb-6 atmospheric-shadow transition-transform duration-500 hover:-translate-y-2">
                    <img className="w-full h-full object-cover" alt={prod.name} src={prod.img} />
                    <div className="absolute top-6 left-6 flex space-x-2">
                      {prod.badge1 && <span className={`px-3 py-1 rounded-full text-label-caps font-label-caps uppercase text-[10px] ${prod.badge1 === 'New Release' ? 'bg-tertiary text-on-tertiary' : 'bg-secondary text-on-secondary'}`}>{prod.badge1}</span>}
                      {prod.badge2 && <span className="px-3 py-1 bg-primary text-on-primary rounded-full text-label-caps font-label-caps uppercase text-[10px]">{prod.badge2}</span>}
                    </div>
                  </div>
                  <div className="space-y-2 px-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-label-caps text-label-caps text-outline uppercase tracking-tighter">REF: {prod.id}</p>
                        <h3 className="font-headline-md text-headline-md text-primary mt-1">{prod.name}</h3>
                      </div>
                    </div>
                    <p className="text-body-md text-on-surface-variant line-clamp-2">{prod.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                      <span className="text-body-md font-semibold text-primary">{prod.spec}</span>
                      <button className="flex items-center space-x-2 text-primary font-bold hover:text-secondary transition-colors group/btn">
                        <span className="font-label-caps text-label-caps uppercase">Add to RFQ</span>
                        <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">add_circle</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex items-center justify-center space-x-4">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-on-primary font-bold">1</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">2</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">3</button>
              <span className="text-outline">...</span>
              <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">8</button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </section>
        </div>
      </div>
      
      {/* RFQ Floating Action Button */}
      <button className="fixed bottom-10 right-10 z-40 bg-secondary text-on-secondary px-8 py-5 rounded-full atmospheric-shadow flex items-center space-x-4 hover:scale-105 active:scale-95 transition-all duration-300">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
        <span className="font-label-caps text-label-caps uppercase tracking-widest">Quote Cart (3)</span>
      </button>
    </main>
  );
}
