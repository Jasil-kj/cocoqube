import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import productsData from '@/data/products.json';

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const product = productsData.find((p) => p.id === id);
  if (!product) {
    notFound();
  }

  // Find related products (same material or category, exclude current)
  const relatedProducts = productsData
    .filter((p) => p.id !== id && (p.material === product.material || p.usage === product.usage))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-surface">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex text-sm text-on-surface/60 mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li><span aria-hidden="true">/</span></li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            </li>
            <li><span aria-hidden="true">/</span></li>
            <li className="font-medium text-on-surface" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
            {/* Thumbnails placeholder */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:w-24 shrink-0 pb-2 lg:pb-0 hide-scrollbar">
              <button className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-xl border-2 border-primary overflow-hidden shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </button>
              {/* Dummy thumbnails for premium feel */}
              {[1, 2, 3].map((_, i) => (
                <button key={i} className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-xl border border-outline-variant hover:border-primary/50 transition-colors overflow-hidden shrink-0 bg-surface-container-low opacity-60 hover:opacity-100">
                   <Image
                    src={product.image}
                    alt={`${product.name} view ${i+2}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image with Zoom */}
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-surface-container-low group cursor-zoom-in border border-outline-variant/30">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 lg:mt-0">
            <div className="mb-6">
              <p className="text-sm font-semibold tracking-wider text-primary mb-2">{product.id}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mb-4 font-serif">
                {product.name}
              </h1>
              <p className="text-base text-on-surface/70 leading-relaxed">
                {product.description || `Premium export-quality ${product.name} suitable for ${product.usage}. Made from 100% natural ${product.material}.`}
              </p>
            </div>

            <div className="flex flex-col gap-4 py-6 border-y border-outline-variant/50 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"/><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"/><path d="M5 21h14"/></svg>
                </div>
                <div>
                  <p className="text-xs text-on-surface/60 font-medium">Material</p>
                  <p className="text-sm font-semibold text-on-surface">{product.material}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
                </div>
                <div>
                  <p className="text-xs text-on-surface/60 font-medium">Shape</p>
                  <p className="text-sm font-semibold text-on-surface">{product.shape}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 12h20"/><path d="M12 2v20"/></svg>
                </div>
                <div>
                  <p className="text-xs text-on-surface/60 font-medium">Dimensions</p>
                  <p className="text-sm font-semibold text-on-surface">{product.dimensions || 'Available in various sizes'}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                Add to RFQ
              </button>
              <button className="flex-1 bg-[#25D366] text-white hover:bg-[#20bd5a] px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                WhatsApp Enquiry
              </button>
            </div>

            {/* Detailed Specifications */}
            {Object.keys(product.specifications || {}).length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-4">Detailed Specifications</h3>
                <div className="bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-outline-variant/30">
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr key={idx} className="hover:bg-surface-container transition-colors">
                          <th className="px-5 py-4 font-medium text-on-surface/80 bg-surface-container/50 w-1/3">{key}</th>
                          <td className="px-5 py-4 text-on-surface">{value as string}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-outline-variant/30">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-on-surface font-serif">Related Products</h2>
              <Link href="/products" className="text-primary font-medium hover:underline text-sm flex items-center gap-1">
                View all catalogue
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <Link key={prod.id} href={`/products/${prod.id}`} className="group flex flex-col bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-square overflow-hidden bg-surface-container-low">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-white/90 text-on-surface px-6 py-2.5 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-[10px] font-bold tracking-[0.15em] text-primary mb-2 uppercase">
                      {prod.id}
                    </div>
                    <h3 className="font-serif text-[1.0625rem] font-semibold text-on-surface leading-tight mb-2 group-hover:text-primary transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-on-surface/60 line-clamp-2 mt-auto">
                      {prod.material} {prod.shape !== 'N/A' && `· ${prod.shape}`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
