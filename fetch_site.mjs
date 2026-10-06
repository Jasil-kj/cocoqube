import fs from 'fs';
import path from 'path';

const baseUrl = 'https://cocoqube-global.febi044.chatgpt.site';
const pages = [
  '/',
  '/products.html',
  '/industries.html',
  '/about.html',
  '/certifications.html',
  '/blogs.html',
  '/contact.html',
  '/export-enquiry.html',
  '/wholesale-enquiry.html'
];

const publicAssetsDir = path.join(process.cwd(), 'public', 'assets');
const tempHtmlDir = path.join(process.cwd(), 'temp_html');

if (!fs.existsSync(publicAssetsDir)) fs.mkdirSync(publicAssetsDir, { recursive: true });
if (!fs.existsSync(tempHtmlDir)) fs.mkdirSync(tempHtmlDir, { recursive: true });

async function run() {
  const imageUrls = new Set();
  
  // Fetch HTMLs
  for (const page of pages) {
    console.log(`Fetching ${page}...`);
    try {
      const res = await fetch(`${baseUrl}${page}`);
      if (!res.ok) continue;
      const html = await res.text();
      
      const fileName = page === '/' ? 'index.html' : page.replace('/', '');
      fs.writeFileSync(path.join(tempHtmlDir, fileName), html);
      
      // Find all image srcs that start with assets/
      const regex = /src=["'](assets\/[^"']+)["']/g;
      let match;
      while ((match = regex.exec(html)) !== null) {
        imageUrls.add(match[1]);
      }
    } catch (e) {
      console.error(`Error fetching ${page}`, e);
    }
  }
  
  // Also fetch CSS to find background images
  try {
    const cssRes = await fetch(`${baseUrl}/styles.css`);
    if (cssRes.ok) {
      const css = await cssRes.text();
      const cssRegex = /url\(['"]?(assets\/[^'"\)]+)['"]?\)/g;
      let match;
      while ((match = cssRegex.exec(css)) !== null) {
        imageUrls.add(match[1]);
      }
    }
  } catch (e) {
    console.error('Error fetching css', e);
  }
  
  console.log(`Found ${imageUrls.size} images to download.`);
  
  // Download Images
  for (const assetPath of imageUrls) {
    const imgUrl = `${baseUrl}/${assetPath}`;
    const localPath = path.join(process.cwd(), 'public', assetPath);
    const localDir = path.dirname(localPath);
    
    if (!fs.existsSync(localDir)) fs.mkdirSync(localDir, { recursive: true });
    
    console.log(`Downloading ${imgUrl}...`);
    try {
      const res = await fetch(imgUrl);
      if (res.ok) {
        const arrayBuffer = await res.arrayBuffer();
        fs.writeFileSync(localPath, Buffer.from(arrayBuffer));
      } else {
        console.error(`Failed ${res.status}: ${imgUrl}`);
      }
    } catch (e) {
      console.error(`Error downloading ${imgUrl}`, e);
    }
  }
  
  console.log("Done.");
}

run();
