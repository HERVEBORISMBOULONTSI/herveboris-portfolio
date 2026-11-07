'use client';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links = [['À propos', '#about'], ['Compétences', '#skills'], ['Projets', '#projects'], ['Parcours', '#experience'], ['Services', '#services'], ['Contact', '#contact']];
export default function Header({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const [open, setOpen] = useState(false);
  const items = locale === 'fr' ? links : [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#experience'], ['Services', '#services'], ['Contact', '#contact']];
  return <header className="site-header"><a className="brand" href="#top">HB<span>.</span></a><nav className={open ? 'nav nav-open' : 'nav'}>{items.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><div className="header-tools"><div className="language-switch"><a className={locale === 'fr' ? 'active' : ''} href="/">FR</a><span>/</span><a className={locale === 'en' ? 'active' : ''} href="/en">EN</a></div><a className="header-cta" href="#contact">{locale === 'fr' ? 'Discutons' : "Let's talk"} <ArrowUpRight size={15}/></a></div><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></header>;
}
