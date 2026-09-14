// =============================================================================
// Coco Beauty Bar — Content Data Model
// =============================================================================
// This file defines the TypeScript interfaces for ALL business-editable content.
// Every user-facing string, price, phone number, image, and description must
// conform to these types. Components never hardcode business content — they
// receive typed data as props.
//
// This model serves as the contract between:
//   1. The current file-based content layer (src/data/*.ts)
//   2. Any future admin panel or CMS that generates content
// =============================================================================

// ---- Shared Primitives ----

export interface ImageAsset {
  /** Path relative to public/ directory */
  src: string;
  /** Accessible alt text — required for a11y */
  alt: string;
  width?: number;
  height?: number;
}

export interface CTA {
  label: string;
  /** URL, tel: link, or https://wa.me/... */
  href: string;
  variant: 'primary' | 'secondary' | 'whatsapp';
}

// ---- Site Configuration ----

export interface Address {
  street: string;
  city: string;
  postalCode?: string;
  country: string;
  googlePlaceId?: string;
}

export interface OpeningHours {
  /** Day name in French, e.g. "Lundi" */
  day: string;
  /** Opening time in HH:MM format, or null if closed */
  open: string | null;
  /** Closing time in HH:MM format, or null if closed */
  close: string | null;
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  /** SEO meta description */
  description: string;
  phone: string;
  /** Full international WhatsApp number, e.g. "+212600000000" */
  whatsapp: string;
  email: string;
  address: Address;
  hours: OpeningHours[];
  social: SocialLinks;
  /** External booking system URL */
  bookingUrl: string;
  googleMapsEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  /** BCP 47 locale, e.g. "fr-MA" */
  locale: string;
  /** ISO 4217 currency code, e.g. "MAD" */
  currency: string;
}

// ---- Services ----

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: ImageAsset;
  /** Display order (lower = first) */
  order: number;
}

export interface Service {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  /** e.g. "45 min" */
  duration?: string;
  /** Price in MAD. null = price on request ("sur devis") */
  price: number | null;
  /** Optional label override, e.g. "à partir de 250 DH" */
  priceLabel?: string;
  image?: ImageAsset;
  /** Whether to feature this service on the homepage */
  featured: boolean;
  /** Display order within its category */
  order: number;
}

// ---- Gallery ----

export type GalleryItemType = 'photo' | 'video';

export interface GalleryItem {
  id: string;
  type: GalleryItemType;
  /** Local path relative to public/ */
  src: string;
  thumbnail?: string;
  /** Accessible alt text */
  alt: string;
  caption?: string;
  /** Optional link to a service category */
  categoryId?: string;
  featured: boolean;
  order: number;
}

// ---- Testimonials / Reviews ----

export interface Testimonial {
  id: string;
  author: string;
  /** Rating from 1 to 5 */
  rating: number;
  text: string;
  /** ISO 8601 date string */
  date?: string;
  source: 'google' | 'instagram' | 'manual';
  /** Whether this review has been verified against the source */
  verified: boolean;
}

// ---- Homepage Content ----

export interface Announcement {
  active: boolean;
  text: string;
  link?: string;
  /** ISO 8601 date — announcement auto-hides after this date */
  expiresAt?: string;
}

export interface HomepageContent {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: CTA;
    ctaSecondary?: CTA;
    backgroundImage: ImageAsset;
  };
  intro?: {
    title: string;
    body: string;
    image?: ImageAsset;
  };
  featuredServicesTitle: string;
  featuredGalleryTitle: string;
  testimonialsTitle: string;
  announcement?: Announcement;
}

// ---- Navigation ----

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
