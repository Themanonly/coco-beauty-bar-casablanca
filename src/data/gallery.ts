import type { GalleryItem } from './types';

/**
 * Gallery items — photos and videos.
 *
 * All media will be locally optimized copies of approved assets.
 * No hotlinking to Instagram or external sources.
 */
export const galleryItems: GalleryItem[] = [
  // Gallery items will be populated with real approved assets
  // Example structure:
  // {
  //   id: 'gallery-001',
  //   type: 'photo',
  //   src: '/images/gallery/look-001.webp',
  //   thumbnail: '/images/gallery/thumbs/look-001.webp',
  //   alt: 'Maquillage de mariée — Coco Beauty Bar',
  //   featured: true,
  //   order: 1,
  // },
];

/**
 * Helper: get featured gallery items for homepage.
 */
export function getFeaturedGallery(): GalleryItem[] {
  return galleryItems
    .filter((item) => item.featured)
    .sort((a, b) => a.order - b.order);
}

/**
 * Helper: get gallery items by type.
 */
export function getGalleryByType(
  type: GalleryItem['type'],
): GalleryItem[] {
  return galleryItems
    .filter((item) => item.type === type)
    .sort((a, b) => a.order - b.order);
}
