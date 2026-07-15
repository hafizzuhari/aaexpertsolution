import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public";
const supportedExtensions = [".webp", ".jpeg", ".jpg", ".png"];

// Max display width per folder — source photos (often 4000-9500px from a
// camera) get downscaled to what the layout actually renders, not just
// re-encoded at the same resolution.
const maxWidthByDir = {
  [path.join("public", "carousel")]: 1920,
  [path.join("public", "services")]: 800,
  [path.join("public", "portfolios")]: 1200,
  [path.join("public", "testimonials")]: 500,
};
const defaultMaxWidth = 1600;

function convertImagesInDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      convertImagesInDir(fullPath); // recurse into subdir
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (!supportedExtensions.includes(ext)) return;

      const outputPath = path.join(dir, path.basename(file, ext) + ".webp");
      const maxWidth = maxWidthByDir[dir] ?? defaultMaxWidth;
      const inputBuffer = fs.readFileSync(fullPath);

      sharp(inputBuffer)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toBuffer()
        .then((buffer) => {
          fs.writeFileSync(outputPath, buffer);
          console.log(`✓ ${fullPath} → ${outputPath} (max ${maxWidth}px)`);
        })
        .catch((err) => console.error(`✗ ${fullPath}:`, err));
    }
  });
}

convertImagesInDir(inputDir);
