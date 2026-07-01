import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const BASE_URL = 'https://www.blossomvalley.in';

async function scrape() {
  console.log('Fetching main coir page...');
  const res = await fetch(`${BASE_URL}/products/coir`);
  const html = await res.text();
  const $ = cheerio.load(html);

  // Find the ItemList in JSON-LD
  let productUrls = [];
  $('script[type="application/ld+json"]').each((i, el) => {
    const text = $(el).html();
    if (text.includes('"@type":"ItemList"')) {
      const json = JSON.parse(text);
      if (json.itemListElement) {
        productUrls = json.itemListElement.map(item => item.url);
      }
    }
  });

  console.log(`Found ${productUrls.length} product URLs from JSON-LD.`);

  // Some products might not be in the JSON-LD, let's also scan all product links on the page just in case
  $('a[href^="/products/"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href !== '/products/coir' && !href.includes('areca') && !href.includes('equestrian') && !href.includes('pet')) {
      const url = `${BASE_URL}${href}`;
      if (!productUrls.includes(url)) {
        productUrls.push(url);
      }
    }
  });

  // Make URLs unique
  productUrls = [...new Set(productUrls)];
  console.log(`Total unique product URLs found: ${productUrls.length}`);

  const products = [];

  for (const url of productUrls) {
    try {
      console.log(`Fetching ${url}...`);
      const prodRes = await fetch(url);
      const prodHtml = await prodRes.text();
      const $prod = cheerio.load(prodHtml);

      let sku = '';
      let name = '';
      let description = '';
      let image = '';
      
      // Parse JSON-LD Product
      $prod('script[type="application/ld+json"]').each((i, el) => {
        const text = $prod(el).html();
        if (text.includes('"@type":"Product"')) {
          const json = JSON.parse(text);
          sku = json.sku || '';
          name = json.name || '';
          description = json.description || '';
          if (json.image) {
            if (typeof json.image === 'string') {
              image = json.image;
            } else if (Array.isArray(json.image) && json.image.length > 0) {
              image = json.image[0];
            }
          }
        }
      });

      // Extract details from specifications table
      const specifications = {};
      $prod('tr').each((i, el) => {
        const key = $prod(el).find('th, td:first-child').text().trim().replace(/:$/, '');
        const val = $prod(el).find('td:last-child').text().trim();
        if (key && val && key !== val) {
          specifications[key] = val;
        }
      });

      // Also get any features or other info
      if (!name) {
        name = $prod('h1').first().text().trim();
      }
      
      // Try fetching SKU from span if not in JSON-LD
      if (!sku) {
        sku = $prod('p:contains("Product code:")').text().replace('Product code:', '').trim();
      }

      if (name && sku) {
        const productData = {
          id: sku,
          name: name,
          description: description,
          image: image || '/images/placeholder.jpg', // Fallback
          material: specifications['Material'] || 'Coir',
          shape: specifications['Shape'] || 'N/A',
          usage: specifications['Usage / Application'] || specifications['Usage'] || specifications['Application'] || 'General Purpose',
          dimensions: specifications['Size'] || specifications['Dimensions'] || '',
          specifications: specifications,
          createdAt: new Date().toISOString()
        };
        products.push(productData);
        console.log(`  -> Added: ${name} (${sku})`);
      }
    } catch (err) {
      console.error(`Failed to fetch ${url}: ${err.message}`);
    }
  }

  const dataDir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  const uniqueProducts = Array.from(new Map(products.map(x => [x.id, x])).values());

  fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(uniqueProducts, null, 2));
  console.log(`Successfully saved ${uniqueProducts.length} products to src/data/products.json`);
}

scrape();
