export default function ExportEnquiry() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-forest-deep text-white py-14 md:py-24">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex gap-2 text-[#afc7ba] text-[0.9rem] mb-5">
            <a href="/" className="text-white hover:underline">Home</a>
            <span>/</span>
            <span>Export enquiry</span>
          </div>
          <p className="text-label-caps text-[#b9e37f] mb-3">International B2B</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] max-w-[15ch] leading-[1.08] tracking-[-0.035em] font-[600] mb-4">
            Start with the import requirement.
          </h1>
          <p className="text-lede text-[#cce0d5] max-w-[42rem]">
            For importers, substrate distributors, greenhouse suppliers, commercial growers and private-label buyers evaluating supply from India.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-[0.72fr_1.28fr] gap-12 items-start">
          
          <aside className="md:sticky md:top-28">
            <p className="text-label-caps text-forest mb-3">A stronger export RFQ</p>
            <h2 className="text-headline-lg mb-6">Give us enough information to assess fit.</h2>
            <p className="text-botanical text-[1.05rem] mb-6">
              Specifications, quantity, destination and documentation scope determine whether an offer is commercially and technically useful.
            </p>
            <ul className="list-none p-0 m-0 space-y-4">
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">State EC range, units and test method</li>
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">Define product dimensions and substrate structure</li>
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">Give volume, destination port and timeline</li>
              <li className="relative pl-8 border-b border-line pb-3 before:content-['✓'] before:absolute before:left-0 before:text-forest before:font-[900]">List packing, label and document requirements</li>
            </ul>
            <p className="text-[0.88rem] text-muted mt-6">
              Destination classification and import conditions should be confirmed by the importer with the relevant authority or appointed broker.
            </p>
          </aside>

          <form className="p-[clamp(1.5rem,4vw,2.8rem)] border border-line rounded-[1.5rem] bg-white shadow-[0_18px_60px_rgba(6,57,35,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-name" className="text-forest-ink font-[700] text-[0.9rem]">Full name <span className="text-[#a33b2d]">*</span></label>
                <input id="e-name" name="Name" required autoComplete="name" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-company" className="text-forest-ink font-[700] text-[0.9rem]">Company <span className="text-[#a33b2d]">*</span></label>
                <input id="e-company" name="Company" required autoComplete="organization" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-country" className="text-forest-ink font-[700] text-[0.9rem]">Country <span className="text-[#a33b2d]">*</span></label>
                <input id="e-country" name="Country" required autoComplete="country-name" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-role" className="text-forest-ink font-[700] text-[0.9rem]">Role</label>
                <input id="e-role" name="Role" placeholder="Importer, distributor, grower…" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-email" className="text-forest-ink font-[700] text-[0.9rem]">Business email <span className="text-[#a33b2d]">*</span></label>
                <input id="e-email" name="Business email" type="email" required autoComplete="email" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-phone" className="text-forest-ink font-[700] text-[0.9rem]">Phone / WhatsApp <span className="text-[#a33b2d]">*</span></label>
                <input id="e-phone" name="Phone or WhatsApp" required autoComplete="tel" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-product" className="text-forest-ink font-[700] text-[0.9rem]">Product <span className="text-[#a33b2d]">*</span></label>
                <select id="e-product" name="Product" required className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua">
                  <option value="">Select</option>
                  <option>Low EC coco peat blocks</option>
                  <option>High EC coco peat blocks</option>
                  <option>Coco peat grow bags</option>
                  <option>Coco husk chip blocks</option>
                  <option>Coir pots / seedling cups</option>
                  <option>Coir liners / wall liners</option>
                  <option>Mulch mats / coir rolls</option>
                  <option>Coco poles</option>
                  <option>Coco coins / propagation products</option>
                  <option>Coir scrub pads</option>
                  <option>Mixed coir product range</option>
                </select>
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-use" className="text-forest-ink font-[700] text-[0.9rem]">Crop / application <span className="text-[#a33b2d]">*</span></label>
                <input id="e-use" name="Crop or application" required className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-ec" className="text-forest-ink font-[700] text-[0.9rem]">EC / processing requirement</label>
                <input id="e-ec" name="EC and processing requirement" placeholder="Range, units, method, washed/buffered" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-size" className="text-forest-ink font-[700] text-[0.9rem]">Dimensions / format</label>
                <input id="e-size" name="Dimensions or format" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-blend" className="text-forest-ink font-[700] text-[0.9rem]">Substrate structure or blend</label>
                <input id="e-blend" name="Substrate structure or blend" placeholder="Pith, chips, fibre, particle range" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-qty" className="text-forest-ink font-[700] text-[0.9rem]">Required quantity <span className="text-[#a33b2d]">*</span></label>
                <input id="e-qty" name="Required quantity" required placeholder="Trial, pallets, tonnes or containers" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-port" className="text-forest-ink font-[700] text-[0.9rem]">Destination port / city <span className="text-[#a33b2d]">*</span></label>
                <input id="e-port" name="Destination port or city" required className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-term" className="text-forest-ink font-[700] text-[0.9rem]">Preferred commercial basis</label>
                <select id="e-term" name="Preferred commercial basis" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua">
                  <option>Open to discussion</option>
                  <option>EXW</option>
                  <option>FOB</option>
                  <option>CFR</option>
                  <option>CIF</option>
                </select>
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-pack" className="text-forest-ink font-[700] text-[0.9rem]">Packing / private label</label>
                <input id="e-pack" name="Packing or private-label requirement" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-docs" className="text-forest-ink font-[700] text-[0.9rem]">Required documents</label>
                <input id="e-docs" name="Required documents" placeholder="List buyer/destination requirements" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-date" className="text-forest-ink font-[700] text-[0.9rem]">Target shipment date</label>
                <input id="e-date" name="Target shipment date" type="date" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              <div className="grid gap-[0.4rem] mb-2">
                <label htmlFor="e-sample" className="text-forest-ink font-[700] text-[0.9rem]">Sample expectation</label>
                <select id="e-sample" name="Sample expectation" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua">
                  <option>Discuss after initial review</option>
                  <option>Paid sample requested</option>
                  <option>Existing approved specification</option>
                  <option>Trial order preferred</option>
                </select>
              </div>
              <div className="grid gap-[0.4rem] mb-2 md:col-span-2">
                <label htmlFor="e-notes" className="text-forest-ink font-[700] text-[0.9rem]">Additional specification or commercial notes</label>
                <textarea id="e-notes" name="Additional notes" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[7.5rem] resize-y focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua"></textarea>
              </div>
            </div>

            <button type="submit" className="w-full mt-4 flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] text-white bg-forest hover:bg-forest-deep transition-colors">
              Prepare export enquiry on WhatsApp
            </button>
            <p className="mt-4 text-muted text-[0.85rem]">
              The website does not store this form. Your structured message opens in WhatsApp for you to review and send to CocoQube.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
