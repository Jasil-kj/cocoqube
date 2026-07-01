'use client';

import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, deleteProduct } from './actions';
import Image from 'next/image';

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    id: '', name: '', description: '', image: '', material: '', shape: '', usage: '', dimensions: ''
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.id || !formData.name) return alert('ID and Name are required');
    
    setIsLoading(true);
    await addProduct({
      ...formData,
      specifications: {
        Material: formData.material,
        Shape: formData.shape,
        Usage: formData.usage,
        Dimensions: formData.dimensions
      }
    });
    setFormData({ id: '', name: '', description: '', image: '', material: '', shape: '', usage: '', dimensions: '' });
    await fetchProducts();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setIsLoading(true);
      await deleteProduct(id);
      await fetchProducts();
    }
  };

  if (isLoading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Catalogue Management</h1>
          <p className="text-gray-500 mt-2">Add, edit, or remove products from the local database.</p>
          <p className="text-sm text-amber-600 font-medium mt-2 bg-amber-50 inline-block px-3 py-1 rounded-md border border-amber-200">
            Note: Changes made here update src/data/products.json directly. They will not persist if deployed to Vercel without a database.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Add Product Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Product ID / SKU *</label>
                <input required name="id" value={formData.id} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" placeholder="e.g. SR-40" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Product Name *</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" placeholder="e.g. Premium Coco Peat" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" rows={3}></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Image URL</label>
                <input name="image" value={formData.image} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" placeholder="/images/placeholder.jpg" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Material</label>
                  <input name="material" value={formData.material} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" placeholder="Coir" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Shape</label>
                  <input name="shape" value={formData.shape} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" placeholder="Round" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Usage</label>
                  <input name="usage" value={formData.usage} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" placeholder="Gardening" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Dimensions</label>
                  <input name="dimensions" value={formData.dimensions} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#6B4A34] outline-none" placeholder="10cm x 10cm" />
                </div>
              </div>

              <button type="submit" className="w-full mt-4 bg-[#6B4A34] text-white font-medium py-3 rounded-xl hover:bg-[#5a4035] transition-colors">
                Save Product
              </button>
            </form>
          </div>

          {/* Product List */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Inventory ({products.length} Products)</h2>
            </div>
            
            <div className="flex-1 overflow-auto max-h-[800px] p-0">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-gray-700">Image</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">ID</th>
                    <th className="px-6 py-4 font-semibold text-gray-700 w-full">Name</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Material</th>
                    <th className="px-6 py-4 font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.map((prod) => (
                    <tr key={prod.id} className="hover:bg-gray-50">
                      <td className="px-6 py-3">
                        <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden">
                           <img src={prod.image || '/images/placeholder.jpg'} alt={prod.name} className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="px-6 py-3 font-medium text-gray-900">{prod.id}</td>
                      <td className="px-6 py-3 text-gray-700 max-w-[200px] truncate" title={prod.name}>{prod.name}</td>
                      <td className="px-6 py-3 text-gray-500">{prod.material}</td>
                      <td className="px-6 py-3">
                        <button onClick={() => handleDelete(prod.id)} className="text-red-500 hover:text-red-700 font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
