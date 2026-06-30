export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="relative min-h-[60vh] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop py-24 bg-surface-container-low">
        <div className="max-w-4xl z-10 mx-auto text-center">
          <span className="font-label-caps text-secondary uppercase mb-4 block">Our Story</span>
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6">Rooted in Sustainability</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Cocoqube Coir began with a simple mission: to harness the natural power of the coconut and deliver premium, eco-friendly solutions to the world.
          </p>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square bg-surface-container-high rounded-[40px] overflow-hidden">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmR_ppJh5aDAnQh3s9a8WmKHmCCVxQ5PjQwAZeIfutwB1wPcUSsDFgb0AMhUeX1sEeh_RD3gsqssdB1ygWXMw7IjuZUljGS5qU0vf7r9gbWGzOIvGmwKYvN6x60p1mxWcpRRSjwBWduETXUaj5tbMsZ_JErlJuq15K-_odX5ueZdLxxlBvVthbjCsJ1yYi7yHRe--RARJRts-HHrahRQ49UtRyc3r1CHPiuqAMBWK02pC8GZPWsdrT7x56EdT2x-vM3EI_iKbbo0jE" alt="About Cocoqube" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="font-headline-md text-headline-md text-primary">Commitment to Quality</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Every fiber we process undergoes rigorous quality checks to ensure it meets our exacting standards. We partner with local communities in Sri Lanka, ensuring fair trade practices while maintaining the highest level of craftsmanship.
            </p>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Our facilities are fully certified and designed for zero-waste production. By turning agricultural byproducts into premium horticultural and architectural materials, we are shaping a greener future.
            </p>
            <div className="pt-8 flex flex-wrap gap-4">
               <span className="px-6 py-2 border border-outline-variant rounded-full text-primary font-bold">ISO 9001</span>
               <span className="px-6 py-2 border border-outline-variant rounded-full text-primary font-bold">Organic Certified</span>
               <span className="px-6 py-2 border border-outline-variant rounded-full text-primary font-bold">Fair Trade</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
