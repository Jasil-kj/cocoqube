import Link from "next/link";

export default function Blogs() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-forest-deep text-white py-14 md:py-24">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex gap-2 text-[#afc7ba] text-[0.9rem] mb-5">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <span>/</span>
            <span>Blogs</span>
          </div>
          <p className="text-label-caps text-[#b9e37f] mb-3">Buyer intelligence</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] max-w-[15ch] leading-[1.08] tracking-[-0.035em] font-[600] mb-4">
            Useful answers before the quotation.
          </h1>
          <p className="text-lede text-[#cce0d5] max-w-[42rem]">
            Short guides for importers, growers and distributors comparing coco substrates and preparing purchase requirements.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="flex flex-col min-h-[17rem] p-7 border border-line rounded-[1.3rem] bg-white shadow-[0_12px_36px_rgba(6,57,35,0.04)]">
            <span className="text-[0.8rem] font-[750] text-muted mb-4 uppercase tracking-[0.05em]">Product specification · 6 min</span>
            <h3 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">Low EC and high EC coco peat: what buyers should compare</h3>
            <p className="text-botanical mb-6">
              Why processing labels alone are incomplete and which test details belong in an RFQ.
            </p>
            <a href="#ec-guide" className="mt-auto text-forest font-[700] hover:text-aqua transition-colors">Read guide →</a>
          </article>
          <article className="flex flex-col min-h-[17rem] p-7 border border-line rounded-[1.3rem] bg-white shadow-[0_12px_36px_rgba(6,57,35,0.04)]">
            <span className="text-[0.8rem] font-[750] text-muted mb-4 uppercase tracking-[0.05em]">RFQ checklist · 5 min</span>
            <h3 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">A commercial grow-bag enquiry in eight details</h3>
            <p className="text-botanical mb-6">
              Crop, slab dimensions, blend, expansion, holes, outer bag, quantity and destination.
            </p>
            <a href="#rfq" className="mt-auto text-forest font-[700] hover:text-aqua transition-colors">Read checklist →</a>
          </article>
          <article className="flex flex-col min-h-[17rem] p-7 border border-line rounded-[1.3rem] bg-white shadow-[0_12px_36px_rgba(6,57,35,0.04)]">
            <span className="text-[0.8rem] font-[750] text-muted mb-4 uppercase tracking-[0.05em]">Export planning · 5 min</span>
            <h3 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">What to confirm before discussing export packing</h3>
            <p className="text-botanical mb-6">
              How specification, unit packs, labels and destination requirements affect the offer.
            </p>
            <a href="#export-packing" className="mt-auto text-forest font-[700] hover:text-aqua transition-colors">Read guide →</a>
          </article>
        </div>
      </section>

      {/* Blogs Details */}
      <section className="bg-white pb-16 md:pb-28">
        <div className="w-[min(calc(100%-2rem),48rem)] mx-auto space-y-24">
          
          <article id="ec-guide" className="scroll-mt-28 prose prose-lg prose-headings:text-forest-ink prose-a:text-forest max-w-none">
            <p className="text-label-caps text-forest mb-3">Guide 01</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-[600] leading-[1.1] mb-6 tracking-[-0.035em]">Low EC and high EC coco peat: what buyers should compare</h2>
            <p className="text-botanical">
              Electrical conductivity is used to discuss soluble salts in coco peat, but the number is meaningful only when the test method, extraction ratio, units, sampling and product condition are known. Two suppliers can report different-looking values because their methods differ.
            </p>
            <h3 className="text-[1.4rem] font-[700] mt-10 mb-4">Low EC does not finish the specification</h3>
            <p className="text-botanical">
              A low-EC requirement should also state whether the material must be washed, buffered or both; the permitted test range; the method; pH expectations; physical structure; moisture; expansion test; packaging and intended crop.
            </p>
            <h3 className="text-[1.4rem] font-[700] mt-10 mb-4">High EC is not automatically a defect</h3>
            <p className="text-botanical">
              Natural or unwashed material may suit soil conditioning, blending or a buyer’s downstream processing. Its suitability depends on the application and the buyer’s operating process. Ask for the lot value using the agreed method before approval.
            </p>
            <h3 className="text-[1.4rem] font-[700] mt-10 mb-4">Useful RFQ wording</h3>
            <p className="text-botanical italic">
              “Please quote the available coco peat block format for [application]. Our target EC is [range] using [test method and units]. Confirm washing/buffering requirement, physical structure, moisture basis, expansion method, pack configuration, quantity and destination.”
            </p>
          </article>

          <article id="rfq" className="scroll-mt-28 prose prose-lg prose-headings:text-forest-ink prose-a:text-forest max-w-none">
            <p className="text-label-caps text-forest mb-3">Guide 02</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-[600] leading-[1.1] mb-6 tracking-[-0.035em]">A commercial grow-bag enquiry in eight details</h2>
            <ol className="text-botanical space-y-3 marker:text-forest marker:font-[700]">
              <li><strong className="text-forest-ink">Crop and system:</strong> state the crop, climate and greenhouse or hydroponic setup.</li>
              <li><strong className="text-forest-ink">Compressed and expanded dimensions:</strong> identify which dimensions you are quoting.</li>
              <li><strong className="text-forest-ink">Substrate composition:</strong> specify pith, chips, fibre and required particle structure.</li>
              <li><strong className="text-forest-ink">Processing:</strong> give EC method and range, washing and buffering requirement.</li>
              <li><strong className="text-forest-ink">Water and air behaviour:</strong> state the buyer’s test or acceptance criteria.</li>
              <li><strong className="text-forest-ink">Outer bag:</strong> colour, UV requirement, printing and label needs.</li>
              <li><strong className="text-forest-ink">Openings:</strong> planting, dripper and drainage-hole pattern.</li>
              <li><strong className="text-forest-ink">Commercial scope:</strong> quantity, destination, required date and sample expectation.</li>
            </ol>
            <p className="text-botanical mt-6">
              A detailed brief reduces unsuitable quotations and makes sample evaluation more useful.
            </p>
          </article>

          <article id="export-packing" className="scroll-mt-28 prose prose-lg prose-headings:text-forest-ink prose-a:text-forest max-w-none">
            <p className="text-label-caps text-forest mb-3">Guide 03</p>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-[600] leading-[1.1] mb-6 tracking-[-0.035em]">What to confirm before discussing export packing</h2>
            <p className="text-botanical">
              Export packing begins with the product specification. Confirm unit weight and tolerances, pack count, pallet preference, container plan, labels, destination language, material declarations and documents requested by the buyer or destination process.
            </p>
            <h3 className="text-[1.4rem] font-[700] mt-10 mb-4">Keep commercial and regulatory statements separate</h3>
            <p className="text-botanical">
              A supplier can coordinate documents, but the importer should confirm classification and destination requirements with the relevant authorities or an appointed broker. Do not rely on a broad claim such as “international standard” without naming the applicable standard and product scope.
            </p>
            <h3 className="text-[1.4rem] font-[700] mt-10 mb-4">Ask for an order-specific packing summary</h3>
            <p className="text-botanical">
              The summary should identify the SKU revision, number of units, unit and gross weights, outer dimensions, pallet or floor-loading arrangement, marks, labels and agreed evidence before dispatch.
            </p>
          </article>

        </div>
      </section>

      {/* CTA Band */}
      <div className="px-5 max-w-[76rem] mx-auto mb-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest to-[#0b4b32] p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-white">
          <div className="absolute -right-28 -bottom-36 w-[21rem] h-[21rem] border border-[#8cc84b]/30 rounded-full"></div>
          <div className="relative z-10">
            <p className="text-label-caps text-[#b9e37f] mb-3">Have a defined requirement?</p>
            <h2 className="text-[clamp(2rem,4vw,3.6rem)] max-w-[17ch] leading-[1.08] font-[600] tracking-[-0.035em] m-0">Turn it into a structured enquiry.</h2>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3">
            <Link className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] bg-leaf text-[#12331f] hover:bg-[#a5dc67] transition-colors" href="/wholesale-enquiry">
              Wholesale form
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] text-white border border-white/30 hover:border-white transition-colors" href="/export-enquiry">
              Export form
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
