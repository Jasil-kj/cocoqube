import Link from "next/link";

export default function Certifications() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-forest-deep text-white py-14 md:py-24">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex gap-2 text-[#afc7ba] text-[0.9rem] mb-5">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <span>/</span>
            <span>Registrations</span>
          </div>
          <p className="text-label-caps text-[#b9e37f] mb-3">Business verification</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] max-w-[15ch] leading-[1.08] tracking-[-0.035em] font-[600] mb-4">
            Registrations and certificate records.
          </h1>
          <p className="text-lede text-[#cce0d5] max-w-[42rem]">
            CocoQube publishes registration documents only after the corresponding certificate file and registration details have been verified for public display.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto">
          
          <div className="p-4 px-6 md:px-8 mb-12 border-l-[4px] border-[#c08620] bg-pale shadow-[0_10px_30px_rgba(6,57,35,0.05)] rounded-r-[0.9rem] flex flex-col gap-2">
            <strong className="text-forest-ink">Document status</strong>
            <p className="text-botanical m-0">
              The certificate PDFs have not yet been added to this website package. The categories below are prepared for publication; no registration number or approval is claimed on this page until its source document is supplied.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article id="coir-board" className="min-h-[14rem] p-6 md:p-8 border border-line rounded-[1.2rem] bg-white flex flex-col md:flex-row gap-6 items-start">
              <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-forest text-white font-[800] text-[1.25rem] flex items-center justify-center flex-none">CB</div>
              <div>
                <p className="text-label-caps text-forest mb-2">Sector registration</p>
                <h2 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">Coir Board of India</h2>
                <p className="text-botanical mb-5">Reserved for the applicable Coir Board registration or exporter record.</p>
                <span className="inline-block px-3 py-1 bg-pale text-forest font-[600] text-[0.8rem] rounded-full border border-line">Certificate file pending</span>
              </div>
            </article>

            <article id="fieo" className="min-h-[14rem] p-6 md:p-8 border border-line rounded-[1.2rem] bg-white flex flex-col md:flex-row gap-6 items-start">
              <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-forest text-white font-[800] text-[1.25rem] flex items-center justify-center flex-none">FIEO</div>
              <div>
                <p className="text-label-caps text-forest mb-2">Export organization</p>
                <h2 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">Federation of Indian Export Organisations</h2>
                <p className="text-botanical mb-5">Reserved for the applicable FIEO registration-cum-membership certificate.</p>
                <span className="inline-block px-3 py-1 bg-pale text-forest font-[600] text-[0.8rem] rounded-full border border-line">Certificate file pending</span>
              </div>
            </article>

            <article id="iec" className="min-h-[14rem] p-6 md:p-8 border border-line rounded-[1.2rem] bg-white flex flex-col md:flex-row gap-6 items-start">
              <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-forest text-white font-[800] text-[1.25rem] flex items-center justify-center flex-none">IEC</div>
              <div>
                <p className="text-label-caps text-forest mb-2">Import-export registration</p>
                <h2 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">IEC / Customs documentation</h2>
                <p className="text-botanical mb-5">Reserved for the DGFT Importer Exporter Code or related customs registration document approved for display.</p>
                <span className="inline-block px-3 py-1 bg-pale text-forest font-[600] text-[0.8rem] rounded-full border border-line">Certificate file pending</span>
              </div>
            </article>

            <article id="gst" className="min-h-[14rem] p-6 md:p-8 border border-line rounded-[1.2rem] bg-white flex flex-col md:flex-row gap-6 items-start">
              <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-forest text-white font-[800] text-[1.25rem] flex items-center justify-center flex-none">GST</div>
              <div>
                <p className="text-label-caps text-forest mb-2">Tax registration</p>
                <h2 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">GST registration</h2>
                <p className="text-botanical mb-5">Reserved for the GST registration certificate with any sensitive fields reviewed before publication.</p>
                <span className="inline-block px-3 py-1 bg-pale text-forest font-[600] text-[0.8rem] rounded-full border border-line">Certificate file pending</span>
              </div>
            </article>

            <article id="msme" className="min-h-[14rem] p-6 md:p-8 border border-line rounded-[1.2rem] bg-white flex flex-col md:flex-row gap-6 items-start">
              <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-forest text-white font-[800] text-[1.25rem] flex items-center justify-center flex-none">MSME</div>
              <div>
                <p className="text-label-caps text-forest mb-2">Enterprise registration</p>
                <h2 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">MSME registration</h2>
                <p className="text-botanical mb-5">MSME status is generally evidenced through the Udyam Registration Certificate.</p>
                <span className="inline-block px-3 py-1 bg-pale text-forest font-[600] text-[0.8rem] rounded-full border border-line">Certificate file pending</span>
              </div>
            </article>

            <article id="udyam" className="min-h-[14rem] p-6 md:p-8 border border-line rounded-[1.2rem] bg-white flex flex-col md:flex-row gap-6 items-start">
              <div className="w-[4.8rem] h-[4.8rem] rounded-full bg-forest text-white font-[800] text-[1.25rem] flex items-center justify-center flex-none">UDYAM</div>
              <div>
                <p className="text-label-caps text-forest mb-2">Enterprise identity</p>
                <h2 className="text-[1.5rem] font-[700] text-forest-ink mb-3 leading-[1.2]">Udyam Registration</h2>
                <p className="text-botanical mb-5">Reserved for the verified Udyam Registration Certificate and approved public registration details.</p>
                <span className="inline-block px-3 py-1 bg-pale text-forest font-[600] text-[0.8rem] rounded-full border border-line">Certificate file pending</span>
              </div>
            </article>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#eff6f0] py-16 md:py-28">
        <div className="w-[min(calc(100%-2rem),52rem)] mx-auto">
          <p className="text-label-caps text-forest mb-3">Buyer verification</p>
          <h2 className="text-headline-lg max-w-[21ch] mb-6">How certificate links will work</h2>
          <p className="text-botanical text-[1.05rem] mb-4">
            Once a verified PDF is added, the matching homepage card will open that certificate in a new browser tab. Registration numbers can also be displayed alongside the issuing authority and document-validity information where applicable.
          </p>
          <p className="text-botanical text-[1.05rem] mb-8">
            Buyers requiring documents before public publication can request the relevant record during commercial evaluation.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] text-white bg-forest-ink hover:bg-[#12331f] transition-colors">
            Request documentation
          </Link>
        </div>
      </section>
    </main>
  );
}
