import imageManifest from "../../public/images/optimized/manifest.json";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = configuredBasePath.replace(/\/+/g, "/").replace(/\/$/, "");

/** Serve prebuilt responsive images on static hosts, including subpath previews. */
export default function staticImageLoader({ src, width }) {
  // Component paths may include a slash both at the end of BP and before images.
  // Preserve remote/protocol-relative URLs while normalizing local paths.
  const hasRootPrefix = /^\/+$/u.test(configuredBasePath) &&
    src.startsWith(`${configuredBasePath}/images/`);
  const normalizedSrc = src.startsWith("/") &&
    (!src.startsWith("//") || hasRootPrefix)
    ? src.replace(/\/+/g, "/")
    : src;
  const localSrc = basePath && normalizedSrc.startsWith(`${basePath}/`)
    ? normalizedSrc.slice(basePath.length)
    : normalizedSrc;
  const variants = imageManifest.images[localSrc];

  // New or remote images continue working until added to the optimization list.
  if (!variants) return normalizedSrc;

  const variant = variants.find((image) => image.width >= width) || variants.at(-1);
  return `${basePath}${variant.src}`;
}
