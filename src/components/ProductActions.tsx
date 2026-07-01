"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductActionsProps {
  productName: string;
}

export default function ProductActions({ productName }: ProductActionsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          Add to RFQ
        </button>
        <button 
          onClick={() => window.open(`https://wa.me/919999999999?text=Hi, I would like to inquire about ${encodeURIComponent(productName)}.`)}
          className="flex-1 bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          WhatsApp Enquiry
        </button>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-surface dark:bg-[#1a1a1a] rounded-[24px] shadow-2xl p-6 md:p-8 overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-on-surface/50 hover:text-on-surface bg-surface-container rounded-full p-2 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <h2 className="text-2xl font-serif font-bold text-primary mb-2">Request Quote</h2>
              <p className="text-on-surface/70 text-sm mb-6">
                Inquiring about: <span className="font-semibold text-on-surface">{productName}</span>
              </p>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">Request Sent!</h3>
                  <p className="text-on-surface/70">Our sales team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-1.5">Full Name *</label>
                      <input required type="text" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface/40" placeholder="e.g. Julianne Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-1.5">Company Name *</label>
                      <input required type="text" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface/40" placeholder="e.g. ArchiTerra Ltd" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-1.5">Business Email *</label>
                      <input required type="email" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface/40" placeholder="julianne@architerra.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-on-surface mb-1.5">Required Qty *</label>
                      <input required type="text" className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary placeholder-on-surface/40" placeholder="e.g. 1000 pcs" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-on-surface mb-1.5">Project Specifications</label>
                    <textarea rows={4} className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder-on-surface/40" placeholder="Tell us about your volume requirements or specific customization needs..."></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
