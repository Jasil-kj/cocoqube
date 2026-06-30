export default function CocoPeatBlocksPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Product Shell: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Gallery Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="product-zoom relative overflow-hidden rounded-[24px] bg-surface-container aspect-[4/3] cursor-zoom-in group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Premium Coco Peat Block"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuEMsScpIDbIP4alvfuG70zgfon9UTF_oK8RDm3rNK1eAt864fN-gg0Iq1WIFd3dzF8sPmz1jGDbhFbCXDEaiawI8oLGKEUcaiOnOD0k2u0u3P5iBLq875DPzy5dsV3EAKwosVmp0djMNmeJxf7M1bm8wmUVNQjlDltDYCDrgBwdf6FE9W7uAsZIWS6CjOgOAAuXgkp7Q3dw0Bbl-5ZSxTL4VPJkX0cm4PgbTR1uyRar9Q3RWo3rHx7rpKpfEzVv5m523mo1t0kgP3"
              />
              <div className="absolute top-6 left-6 flex space-x-2">
                <span className="bg-secondary px-4 py-1.5 rounded-full text-white font-label-caps text-[10px] tracking-widest flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">eco</span> 100% ORGANIC
                </span>
              </div>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
              <button className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 border-primary ring-offset-2 ring-2 ring-transparent">
                <img
                  className="w-full h-full object-cover"
                  alt="Coco peat fibers close-up"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMwGMHGMHFIBckGTNZhbJ3-KDtd1Zv6wMddxLglkU_lKVAZdAVX94o-YQWAihFLGuPUlemnxbDv4xMMr4VJ_t54rBITW-q2bEAT2vvEfwL5-_qDsxnTjaoepd64nwHke5yFU5Q6W3z4kI8x-RsCl1Y9mZ_CVLmnEtY3nSXzbKLsjmgxmfd-dMjlSSVuRw6Q698fH3cMmVBIaLkotmlH-cosCL6d79yHQpYM98Rr0VCgZB1sWigsQQpSj3p47xc1MI1F4j5nzL-bQHX"
                />
              </button>
              <button className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 border-transparent hover:border-outline-variant transition-all">
                <img
                  className="w-full h-full object-cover"
                  alt="Coco Peat Blocks stacked"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmR_ppJh5aDAnQh3s9a8WmKHmCCVxQ5PjQwAZeIfutwB1wPcUSsDFgb0AMhUeX1sEeh_RD3gsqssdB1ygWXMw7IjuZUljGS5qU0vf7r9gbWGzOIvGmwKYvN6x60p1mxWcpRRSjwBWduETXUaj5tbMsZ_JErlJuq15K-_odX5ueZdLxxlBvVthbjCsJ1yYi7yHRe--RARJRts-HHrahRQ49UtRyc3r1CHPiuqAMBWK02pC8GZPWsdrT7x56EdT2x-vM3EI_iKbbo0jE"
                />
              </button>
              <button className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 border-transparent hover:border-outline-variant transition-all">
                <img
                  className="w-full h-full object-cover"
                  alt="Hydrated coco peat expansion"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1leADTX39gZP5bROBxL97oQxhnnOtsl7Yv0RBLztnl6d9zVlulUl9B8Z35SDyq9FiKoET0QoVZQ4f_cWkQrTdyM0YEltEAVziNQupNhNXyaxu98inPrRW9c-pMwtiYD4f9pNX80l18Otw-r0fznbzrh8tA6L1Z6nIIt_A0ubd70iLs0rGqxzr3KVqzrDKOOX3Yx9v0eq4x9GrSH8n4qTHd05M6NlZd02rUfbjNuL6_iIPoaH3yN2HHFih6CVIghaQ5CcurSsVL_IM"
                />
              </button>
            </div>

            {/* Technical Specifications Table */}
            <div className="mt-12 hidden lg:block">
              <h3 className="font-headline-md text-headline-md mb-8">Technical Specifications</h3>
              <div className="space-y-0 border-t border-outline-variant">
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium">EC (Electrical Conductivity)</span>
                  <span className="text-on-surface text-right">&lt; 0.5 mS/cm (Low EC)</span>
                </div>
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium">pH Level</span>
                  <span className="text-on-surface text-right">5.5 – 6.8</span>
                </div>
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium">Moisture Content</span>
                  <span className="text-on-surface text-right">15% - 20%</span>
                </div>
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium">Expansion Volume</span>
                  <span className="text-on-surface text-right">70 - 75 Liters per Block</span>
                </div>
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium">Weight</span>
                  <span className="text-on-surface text-right">5kg (+/- 200g)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content & Form SideBar */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h1 className="font-headline-lg text-headline-lg leading-tight">Premium Coco Peat Blocks</h1>
              <p className="text-primary font-semibold text-xl">Commercial Grade Horticulture Medium</p>
              <p className="text-on-surface-variant font-body-lg">
                Our premium 5kg blocks are processed from high-quality coconut husks, washed to ensure low EC levels, and compressed for efficient global shipping. Ideal for professional growers and large-scale greenhouse projects.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-2">package_2</span>
                <p className="text-label-caps text-on-surface-variant block mb-1">PACKAGING</p>
                <p className="font-bold text-body-md">Palletized / Naked</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant">
                <span className="material-symbols-outlined text-primary mb-2">inventory</span>
                <p className="text-label-caps text-on-surface-variant block mb-1">MOQ</p>
                <p className="font-bold text-body-md">20/40ft Container</p>
              </div>
            </div>
            
            <div className="p-8 bg-surface-container rounded-3xl space-y-6">
              <h3 className="font-headline-md text-[24px]">Request Wholesale Quote</h3>
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-label-caps text-on-surface-variant px-1">Full Name</label>
                  <input className="w-full bg-white border border-outline-variant rounded-xl p-3 focus:ring-0 focus:border-tertiary-container transition-colors text-body-md" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="text-label-caps text-on-surface-variant px-1">Email Address</label>
                  <input className="w-full bg-white border border-outline-variant rounded-xl p-3 focus:ring-0 focus:border-tertiary-container transition-colors text-body-md" placeholder="john@company.com" type="email" />
                </div>
                <div className="space-y-1">
                  <label className="text-label-caps text-on-surface-variant px-1">Destination Port</label>
                  <input className="w-full bg-white border border-outline-variant rounded-xl p-3 focus:ring-0 focus:border-tertiary-container transition-colors text-body-md" placeholder="Rotterdam, NL" type="text" />
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2 group text-body-md" type="button">
                  Send Inquiry
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </form>
              <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
                <span className="text-on-surface-variant text-sm">Need technical data?</span>
                <a className="text-primary font-bold flex items-center gap-1 hover:underline text-body-md" href="#">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  PDF Catalogue
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-lg text-body-lg">Key Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-body-md">High water retention capacity (up to 8x weight)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-body-md">Excellent aeration for strong root development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-body-md">Weed-free and soil-borne pathogen free</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  <span className="text-body-md">100% Biodegradable & Environmentally Friendly</span>
                </li>
              </ul>
            </div>
            
            {/* Mobile specs */}
            <div className="mt-12 lg:hidden">
              <h3 className="font-headline-md text-headline-md mb-8">Technical Specifications</h3>
              <div className="space-y-0 border-t border-outline-variant">
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium text-body-md">EC</span>
                  <span className="text-on-surface text-right text-body-md">&lt; 0.5 mS/cm</span>
                </div>
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium text-body-md">pH Level</span>
                  <span className="text-on-surface text-right text-body-md">5.5 – 6.8</span>
                </div>
                <div className="grid grid-cols-2 py-5 border-b border-outline-variant">
                  <span className="text-on-surface-variant font-medium text-body-md">Moisture</span>
                  <span className="text-on-surface text-right text-body-md">15% - 20%</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-32">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg">Related Products</h2>
              <p className="text-on-surface-variant mt-2 text-body-md">Explore more of our sustainable horticultural solutions.</p>
            </div>
            <a className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary pb-1 text-body-md w-max" href="/products">
              View All Products
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Coco Coir Bricks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkjUQux7d_HQPiWXy60swr81eVjCi3NWNWm83Fm7xxL2PSHl5FFcANvt9XgkjIwVgokc8A4_u4Bd2B5REZyDmsfY14LsYS0Vntbsg1B9e3GQl6tfrBYYha03Magm_AUDWzZy1OKYKpq1LZW7wNZ-LAKMBzcsPtizpnliKasAn51ic0Mx9gFin7ZW2aKmMWUb3mvk35BlxL93a8jPOIT_tyi03m7bejY_ZdOOVEUxblhGD9fsO6FezuWGQPDNVnoSr7qP-7tq8aVLT_" />
              </div>
              <h3 className="font-headline-md text-[24px] mb-2">Coco Coir Bricks</h3>
              <p className="text-on-surface-variant mb-4 text-body-md">Compressed 650g bricks for retail and urban gardening kits.</p>
              <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-3 transition-all text-body-md">Explore Details <span className="material-symbols-outlined">east</span></span>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Organic Coir Pots" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeUewtSQoGMIwXrc8tzrl5mXhGq6bOOnse7xb8UUBjjLQO5jfqDQWfLOUUoSsHl0Po8IEKN35MYEjlezLsYDS5nPXvAuP4ZJEHXaSMcCza1UE1CSSJMtB8G1aKWZaYS79OgfDqMdJIKk9r1apUnGLp7pG9VAL9Oh7KgMjsXxMXn7ko9h1qzY2cm44jYpFRfkMv3RuI-9ZWpQ9cy9QvuinWk-oQh8Zf8SCbGh-x65yZwqJ4xPYha-8nnokC0vmjp-UroW4_DVnSboDH" />
              </div>
              <h3 className="font-headline-md text-[24px] mb-2">Organic Coir Pots</h3>
              <p className="text-on-surface-variant mb-4 text-body-md">Breathable, root-friendly planting containers that decompose naturally.</p>
              <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-3 transition-all text-body-md">Explore Details <span className="material-symbols-outlined">east</span></span>
            </div>
            
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-[24px] aspect-[4/5] bg-surface-container-low mb-6">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Coco Grow Poles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn5I7amnI_NMBm8_J7_vf7ON3R36Mz7v-9NSWJwDNlFL89JN0Qh4EO0hYJl_ktesz3u0_Eujd3cw1G5XaLEugAtmVMV4z974dgrKJzu7bbHVsFvgFAkB6PN1LeK4PEbv2ilY-FKpnECpshOe4uIJKYDb9h7dc9xmcMEdb-sN5hDGyrybYdsPUq63e4YQ_W4pKrtVzsREC6n9AKFBb4fGpDE8DKrjvMGCYcg_4Qrnky4oJeBqSHmNEv4tJYXyUpHmUSAP1Kq7UXAuMy" />
              </div>
              <h3 className="font-headline-md text-[24px] mb-2">Coco Grow Poles</h3>
              <p className="text-on-surface-variant mb-4 text-body-md">Moisture-retaining supports for climbing plants and large-scale nurseries.</p>
              <span className="text-primary font-bold flex items-center gap-1 group-hover:gap-3 transition-all text-body-md">Explore Details <span className="material-symbols-outlined">east</span></span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
