import { FaGithub, FaLinkedin, FaUncharted } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { MdEmail, MdMenuBook } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import { StyledNavLink } from '../types/styledNavLink';

export const links: StyledNavLink[] = [
  { name: 'Portfolio', href: '/portfolio', icon: FaUncharted },
  { name: 'About Us', href: '/', icon: FaRocket },
  { name: 'Contact', href: '/contact', icon: SiMinutemailer },
  { name: 'Resume', href: '/resume', icon: MdMenuBook },
];

export const footerLinks: StyledNavLink[] = [
  {
    name: 'LinkedIn',
    href: 'www.linkedin.com/in/eric-roys-8689524',
    icon: FaLinkedin,
  },
  { name: 'Email', href: 'mailto:eric.roys@gmail.com', icon: MdEmail },
  {
    name: 'GitHub',
    href: 'https://github.com/ericroys-school?tab=repositories',
    icon: FaGithub,
  },
];
