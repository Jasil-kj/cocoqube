import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-forest-deep text-white py-14 md:py-24">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex gap-2 text-[#afc7ba] text-[0.9rem] mb-5">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <p className="text-label-caps text-[#b9e37f] mb-3">About CocoQube</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] max-w-[15ch] leading-[1.08] tracking-[-0.035em] font-[600] mb-4">
            A focused coir brand built around better B2B buying.
          </h1>
          <p className="text-lede text-[#cce0d5] max-w-[42rem]">
            CocoQube connects wholesale and export buyers with coco growing media and finished coir products from India through clear specifications, coordinated sourcing and responsive commercial communication.
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-28 items-start">
          <div>
            <p className="text-label-caps text-forest mb-3">Our purpose</p>
            <h2 className="text-headline-lg max-w-[17ch]">Make coir sourcing easier to understand and easier to manage.</h2>
          </div>
          <div className="text-botanical text-[1.05rem] space-y-4">
            <p>
              CocoQube began with a practical observation: buyers need more than a product name and a price. They need the correct grade, measurable specification, dimensions, packing, documentation and delivery scope.
            </p>
            <p>
              We therefore work as a <strong>B2B coir-products brand and supply partner</strong>. We understand the requirement, identify a suitable production route, coordinate samples and specifications, and support the commercial process through dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* What we supply */}
      <section className="bg-forest-ink text-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-label-caps text-[#b9e37f] mb-3">What we supply</p>
              <h2 className="text-headline-lg max-w-[17ch]">Growing media and finished coir products through one contact.</h2>
            </div>
            <p className="text-[#b9c9c0] max-w-[38rem]">
              Our lead export range is supported by a broader catalogue for nurseries, garden retail and landscaping buyers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <article className="p-7 border-t border-white/25">
              <h3 className="text-[1.3rem] font-[600] tracking-[-0.035em] mb-3">Coco substrates</h3>
              <p className="text-[#b9c9c0]">Low EC coco peat, high EC coco peat, compressed blocks, briquettes, husk chips and buyer-defined substrate blends.</p>
            </article>
            <article className="p-7 border-t border-white/25">
              <h3 className="text-[1.3rem] font-[600] tracking-[-0.035em] mb-3">Professional grow bags</h3>
              <p className="text-[#b9c9c0]">Coco peat grow bags developed around crop, dimensions, blend, sleeve, planting holes and drainage pattern.</p>
            </article>
            <article className="p-7 border-t border-white/25">
              <h3 className="text-[1.3rem] font-[600] tracking-[-0.035em] mb-3">Finished coir products</h3>
              <p className="text-[#b9c9c0]">Coir pots, liners, mulch mats, rolls, grow mats, coco poles, compressed coins, trays and utility products.</p>
            </article>
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-label-caps text-forest mb-3">How we operate</p>
              <h2 className="text-headline-lg max-w-[17ch]">Clear about our role in the supply chain.</h2>
            </div>
            <p className="text-muted max-w-[38rem]">
              CocoQube does not present itself as the factory. We coordinate suitable manufacturing partners and order-specific requirements under the CocoQube brand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <article className="min-h-[19rem] p-6 border border-line rounded-[1.2rem] bg-white">
              <span className="block mb-14 text-aqua font-[900] text-lg">01</span>
              <h3 className="text-[1.3rem] font-[600] tracking-[-0.035em] text-forest-ink mb-2">Specification before quotation</h3>
              <p className="text-muted">We clarify the use, grade, size, quantity, destination and packing before developing the offer.</p>
            </article>
            <article className="min-h-[19rem] p-6 border border-line rounded-[1.2rem] bg-white">
              <span className="block mb-14 text-aqua font-[900] text-lg">02</span>
              <h3 className="text-[1.3rem] font-[600] tracking-[-0.035em] text-forest-ink mb-2">Verified claims</h3>
              <p className="text-muted">Product values, registrations and documentation are presented only when supported by an applicable record.</p>
            </article>
            <article className="min-h-[19rem] p-6 border border-line rounded-[1.2rem] bg-white">
              <span className="block mb-14 text-aqua font-[900] text-lg">03</span>
              <h3 className="text-[1.3rem] font-[600] tracking-[-0.035em] text-forest-ink mb-2">Buyer-specific coordination</h3>
              <p className="text-muted">Samples, labels, packing, commercial terms and dispatch requirements are aligned to the confirmed order scope.</p>
            </article>
            <article className="min-h-[19rem] p-6 border border-line rounded-[1.2rem] bg-white">
              <span className="block mb-14 text-aqua font-[900] text-lg">04</span>
              <h3 className="text-[1.3rem] font-[600] tracking-[-0.035em] text-forest-ink mb-2">Long-term B2B relationships</h3>
              <p className="text-muted">Our focus is repeat wholesale and export business built on clear communication and consistent requirements.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Founder band */}
      <section className="bg-gradient-to-br from-forest-ink to-forest-deep text-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-28 items-start">
          <div>
            <p className="text-label-caps text-[#b9e37f] mb-3">Founder-led</p>
            <h2 className="text-headline-lg max-w-[17ch]">Built by Febi Francis in Bengaluru, India.</h2>
          </div>
          <div>
            <p className="text-[#c7dacf] text-[1.05rem] mb-6">
              CocoQube is being developed as a specialized coir-products brand for buyers seeking responsive service, an organized product portfolio and a practical route to Indian supply.
            </p>
            <Link className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] bg-leaf text-[#12331f] hover:bg-[#a5dc67] transition-colors" href="/contact">
              Contact CocoQube
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="px-5 max-w-[76rem] mx-auto my-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest to-[#0b4b32] p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white">
          <div className="absolute -right-28 -bottom-36 w-[21rem] h-[21rem] border border-[#8cc84b]/30 rounded-full"></div>
          <div className="relative z-10">
            <p className="text-label-caps text-[#b9e37f] mb-3">Discuss your requirement</p>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] max-w-[17ch] leading-[1.08] font-[600] tracking-[-0.035em] m-0">Start with the product and application.</h2>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3">
            <Link className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] bg-leaf text-[#12331f] hover:bg-[#a5dc67] transition-colors" href="/wholesale-enquiry">
              Wholesale enquiry
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] text-white border border-white/30 hover:border-white transition-colors" href="/export-enquiry">
              Export enquiry
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
