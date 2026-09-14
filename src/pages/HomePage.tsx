import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Clock3, MapPin, Menu, Phone, Star, X } from 'lucide-react';
import { headerNav, homepageContent, siteConfig } from '../data/site';

function displayPhone(phone: string) {
  const local = phone.replace('+212', '0');
  return `${local.slice(0, 2)} ${local.slice(2, 4)} ${local.slice(4, 6)} ${local.slice(6, 8)} ${local.slice(8)}`;
}

function openingHoursSummary() {
  const weekday = siteConfig.hours.find((entry) => entry.day === 'Lundi');
  const sunday = siteConfig.hours.find((entry) => entry.day === 'Dimanche');
  if (!weekday?.open || !weekday.close || !sunday?.open || !sunday.close) return [];
  return [
    `Lundi — samedi · ${weekday.open} — ${weekday.close}`,
    `Dimanche · ${sunday.open} — ${sunday.close}`,
  ];
}

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = `${siteConfig.name} | Salon de beauté à ${siteConfig.address.city}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', siteConfig.description);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);

  return (
    <div id="top" className="min-h-screen bg-[#f7f3ed] text-[#171512]">
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ed]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-14">
          <a href="#top" className="flex items-center gap-3 focus-ring" aria-label="Coco Beauty Bar — accueil">
            <span className="font-serif text-[1.55rem] leading-none">CB</span>
            <span className="hidden text-[0.68rem] font-semibold uppercase leading-tight tracking-[0.24em] sm:block">Coco Beauty<br />Bar</span>
          </a>
          <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
            {headerNav.map((item) => <a key={item.href} href={item.href} className="nav-link focus-ring">{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-4">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="hidden text-link focus-ring sm:inline-flex">{homepageContent.header.bookingCta}<ArrowUpRight size={14} /></a>
            <button type="button" className="grid h-10 w-10 place-items-center border border-black/20 focus-ring lg:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? homepageContent.header.closeMenu : homepageContent.header.openMenu} onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Navigation mobile" className="border-t border-black/10 bg-[#f7f3ed] px-5 py-4 lg:hidden">
            {headerNav.map((item) => <a key={item.href} href={item.href} className="block border-b border-black/10 py-4 text-sm uppercase tracking-[0.18em] focus-ring last:border-0" onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          </nav>
        )}
      </header>

      <main id="main-content">
        <section className="mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-center px-5 py-16 md:px-10 lg:py-24 xl:px-14">
            <p className="eyebrow">{homepageContent.hero.eyebrow}</p>
            <h1 className="mt-6 max-w-[9ch] font-serif text-[clamp(4.4rem,9vw,8.5rem)] leading-[0.82] tracking-[-0.065em]">
              {homepageContent.hero.titleLines.map((line, index) => <span key={line} className="block">{index === 1 ? <em className="font-normal">{line}</em> : line}</span>)}
            </h1>
            <p className="mt-9 max-w-md text-xl leading-snug text-[#514a42]">{homepageContent.hero.subtitle}</p>
            <p className="mt-4 max-w-md leading-7 text-[#655e56]">{homepageContent.hero.description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="button-dark focus-ring">{homepageContent.hero.primaryCta}<ArrowUpRight size={16} /></a>
              <a href="#prestations" className="button-text focus-ring">{homepageContent.hero.secondaryCta}<ArrowDownRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art-final" role="img" aria-label="Composition décorative temporaire représentant l’univers beauté de Coco Beauty Bar">
            <span className="hero-art-final__word">COCO</span><div className="hero-art-final__arch" /><div className="hero-art-final__orb" /><div className="hero-art-final__line" />
            <p className="hero-art-final__caption">Direction visuelle temporaire<br />Photographies du salon à venir</p>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#1b1916] text-[#f7f3ed]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-[0.55fr_1fr] md:px-10 lg:py-20 xl:px-14">
            <p className="eyebrow text-[#bfa78e]">{homepageContent.introduction.eyebrow}</p>
            <div><h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">{homepageContent.introduction.title}</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{homepageContent.introduction.body}</p></div>
          </div>
        </section>

        <section id="prestations" className="scroll-mt-20">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-28 xl:px-14">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr] lg:items-end">
              <div><p className="eyebrow">{homepageContent.services.eyebrow}</p><h2 className="section-title mt-5">{homepageContent.services.title}</h2></div>
              <p className="max-w-xl leading-7 text-[#655e56] lg:justify-self-end">{homepageContent.services.description}</p>
            </div>
            <div className="mt-14 border-t border-black/20">
              {homepageContent.services.items.map((item) => (
                <a key={item.number} href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="service-row group focus-ring" aria-label={`${item.title} — ouvrir la réservation`}>
                  <span className="text-xs tracking-[0.2em] text-[#9a8674]">{item.number}</span><h3 className="font-serif text-3xl tracking-[-0.025em] md:text-4xl">{item.title}</h3><p className="text-sm leading-6 text-[#655e56] md:text-base">{item.detail}</p><ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="univers" className="scroll-mt-20 bg-[#e9dfd4]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-28 xl:px-14">
            <div className="max-w-3xl"><p className="eyebrow">{homepageContent.universe.eyebrow}</p><h2 className="section-title mt-5">{homepageContent.universe.title}</h2><p className="mt-6 max-w-2xl leading-7 text-[#655e56]">{homepageContent.universe.body}</p></div>
            <div className="mt-14 grid gap-5 md:grid-cols-[1.25fr_0.75fr]">
              {homepageContent.universe.tiles.map((tile, index) => <div key={tile.label} className={`gallery-tile gallery-tile--${tile.tone} ${index === 0 ? 'md:row-span-2' : ''}`}><span className="gallery-tile__number">0{index + 1}</span><span className="gallery-tile__label">{tile.label}</span><span className="gallery-tile__note">Photographie à venir</span></div>)}
            </div>
          </div>
        </section>

        <section id="avis" className="scroll-mt-20 border-b border-black/10">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:py-28 xl:px-14">
            <div className="reputation-mark" aria-label="Note publique 4,7 sur 5"><span className="font-serif text-[7rem] leading-none tracking-[-0.07em] md:text-[10rem]">{homepageContent.reputation.rating}</span><div className="mt-4 flex gap-1 text-[#9a7757]" aria-hidden="true">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} fill="currentColor" />)}</div><p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#655e56]">{homepageContent.reputation.reviewCount}</p></div>
            <div><p className="eyebrow">{homepageContent.reputation.eyebrow}</p><h2 className="section-title mt-5">{homepageContent.reputation.title}</h2><p className="mt-7 max-w-xl leading-7 text-[#655e56]">{homepageContent.reputation.body}</p><a href={siteConfig.googleMapsDirectionsUrl} target="_blank" rel="noreferrer" className="button-text mt-8 focus-ring">Voir la fiche publique<ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-[#b99a7c]">
          <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 lg:py-28 xl:px-14">
            <p className="eyebrow text-[#3e3025]">{homepageContent.contact.eyebrow}</p>
            <div className="mt-5 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
              <div><h2 className="max-w-[9ch] font-serif text-6xl leading-[0.9] tracking-[-0.055em] md:text-8xl">{homepageContent.contact.title}</h2><p className="mt-7 max-w-xl text-lg leading-8 text-[#3e3025]">{homepageContent.contact.body}</p><div className="mt-9 flex flex-wrap gap-4"><a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer" className="button-dark focus-ring">{homepageContent.contact.bookingCta}<ArrowUpRight size={16} /></a><a href={`tel:${siteConfig.phone}`} className="button-outline focus-ring">{homepageContent.contact.phoneCta}<Phone size={16} /></a></div></div>
              <address className="contact-card not-italic">
                <div className="contact-row"><MapPin size={20} /><div><p className="contact-label">{homepageContent.contact.addressLabel}</p><p>{siteConfig.address.street}<br />{siteConfig.address.postalCode} {siteConfig.address.city}</p></div></div>
                <div className="contact-row"><Phone size={20} /><div><p className="contact-label">{homepageContent.contact.phoneLabel}</p><a href={`tel:${siteConfig.phone}`} className="underline-offset-4 hover:underline">{displayPhone(siteConfig.phone)}</a></div></div>
                <div className="contact-row"><Clock3 size={20} /><div><p className="contact-label">{homepageContent.contact.hoursLabel}</p>{openingHoursSummary().map((line) => <p key={line}>{line}</p>)}</div></div>
                <a href={siteConfig.googleMapsDirectionsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold uppercase tracking-[0.14em] focus-ring">{homepageContent.contact.mapCta}<ArrowUpRight size={15} /></a>
              </address>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#171512] text-[#f7f3ed]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-3 md:px-10 xl:px-14">
          <div><p className="font-serif text-3xl">{siteConfig.name}</p><p className="mt-2 text-sm text-white/55">{homepageContent.footer.location}</p></div>
          <nav aria-label="Navigation de pied de page" className="flex flex-col items-start gap-3 text-sm text-white/65 md:justify-self-center">{headerNav.slice(1).map((item) => <a key={item.href} href={item.href} className="hover:text-white focus-ring">{item.label}</a>)}</nav>
          <div className="text-sm text-white/55 md:text-right"><p>© {new Date().getFullYear()} {siteConfig.name}</p><p className="mt-2">{homepageContent.footer.demoNote}</p></div>
        </div>
      </footer>
    </div>
  );
}
