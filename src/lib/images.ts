import type { ImageMetadata } from 'astro';

// Tina stores media paths as "/images/<file>"; the files live in src/assets/images/.
const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

export function resolveImage(path?: string | null): ImageMetadata | undefined {
  if (!path) return undefined;
  return modules[`/src/assets${path}`]?.default;
}
