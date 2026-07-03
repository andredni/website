export const navLinks = {
  de: [
    { label: 'Über mich', href: '/de/' },
    { label: 'Portfolio', href: '/de/portfolio' },
    { label: 'Projects', href: '/de/projects' },
  ],
  en: [
    { label: 'About Me', href: '/en/' },
    { label: 'Portfolio', href: '/en/portfolio' },
    { label: 'Projects', href: '/en/projects' },
  ],
};

export const footerLinks = {
  de: {
    impressum: { label: 'Impressum', href: '/de/impressum' },
    datenschutz: { label: 'Datenschutz', href: '/de/datenschutz' },
  },
  en: {
    impressum: { label: 'Legal Notice', href: '/en/legal-notice' },
    datenschutz: { label: 'Privacy Policy', href: '/en/privacy' },
  },
};

export function alternateUrls(baseUrl: string, path: string) {
  const dePath = path.replace(/^\/en/, '/de');
  const enPath = path.replace(/^\/de/, '/en');
  return {
    de: `${baseUrl}${dePath}`,
    en: `${baseUrl}${enPath}`,
  };
}
