import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = 'public';
const supportedExtensions = ['.webp', '.jpeg', '.png'];

function convertImagesInDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      convertImagesInDir(fullPath); // recurse into subdir
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (!supportedExtensions.includes(ext)) return;

      const outputPath = path.join(dir, path.basename(file, ext) + '.webp');

      sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`✓ ${fullPath} → ${outputPath}`))
        .catch((err) => console.error(`✗ ${fullPath}:`, err));
    }
  });
}

convertImagesInDir(inputDir);