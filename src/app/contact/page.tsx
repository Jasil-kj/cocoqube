import Link from "next/link";

export default function Contact() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-forest-deep text-white py-14 md:py-24">
        <div className="px-5 max-w-[76rem] mx-auto">
          <div className="flex gap-2 text-[#afc7ba] text-[0.9rem] mb-5">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <p className="text-label-caps text-[#b9e37f] mb-3">Contact CocoQube</p>
          <h1 className="text-[clamp(2.8rem,6vw,5rem)] max-w-[15ch] leading-[1.08] tracking-[-0.035em] font-[600] mb-4">
            Tell us what you need to source.
          </h1>
          <p className="text-lede text-[#cce0d5] max-w-[42rem]">
            Choose the enquiry route that matches your requirement, or send a general message for product, documentation or partnership questions.
          </p>
        </div>
      </section>

      {/* Choice Grid */}
      <section className="bg-white py-16 md:py-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/wholesale-enquiry" className="flex flex-col min-h-[17rem] p-8 border border-line rounded-[1.4rem] bg-white shadow-[0_14px_40px_rgba(6,57,35,0.06)] hover:border-aqua transition-colors text-decoration-none group">
            <span className="text-aqua text-[0.8rem] font-[900] tracking-[0.1em] uppercase">India</span>
            <h2 className="text-[clamp(1.75rem,3vw,2.6rem)] my-3">Wholesale enquiry</h2>
            <p className="text-muted">
              For nurseries, garden businesses, distributors, landscapers and repeat domestic buyers.
            </p>
            <strong className="mt-auto text-forest group-hover:text-aqua transition-colors">Open wholesale form →</strong>
          </Link>
          <Link href="/export-enquiry" className="flex flex-col min-h-[17rem] p-8 border border-line rounded-[1.4rem] bg-white shadow-[0_14px_40px_rgba(6,57,35,0.06)] hover:border-aqua transition-colors text-decoration-none group">
            <span className="text-aqua text-[0.8rem] font-[900] tracking-[0.1em] uppercase">International</span>
            <h2 className="text-[clamp(1.75rem,3vw,2.6rem)] my-3">Export enquiry</h2>
            <p className="text-muted">
              For importers, distributors and commercial growers requiring product and shipment specifications.
            </p>
            <strong className="mt-auto text-forest group-hover:text-aqua transition-colors">Open export form →</strong>
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white pb-16 md:pb-28">
        <div className="px-5 max-w-[76rem] mx-auto grid grid-cols-1 md:grid-cols-[0.72fr_1.28fr] gap-12 items-start">
          
          <aside className="md:sticky md:top-28">
            <p className="text-label-caps text-forest mb-3">Direct contact</p>
            <h2 className="text-headline-lg mb-6">CocoQube, Bengaluru, India</h2>
            
            <div className="grid gap-3 my-6">
              <a href="tel:+918714352330" className="grid gap-1 p-4 border border-line rounded-[0.9rem] bg-white hover:border-aqua transition-colors">
                <small className="text-muted text-sm">Phone / WhatsApp</small>
                <strong className="text-forest text-lg">+91 87143 52330</strong>
              </a>
              <a href="https://wa.me/918714352330" target="_blank" rel="noopener noreferrer" className="grid gap-1 p-4 border border-line rounded-[0.9rem] bg-white hover:border-aqua transition-colors">
                <small className="text-muted text-sm">Message</small>
                <strong className="text-forest text-lg">Open WhatsApp</strong>
              </a>
              <a href="https://www.cocoqube.com" target="_blank" rel="noopener noreferrer" className="grid gap-1 p-4 border border-line rounded-[0.9rem] bg-white hover:border-aqua transition-colors">
                <small className="text-muted text-sm">Website</small>
                <strong className="text-forest text-lg">www.cocoqube.com</strong>
              </a>
            </div>
            <p className="text-[0.88rem] text-muted">
              Business email and full office address will be published when confirmed for public enquiries.
            </p>
          </aside>

          <form className="p-[clamp(1.5rem,4vw,2.8rem)] border border-line rounded-[1.5rem] bg-white shadow-[0_18px_60px_rgba(6,57,35,0.08)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-[0.4rem] mb-4">
                <label htmlFor="c-name" className="text-forest-ink font-[700] text-[0.9rem]">Full name <span className="text-[#a33b2d]">*</span></label>
                <input id="c-name" name="Name" required autoComplete="name" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>
              
              <div className="grid gap-[0.4rem] mb-4">
                <label htmlFor="c-company" className="text-forest-ink font-[700] text-[0.9rem]">Company</label>
                <input id="c-company" name="Company" autoComplete="organization" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>

              <div className="grid gap-[0.4rem] mb-4">
                <label htmlFor="c-phone" className="text-forest-ink font-[700] text-[0.9rem]">Phone / WhatsApp <span className="text-[#a33b2d]">*</span></label>
                <input id="c-phone" name="Phone or WhatsApp" required autoComplete="tel" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>

              <div className="grid gap-[0.4rem] mb-4">
                <label htmlFor="c-country" className="text-forest-ink font-[700] text-[0.9rem]">City / country</label>
                <input id="c-country" name="City or country" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>

              <div className="grid gap-[0.4rem] mb-4 md:col-span-2">
                <label htmlFor="c-subject" className="text-forest-ink font-[700] text-[0.9rem]">Subject <span className="text-[#a33b2d]">*</span></label>
                <input id="c-subject" name="Subject" required placeholder="Product, documentation, partnership or general enquiry" className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[3rem] focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua" />
              </div>

              <div className="grid gap-[0.4rem] mb-4 md:col-span-2">
                <label htmlFor="c-message" className="text-forest-ink font-[700] text-[0.9rem]">Message <span className="text-[#a33b2d]">*</span></label>
                <textarea id="c-message" name="Message" required className="w-full border border-[#bdcfc4] rounded-[0.75rem] bg-white text-forest-ink p-3 min-h-[7.5rem] resize-y focus:outline focus:outline-[3px] focus:outline-[rgba(0,167,200,0.18)] focus:border-aqua"></textarea>
              </div>
            </div>

            <button type="button" className="w-full mt-4 flex items-center justify-center gap-2 min-h-[3.2rem] px-5 py-3 rounded-full font-[750] text-white bg-forest hover:bg-forest-deep transition-colors">
              Prepare message on WhatsApp
            </button>
            <p className="mt-4 text-muted text-[0.85rem]">
              The website does not store this form. Your message opens in WhatsApp for you to review and send.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
