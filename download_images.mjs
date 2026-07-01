import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  { url: 'https://www.blossomvalley.in/images/HomePage.webp', name: 'banner1.webp' },
  { url: 'https://www.blossomvalley.in/images/CoirProducts/SR-1.webp', name: 'banner2.webp' },
  { url: 'https://www.blossomvalley.in/images/CoirProducts/SR-2.webp', name: 'banner3.webp' }
];

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

async function downloadImages() {
  for (const img of images) {
    const filePath = path.join(publicImagesDir, img.name);
    try {
      const response = await fetch(img.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        }
      });
      if (response.ok) {
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fs.writeFileSync(filePath, buffer);
        console.log(`Downloaded ${img.name}`);
      } else {
        console.error(`Failed to download ${img.url}: ${response.status} ${response.statusText}`);
      }
    } catch (e) {
      console.error(`Error downloading ${img.url}:`, e);
    }
  }
}

downloadImages();
