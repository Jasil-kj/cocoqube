export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero Section: Global Ambition */}
      <section className="relative min-h-[614px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop py-24">
        <div className="max-w-4xl z-10">
          <span className="font-label-caps text-secondary uppercase mb-4 block">Sustainable Footprint</span>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6">Our Global Presence</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Connecting premium coir craftsmanship from the heart of Asia to luxury sustainable projects worldwide. Discover our international export network and certified supply chain.
          </p>
        </div>
      </section>

      {/* Interactive World Map Section */}
      <section className="bg-surface-container-low py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
            <div className="max-w-xl">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Export Destinations</h2>
              <p className="text-on-surface-variant">We currently serve over 32 countries with sustainable flooring and agricultural coir solutions.</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-outline-variant shadow-sm">
                <span className="w-3 h-3 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-label-caps text-secondary uppercase">Active Exports</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant group">
            <div
              className="absolute inset-0 grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9eGq_CmNXlLgD_k0paUXX0xXZx8ajueUPR9miJXwX7apI9Ll5-ZCX90HLiE9AgQwdm44_HlS99-CFVDdQVadKmr_HSrODb5Q7M8S9c7QPWAJhk2DupP5pQVntjiQDf5cVkdTfxT7QCHTFbqr3YPstKGHFf5HiG3sU4l92_pW12Ajb4uAiYl6o5gdtIMJInP3_z9nPx96G05dw32rd44cxMyaFVtaZz84ihCDPiahyDQ9EFs4LqSxJysNBwDqyUvN2vQuHuPMM-vQn')" }}
            ></div>
            <div className="absolute top-[25%] left-[20%] transition-transform duration-300 hover:scale-150 cursor-pointer" title="New York, USA">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="absolute top-[30%] left-[48%] transition-transform duration-300 hover:scale-150 cursor-pointer" title="London, UK">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="absolute top-[40%] left-[75%] transition-transform duration-300 hover:scale-150 cursor-pointer" title="Tokyo, Japan">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="absolute top-[70%] left-[85%] transition-transform duration-300 hover:scale-150 cursor-pointer" title="Sydney, Australia">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            <div className="absolute top-[35%] left-[55%] transition-transform duration-300 hover:scale-150 cursor-pointer" title="Dubai, UAE">
              <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            </div>
            
            <div className="absolute bottom-8 left-8 p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl max-w-xs transition-transform duration-500 hover:-translate-y-1">
              <h4 className="font-bold text-primary mb-2">Regional Logistics</h4>
              <p className="text-sm text-on-surface-variant mb-4">Dedicated shipping hubs ensure consistent 14-day delivery to major international ports.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase">ISO 9001</span>
                <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase">EcoCert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Inquiries & Form */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">International Hubs</h2>
              <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed">Our headquarters and production facilities are strategically located to maintain direct control over quality and ethical sourcing.</p>
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0 transition-colors group-hover:bg-secondary">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">Global Headquarters</h4>
                    <p className="text-on-surface-variant">128 Sustainability Way, Coco-Palm District<br />Colombo 00700, Sri Lanka</p>
                    <div className="mt-4 flex items-center gap-4 text-sm font-medium">
                      <span className="text-secondary">Mon - Fri: 08:00 - 18:00 (GMT+5:30)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0 transition-colors group-hover:bg-secondary">
                    <span className="material-symbols-outlined">factory</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-2">Primary Production Facility</h4>
                    <p className="text-on-surface-variant">Industrial Zone B, Kurunegala Export Park<br />North Western Province, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden h-64 shadow-md border border-outline-variant grayscale hover:grayscale-0 transition-all duration-700">
              <div className="w-full h-full bg-surface-dim flex items-center justify-center relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDijVctTT19FYP1NTOT4RPIZ51Jc9iDpDTjxoqEbatmS3s4vi-JvBl5AgKfl8v4dScSti9d7-SW5yHr8cSk1zSH3FnkczrXR4lKn9Rwt-niJdxBLJC2EvNHohGZVPVf1raLUWSx3HvZgVytK5leMrTO_Mz0qVhnYXzoylmVpqZam_rczQ5SoVdi5YSu3UMzEnnCyYrULCvfxbZjji5FyuG3f05tKhV4bTOMnyg--S2AIelTYx5OTEvOCs4QyMfvnSBFPq4sDxDBbHrv')" }}
                ></div>
                <div className="z-10 bg-white/90 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-outline-variant relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 bg-secondary -mr-16 -mt-16 rounded-full"></div>
            <h3 className="font-headline-md text-headline-md text-primary mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-on-surface-variant">Full Name</label>
                  <input className="w-full bg-surface-container-lowest border-outline-variant rounded-xl p-4 focus:ring-0 focus:border-tertiary-container transition-colors text-body-md" placeholder="e.g. Julianne Smith" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-on-surface-variant">Company Name</label>
                  <input className="w-full bg-surface-container-lowest border-outline-variant rounded-xl p-4 focus:ring-0 focus:border-tertiary-container transition-colors text-body-md" placeholder="e.g. ArchiTerra Ltd" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-on-surface-variant">Business Email</label>
                  <input className="w-full bg-surface-container-lowest border-outline-variant rounded-xl p-4 focus:ring-0 focus:border-tertiary-container transition-colors text-body-md" placeholder="julianne@architerra.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-on-surface-variant">Target Country</label>
                  <select className="w-full bg-surface-container-lowest border-outline-variant rounded-xl p-4 focus:ring-0 focus:border-tertiary-container transition-colors appearance-none text-body-md">
                    <option>Select Region</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Middle East</option>
                    <option>Asia Pacific</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-on-surface-variant">Project Specifications</label>
                <textarea className="w-full bg-surface-container-lowest border-outline-variant rounded-xl p-4 focus:ring-0 focus:border-tertiary-container transition-colors text-body-md" placeholder="Tell us about your volume requirements or specific customization needs..." rows={4}></textarea>
              </div>
              <div className="flex items-center gap-3 py-2">
                <input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary" id="newsletter" type="checkbox" />
                <label className="text-sm text-on-surface-variant" htmlFor="newsletter">I agree to the privacy policy and wish to receive the quarterly sustainability report.</label>
              </div>
              <button className="w-full py-5 bg-primary text-on-primary rounded-full font-bold uppercase tracking-widest hover:bg-secondary transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg" type="button">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
