import type { SiteConfig } from './types';

/**
 * Site-wide configuration for Coco Beauty Bar.
 *
 * Values marked [UNCERTAIN] need verification from the salon owner.
 * Values marked [PLACEHOLDER] are temporary and must be replaced.
 */
export const siteConfig: SiteConfig = {
  name: 'Coco Beauty Bar',
  tagline: 'Salon de Beauté à Casablanca', // [UNCERTAIN] — confirm official tagline
  description:
    'Coco Beauty Bar, votre salon de beauté premium à Casablanca. Soins du visage, coiffure, manucure, maquillage et bien plus.',
  phone: '+212000000000', // [PLACEHOLDER] — replace with actual phone number
  whatsapp: '+212000000000', // [PLACEHOLDER] — replace with actual WhatsApp number
  email: 'contact@cocobeautybar.ma', // [PLACEHOLDER] — replace with actual email
  address: {
    street: '', // [PLACEHOLDER] — confirm exact street address
    city: 'Casablanca',
    country: 'Maroc',
    googlePlaceId: '', // [PLACEHOLDER] — add Google Place ID
  },
  hours: [
    { day: 'Lundi', open: '09:00', close: '19:00' }, // [UNCERTAIN]
    { day: 'Mardi', open: '09:00', close: '19:00' },
    { day: 'Mercredi', open: '09:00', close: '19:00' },
    { day: 'Jeudi', open: '09:00', close: '19:00' },
    { day: 'Vendredi', open: '09:00', close: '19:00' },
    { day: 'Samedi', open: '09:00', close: '19:00' },
    { day: 'Dimanche', open: null, close: null }, // [UNCERTAIN] — confirm if closed
  ],
  social: {
    instagram: 'https://www.instagram.com/cocobeautybar_casa/', // [UNCERTAIN] — verify handle
  },
  bookingUrl: '', // [PLACEHOLDER] — add booking platform URL when known
  googleMapsEmbedUrl: '', // [PLACEHOLDER] — add embed URL
  googleMapsDirectionsUrl: '', // [PLACEHOLDER] — add directions URL
  locale: 'fr-MA',
  currency: 'MAD',
};
