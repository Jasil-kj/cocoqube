import Link from "next/link";

export default function WholesaleEnquiry() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-forest-deep text-white py-14 md:py-24">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex gap-2 text-[#afc7ba] text-[0.9rem] mb-5">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <span>/</span>
            <span>Wholesale enquiry</span>
          </div>
          <p className="text-label-caps text-[#b9e37f] mb-3">India wholesale</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] max-w-[15ch] leading-[1.08] tracking-[-0.035em] font-[600] mb-4">
            Request a relevant wholesale quotation.
          </h1>
          <p className="text-lede text-[#cce0d5] max-w-[42rem]">
            For nurseries, horticulture suppliers, garden businesses, landscapers and other Indian B2B buyers.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-[0.72fr_1.28fr] gap-12 items-start">
          
          <aside className="md:sticky md:top-28">
            <p className="text-label-caps text-forest mb-3">Before you submit</p>
            <h2 className="text-headline-lg mb-6">Product, quantity and destination come first.</h2>
            <p className="text-botanical text-[1.05rem] mb-6 font-[600]">
              Use this form for Indian wholesale requirements. Export buyers should use the dedicated export form.
            </p>
            <ul className="list-none p-0 m-0 space-y-4">
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">Share the required product and size</li>
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">Give an estimated quantity</li>
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">Include delivery city and pincode</li>
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">State intended use and required date</li>
            </ul>
            <p className="mt-6">
              <Link href="/export-enquiry" className="text-forest font-[600] underline hover:text-forest-ink transition-colors">
                International buyer? Use export enquiry →
              </Link>
            </p>
          </aside>

          <form className="p-[clamp(1.5rem,4vw,2.8rem)] border border-line rounded-[1.5rem] bg-white shadow-[0_18px_60px_rgba(6,57,35,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-name" className="text-forest-ink font-[700] text-[0.9rem]">Full name <span className="text-[#a33b2d]">*</span></label>
                <input id="w-name" name="Name" required autoComplete="name" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-company" className="text-forest-ink font-[700] text-[0.9rem]">Company <span className="text-[#a33b2d]">*</span></label>
                <input id="w-company" name="Company" required autoComplete="organization" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-phone" className="text-forest-ink font-[700] text-[0.9rem]">Phone / WhatsApp <span className="text-[#a33b2d]">*</span></label>
                <input id="w-phone" name="Phone or WhatsApp" required autoComplete="tel" inputMode="tel" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-email" className="text-forest-ink font-[700] text-[0.9rem]">Business email</label>
                <input id="w-email" name="Business email" type="email" autoComplete="email" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-product" className="text-forest-ink font-[700] text-[0.9rem]">Product <span className="text-[#a33b2d]">*</span></label>
                <select id="w-product" name="Product" required className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua">
                  <option value="">Select</option>
                  <option>Low EC coco peat blocks</option>
                  <option>High EC coco peat blocks</option>
                  <option>Coco peat grow bags</option>
                  <option>Coco husk chip blocks</option>
                  <option>Coir pots</option>
                  <option>Seedling cups</option>
                  <option>Basket liners</option>
                  <option>Conical liners</option>
                  <option>Wall liners</option>
                  <option>Coir mulch mats</option>
                  <option>Coir needle felt rolls</option>
                  <option>Coir grow mats</option>
                  <option>Coco poles</option>
                  <option>Coco coins</option>
                  <option>Coir trays</option>
                  <option>Coir scrub pads</option>
                  <option>Mixed product requirement</option>
                </select>
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-qty" className="text-forest-ink font-[700] text-[0.9rem]">Estimated quantity <span className="text-[#a33b2d]">*</span></label>
                <input id="w-qty" name="Estimated quantity" required placeholder="Units, kg, tonnes or cartons" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-city" className="text-forest-ink font-[700] text-[0.9rem]">Delivery city <span className="text-[#a33b2d]">*</span></label>
                <input id="w-city" name="Delivery city" required className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-pin" className="text-forest-ink font-[700] text-[0.9rem]">Pincode <span className="text-[#a33b2d]">*</span></label>
                <input id="w-pin" name="Pincode" required inputMode="numeric" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2 md:col-span-2">
                <label htmlFor="w-use" className="text-forest-ink font-[700] text-[0.9rem]">Intended use / buyer type <span className="text-[#a33b2d]">*</span></label>
                <input id="w-use" name="Intended use or buyer type" required placeholder="Nursery, resale, landscaping, greenhouse…" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-date" className="text-forest-ink font-[700] text-[0.9rem]">Required date</label>
                <input id="w-date" name="Required date" type="date" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="w-pack" className="text-forest-ink font-[700] text-[0.9rem]">Packing or label requirement</label>
                <input id="w-pack" name="Packing or label requirement" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2 md:col-span-2">
                <label htmlFor="w-notes" className="text-forest-ink font-[700] text-[0.9rem]">Specification or additional notes</label>
                <textarea id="w-notes" name="Specification or notes" placeholder="Size, grade, processing, dimensions, repeat frequency or other information" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[7.5rem] resize-y focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua"></textarea>
              </div>
            </div>

            <button type="submit" className="w-full mt-4 flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] text-white bg-forest hover:bg-forest-deep transition-colors">
              Prepare wholesale enquiry on WhatsApp
            </button>
            <p className="mt-4 text-muted text-[0.85rem]">
              The website does not store this form. Your structured message opens in WhatsApp for you to review and send to +91 87143 52330.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
