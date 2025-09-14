import { mkdir, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import https from 'https';
import { createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const programs = [
  { name: 'bca', title: 'Bachelor of Computer Applications' },
  { name: 'mca', title: 'Master of Computer Applications' },
  { name: 'bba', title: 'BBA in Digital Marketing' },
  { name: 'bcom', title: 'B.Com with Computer Applications' },
];

const imageDir = join(__dirname, '../public/images/programs');

// Create directory if it doesn't exist
if (!existsSync(imageDir)) {
  await mkdir(imageDir, { recursive: true });
}

// Download placeholder images
const downloadImage = (url, filePath) => {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
};

// Download all images
const downloadAllImages = async () => {
  for (const program of programs) {
    const imagePath = join(imageDir, `${program.name}.jpg`);
    const url = `https://placehold.co/600x400/4F46E5/FFFFFF.jpg?text=${encodeURIComponent(program.title)}`;
    
    try {
      await downloadImage(url, imagePath);
      console.log(`Downloaded ${program.name}.jpg`);
    } catch (err) {
      console.error(`Error downloading ${program.name}.jpg:`, err.message);
    }
  }
};

downloadAllImages().catch(console.error);
