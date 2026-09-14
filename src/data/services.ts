import type { ServiceCategory, Service } from './types';

/**
 * Service categories and individual services.
 *
 * All data here is [PLACEHOLDER]. Actual services, prices, and descriptions
 * will be populated from the salon's real menu. Do NOT invent prices.
 */

export const serviceCategories: ServiceCategory[] = [
  // Categories will be populated with real data from the salon
  // Example structure:
  // {
  //   id: 'soins-visage',
  //   name: 'Soins du Visage',
  //   slug: 'soins-du-visage',
  //   description: 'Nos soins du visage professionnels',
  //   order: 1,
  // },
];

export const services: Service[] = [
  // Services will be populated with real data from the salon
  // Example structure:
  // {
  //   id: 'soin-hydratant',
  //   categoryId: 'soins-visage',
  //   name: 'Soin Hydratant',
  //   description: 'Un soin profond pour hydrater et revitaliser la peau.',
  //   duration: '60 min',
  //   price: 350,
  //   featured: true,
  //   order: 1,
  // },
];

/**
 * Helper: get services by category ID.
 */
export function getServicesByCategory(categoryId: string): Service[] {
  return services
    .filter((s) => s.categoryId === categoryId)
    .sort((a, b) => a.order - b.order);
}

/**
 * Helper: get featured services for homepage.
 */
export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured).sort((a, b) => a.order - b.order);
}
