import type { ImageMetadata } from 'astro';

// Tina stores media paths as "/images/<file>"; the files live in src/assets/images/ (subfolders and
// upper-case extensions such as phone photos named IMG_1234.JPG included).
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true }
);

export function resolveImage(path?: string | null): ImageMetadata | undefined {
  if (!path) return undefined;
  return modules[`/src/assets${path}`]?.default;
}
