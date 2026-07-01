import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src', 'data', 'products.json');
const products = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

for (let p of products) {
  const text = (p.name + ' ' + p.description).toLowerCase();
  
  // Materials
  const materials = [];
  if (text.includes('peat') || text.includes('cocopeat')) { materials.push('Coco Peat'); materials.push('Coco Pith (100%)'); }
  if (text.includes('chip') || text.includes('orchid')) materials.push('Coco Chips');
  if (text.includes('fiber') || text.includes('fibre')) materials.push('Coco Fiber');
  if (text.includes('hdpe') || text.includes('bag')) materials.push('HDPE');
  if (text.includes('yarn') || text.includes('rope')) materials.push('Coir Fiber Yarn');
  if (text.includes('coir') || materials.length === 0) materials.push('Coco Coir', 'Coir');
  p.material = [...new Set(materials)];

  // Shapes
  const shapes = [];
  if (text.includes('round') || text.includes('disc') || text.includes('coin')) { shapes.push('Round'); if(text.includes('disc')) shapes.push('Round Disc'); }
  if (text.includes('block') || text.includes('brick')) { shapes.push(text.includes('block') ? 'Block' : 'Brick'); }
  if (text.includes('rectangular') || text.includes('tray')) shapes.push('Rectangular');
  if (text.includes('slab')) shapes.push('Slab');
  if (text.includes('roll') || text.includes('mat')) shapes.push('Roll');
  if (text.includes('conical') || text.includes('cone')) shapes.push('Conical');
  if (text.includes('basket') || text.includes('half')) shapes.push('Half Liner');
  if (text.includes('stick') || text.includes('pole')) shapes.push('Pole');
  if (shapes.length === 0) shapes.push('N/A');
  p.shape = [...new Set(shapes)];

  // Usages
  const usages = [];
  if (text.includes('nursery') || text.includes('seed')) usages.push('Nursery / Commercial', 'Commercial Growing');
  if (text.includes('hanging') || text.includes('basket') || text.includes('decor')) usages.push('Decoration / Garden', 'Balcony', 'Decoration');
  if (text.includes('hydroponic') || text.includes('grow bag')) usages.push('Hydroponics', 'Hydroponics, Container Gardens');
  if (text.includes('erosion') || text.includes('geotextile')) usages.push('Erosion Control', 'Landscaping');
  if (text.includes('mattress') || text.includes('upholstery')) usages.push('General Purpose');
  if (usages.length === 0) usages.push('Home / Terrace Gardening', 'Gardening', 'Garden');
  p.usage = [...new Set(usages)];
}

fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
console.log('Successfully updated product filters with array data matching the requested categories.');
