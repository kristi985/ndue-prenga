import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const outputDir = path.join(root, "public/images/optimized");
const manifestPath = path.join(outputDir, "manifest.json");
// Keep these widths in sync with next.config.mjs. Original photographs remain intact.
const widths = [384, 768, 1280, 1920];
const encoding = { quality: 80, effort: 6 };
// Only photographs rendered by the current page, including carousel alternatives.
const sources = [
  "hero-lumber", "betoforme", "binare", "binar-cati", "trare-cati",
  "tjegull-mladost", "derrasa", "derrasa-2", "derrasa-3", "ristel",
  "presa", "magazina", "galeri-logs", "harta",
];

await mkdir(outputDir, { recursive: true });

const manifest = { widths, images: {} };
let beforeBytes = 0;
let largestBytes = 0;
let mobileBytes = 0;
let generatedBytes = 0;
let fileCount = 0;

for (const source of sources) {
  const sourcePath = path.join(root, `public/images/${source}.jpg`);
  const buffer = await readFile(sourcePath);
  const metadata = await sharp(buffer).metadata();
  // autoOrient respects the source EXIF orientation when determining dimensions.
  const sourceWidth = metadata.autoOrient?.width || metadata.width;
  if (!sourceWidth) throw new Error(`Cannot determine image width: ${source}`);
  const sourceWidths = [...new Set(widths.map((width) => Math.min(width, sourceWidth)))];
  const variants = [];

  for (const width of sourceWidths) {
    const webp = await sharp(buffer)
      .autoOrient()
      .resize({ width, withoutEnlargement: true })
      .webp(encoding)
      .toBuffer();
    // Content hashes prevent stale cached photos when a source is replaced.
    const hash = createHash("sha256").update(webp).digest("hex").slice(0, 12);
    const filename = `${source}-${width}-${hash}.webp`;
    const destination = path.join(outputDir, filename);
    // Identical runs leave assets untouched. Do not delete prior assets, since
    // an already-open page may still reference them during a deployment.
    try {
      await stat(destination);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      await writeFile(destination, webp);
    }
    variants.push({ width, src: `/images/optimized/${filename}`, bytes: webp.length });
    generatedBytes += webp.length;
    fileCount++;
  }

  manifest.images[`/images/${source}.jpg`] = variants;
  beforeBytes += buffer.length;
  largestBytes += variants.at(-1).bytes;
  mobileBytes += (variants.find((image) => image.width >= 768) || variants.at(-1)).bytes;
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KiB`;
console.log(`Optimized ${sources.length} photographs into ${fileCount} responsive WebP files.`);
console.log(`Originals: ${kb(beforeBytes)}; largest variants: ${kb(largestBytes)} (${(100 * (1 - largestBytes / beforeBytes)).toFixed(1)}% smaller).`);
console.log(`768px variants: ${kb(mobileBytes)}; all generated sizes: ${kb(generatedBytes)}.`);
