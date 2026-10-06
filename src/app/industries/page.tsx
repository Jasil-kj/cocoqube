import Link from "next/link";

export default function Industries() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-forest-deep text-white py-14 md:py-24">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex gap-2 text-[#afc7ba] text-[0.9rem] mb-5">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <span>/</span>
            <span>Industries</span>
          </div>
          <p className="text-label-caps text-[#b9e37f] mb-3">Coir solutions by application</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] max-w-[15ch] leading-[1.08] tracking-[-0.035em] font-[600] mb-4">
            Products selected around the buyer’s growing system and market.
          </h1>
          <p className="text-lede text-[#cce0d5] max-w-[42rem]">
            From greenhouse substrates to wholesale nursery products, CocoQube helps commercial buyers define the right coir format, dimensions, processing and packing.
          </p>
        </div>
      </section>

      {/* Industries Detail Grid */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <article id="greenhouse" className="p-6 md:p-10 border border-line rounded-[1.3rem] bg-white scroll-mt-36">
            <p className="text-label-caps text-forest mb-3">Controlled environment agriculture</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.7rem)] mb-4">Greenhouses, hydroponics and commercial growers</h2>
            <p className="text-botanical mb-6">
              Source low EC coco peat, washed and buffered substrate options, coco husk chip blends and crop-specific coco peat grow bags for protected cultivation. Requirements can cover compressed and expanded dimensions, pith-chip ratio, EC test method, pH, planting holes, drainage pattern and UV-treated sleeve specifications.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Link href="/products#coco-substrates" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Low EC coco peat blocks</Link>
              <Link href="/products#grow-bags" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Coco peat grow bags</Link>
              <Link href="/export-enquiry" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Request export supply</Link>
            </div>
          </article>

          <article id="nursery" className="p-6 md:p-10 border border-line rounded-[1.3rem] bg-white scroll-mt-36">
            <p className="text-label-caps text-forest mb-3">Propagation & transplanting</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.7rem)] mb-4">Nurseries, propagation businesses and garden centres</h2>
            <p className="text-botanical mb-6">
              Build nursery assortments with biodegradable coir pots, seedling cups, Spanish pots, compressed coco coins, propagation trays, grow mats and microgreen mats. Standard sizes and customized formats can be reviewed for bulk nursery use, resale packs or private-label programmes.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Link href="/products#coir-pots" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Wholesale coir pots</Link>
              <Link href="/products#support" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Coins and propagation products</Link>
              <Link href="/wholesale-enquiry" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Wholesale enquiry</Link>
            </div>
          </article>

          <article id="distribution" className="p-6 md:p-10 border border-line rounded-[1.3rem] bg-white scroll-mt-36">
            <p className="text-label-caps text-forest mb-3">Bulk sourcing</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.7rem)] mb-4">Importers, horticulture distributors and wholesale buyers</h2>
            <p className="text-botanical mb-6">
              CocoQube coordinates single-product and mixed-range enquiries from India. Buyers can define product specifications, container or pallet quantities, private-label requirements, packing configuration, destination documentation and preferred Incoterm before commercial evaluation.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Link href="/products" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Complete coir catalogue</Link>
              <Link href="/blogs#export-packing" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Export packing guide</Link>
              <Link href="/export-enquiry" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Send an RFQ</Link>
            </div>
          </article>

          <article id="landscaping" className="p-6 md:p-10 border border-line rounded-[1.3rem] bg-white scroll-mt-36">
            <p className="text-label-caps text-forest mb-3">Natural-fibre landscape products</p>
            <h2 className="text-[clamp(1.7rem,3vw,2.7rem)] mb-4">Landscaping companies, planter brands and garden retailers</h2>
            <p className="text-botanical mb-6">
              Source coir basket liners, wall liners, conical liners, mulch mats, coir needle-felt rolls and coco poles in standard or custom dimensions. Holder sets, hanger configurations, retail labels and carton packing can be discussed for the intended sales channel.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              <Link href="/products#liners" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Coir liners</Link>
              <Link href="/products#mulch" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Mulch mats and rolls</Link>
              <Link href="/products#support" className="px-3 py-2 rounded-full text-forest bg-pale text-[0.82rem] font-[750] hover:bg-forest/10 transition-colors">Coco poles</Link>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#eff6f0] py-16 md:py-28">
        <div className="w-[min(calc(100%-2rem),52rem)] mx-auto">
          <p className="text-label-caps text-forest mb-3">Buyer questions</p>
          <h2 className="text-headline-lg max-w-[21ch] mb-8">Before requesting a coco peat or coir-product quotation</h2>
          
          <details className="border-t border-line py-4 group">
            <summary className="text-forest-ink text-[1.05rem] font-[750] cursor-pointer list-none flex items-center justify-between">
              What information should an export buyer provide?
              <span className="text-forest group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <p className="text-botanical mt-3">
              State the product, intended application, dimensions or format, processing requirement, quantity, destination port, packing, documentation and target shipment date.
            </p>
          </details>

          <details className="border-t border-line py-4 group">
            <summary className="text-forest-ink text-[1.05rem] font-[750] cursor-pointer list-none flex items-center justify-between">
              Are custom coir-product sizes available?
              <span className="text-forest group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <p className="text-botanical mt-3">
              Custom sizes, density, construction, blends and packing can be evaluated. Feasibility and MOQ are confirmed after reviewing the requirement.
            </p>
          </details>

          <details className="border-t border-line py-4 group">
            <summary className="text-forest-ink text-[1.05rem] font-[750] cursor-pointer list-none flex items-center justify-between">
              How should low EC coco peat be specified?
              <span className="text-forest group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <p className="text-botanical mt-3">
              Include the target range, units, extraction method, washing or buffering requirement, physical structure, moisture and expansion method. An EC number without its test method is incomplete.
            </p>
          </details>

          <details className="border-t border-b border-line py-4 group">
            <summary className="text-forest-ink text-[1.05rem] font-[750] cursor-pointer list-none flex items-center justify-between">
              Does CocoQube manufacture every product?
              <span className="text-forest group-open:rotate-45 transition-transform text-2xl">+</span>
            </summary>
            <p className="text-botanical mt-3">
              CocoQube is a coir brand and B2B supply partner. We coordinate suitable manufacturing partners and order-specific requirements without presenting CocoQube as the factory.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Band */}
      <div className="px-5 max-w-[76rem] mx-auto my-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest to-[#0b4b32] p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white">
          <div className="absolute -right-28 -bottom-36 w-[21rem] h-[21rem] border border-[#8cc84b]/30 rounded-full"></div>
          <div className="relative z-10">
            <p className="text-label-caps text-[#b9e37f] mb-3">Tell us your market and application</p>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] max-w-[17ch] leading-[1.08] font-[600] tracking-[-0.035em] m-0">Build a buyer-ready requirement.</h2>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3">
            <Link className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] bg-leaf text-[#12331f] hover:bg-[#a5dc67] transition-colors" href="/wholesale-enquiry">
              India wholesale
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] text-white border border-white/30 hover:border-white transition-colors" href="/export-enquiry">
              International export
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
