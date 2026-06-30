export default function ExportPage() {
  return (
    <main className="pt-20">
      <section className="relative min-h-[50vh] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop py-24">
        <div className="max-w-4xl z-10">
          <span className="font-label-caps text-secondary uppercase mb-4 block">Global Supply</span>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6">Export Capabilities</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Reliable, large-scale international shipping. From standard container loads to custom packaging, we deliver Cocoqube Coir anywhere in the world.
          </p>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">directions_boat</span>
            <h3 className="font-headline-md text-2xl text-primary mb-4">Ocean Freight</h3>
            <p className="text-on-surface-variant">We efficiently pack 20ft and 40ft High Cube containers. Our palletized and bare-loading techniques maximize volume and reduce your shipping costs.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">verified_user</span>
            <h3 className="font-headline-md text-2xl text-primary mb-4">Customs & Compliance</h3>
            <p className="text-on-surface-variant">We provide all necessary documentation including Phytosanitary Certificates, Fumigation Certificates, and Certificates of Origin to guarantee smooth port clearance.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-outline-variant">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">package_2</span>
            <h3 className="font-headline-md text-2xl text-primary mb-4">White-Label Packaging</h3>
            <p className="text-on-surface-variant">For wholesale distributors, we offer custom branding and specialized packaging sizes directly from our production floor.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
