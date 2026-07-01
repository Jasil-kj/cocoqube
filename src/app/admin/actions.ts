'use server';

import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'data', 'products.json');

export async function getProducts() {
  if (!fs.existsSync(dataPath)) return [];
  const fileContent = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(fileContent);
}

export async function addProduct(product: any) {
  const products = await getProducts();
  const newProduct = {
    ...product,
    createdAt: new Date().toISOString()
  };
  products.unshift(newProduct);
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
  return newProduct;
}

export async function deleteProduct(id: string) {
  const products = await getProducts();
  const newProducts = products.filter((p: any) => p.id !== id);
  fs.writeFileSync(dataPath, JSON.stringify(newProducts, null, 2));
  return true;
}
