export const NAV_SECTIONS = [
  { id: 'about', label: 'Sobre', href: '#about' },
  { id: 'portfolio', label: 'Portfólio', href: '#portfolio' },
  { id: 'resume', label: 'Resumo', href: '#resume' },
  { id: 'contact', label: 'Contato', href: '#contact' },
] as const;

export const SECTION_IDS = NAV_SECTIONS.map(({ id }) => id);

export const FIRST_SECTION_AFTER_HERO = NAV_SECTIONS[0].href;
