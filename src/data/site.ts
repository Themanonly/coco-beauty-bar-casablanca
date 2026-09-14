import type { NavItem, SiteConfig } from './types';

/** Verified public facts cross-checked on 2026-09-14. Editorial copy is marked [PROPOSED]. */
export const siteConfig: SiteConfig = {
  name: 'Coco Beauty Bar',
  tagline: 'Salon de beauté à Casablanca',
  description: 'Coco Beauty Bar à Casablanca : onglerie, coiffure, soins du visage et du corps, épilation et maquillage.',
  phone: '+212522208951',
  whatsapp: '',
  email: '',
  address: { street: '26 rue Imam El Aloussi, Bourgogne — face à la clinique Badr', city: 'Casablanca', postalCode: '20000', country: 'Maroc' },
  hours: [
    { day: 'Lundi', open: '09:30', close: '20:00' }, { day: 'Mardi', open: '09:30', close: '20:00' },
    { day: 'Mercredi', open: '09:30', close: '20:00' }, { day: 'Jeudi', open: '09:30', close: '20:00' },
    { day: 'Vendredi', open: '09:30', close: '20:00' }, { day: 'Samedi', open: '09:30', close: '20:00' },
    { day: 'Dimanche', open: '11:00', close: '19:00' },
  ],
  social: {},
  bookingUrl: 'https://esthiqa.ma/salon/casablanca/coco-beauty-bar-casablanca',
  googleMapsEmbedUrl: '',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=26%20Rue%20Imam%20El%20Aloussi%2C%20Casablanca%2020000%2C%20Morocco',
  locale: 'fr-MA', currency: 'MAD',
};

export const headerNav: NavItem[] = [
  { label: 'Accueil', href: '#top' }, { label: 'Prestations', href: '#prestations' },
  { label: 'Univers', href: '#univers' }, { label: 'Avis', href: '#avis' }, { label: 'Contact', href: '#contact' },
];

export const homepageContent = {
  header: { bookingCta: 'Prendre rendez-vous', openMenu: 'Ouvrir le menu', closeMenu: 'Fermer le menu' },
  hero: {
    eyebrow: 'Casablanca · Bourgogne', title: 'Coco Beauty Bar', titleLines: ['Coco', 'Beauty', 'Bar'], subtitle: 'La beauté, dans chaque détail.',
    description: 'Un lieu dédié à la coiffure, aux soins, à l’onglerie et aux gestes qui vous ressemblent.', // [PROPOSED]
    primaryCta: 'Prendre rendez-vous', secondaryCta: 'Découvrir les prestations',
  },
  introduction: {
    eyebrow: 'L’adresse beauté', title: 'Un moment pour vous, au cœur de Casablanca.',
    body: 'Coco Beauty Bar réunit plusieurs univers de beauté dans un même lieu, rue Imam El Aloussi à Bourgogne.', // [PROPOSED]
  },
  services: {
    eyebrow: 'Les prestations', title: 'Votre rituel, votre choix.',
    description: 'Explorez les univers proposés par le salon. Les tarifs seront ajoutés après validation par l’équipe Coco Beauty Bar.',
    items: [
      { number: '01', title: 'Onglerie', detail: 'Manucure · Pédicure · Nail art' },
      { number: '02', title: 'Coiffure', detail: 'Coupe · Coiffage · Soin capillaire' },
      { number: '03', title: 'Soins visage & corps', detail: 'Des protocoles dédiés au visage et au corps' },
      { number: '04', title: 'Épilation', detail: 'Des prestations adaptées à vos besoins' },
      { number: '05', title: 'Maquillage', detail: 'Mise en beauté et occasions' },
      { number: '06', title: 'Bien-être', detail: 'Une parenthèse pour ralentir' },
    ],
  },
  universe: {
    eyebrow: 'L’univers Coco', title: 'Des gestes précis. Une atmosphère douce.',
    body: 'Cette sélection sera remplacée par les photographies approuvées du salon. La composition présente dès maintenant la direction éditoriale du site.',
    tiles: [{ label: 'Onglerie', tone: 'rose' }, { label: 'Coiffure', tone: 'sand' }, { label: 'Soins', tone: 'cream' }],
  },
  reputation: {
    eyebrow: 'La confiance', rating: '4,7', reviewCount: 'Plus de 300 avis publics',
    title: 'Une adresse déjà appréciée à Casablanca.',
    body: 'La note publique peut évoluer. Les témoignages individuels seront intégrés après validation de leur source et de leur droit d’utilisation.',
  },
  contact: {
    eyebrow: 'Rendez-vous', title: 'Choisissez votre moment.',
    body: 'Consultez le profil de réservation du salon ou appelez directement l’équipe Coco Beauty Bar.',
    bookingCta: 'Réserver en ligne', phoneCta: 'Appeler le salon', mapCta: 'Voir l’itinéraire',
    addressLabel: 'Adresse', phoneLabel: 'Téléphone', hoursLabel: 'Horaires',
  },
  footer: { location: 'Casablanca · Maroc', demoNote: 'Site de démonstration · Contenu à valider' },
};
