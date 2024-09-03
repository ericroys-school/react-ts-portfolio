import { StyledNavLink } from '../components/navbar';
import { FaUncharted } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

export const links: StyledNavLink[] = [
  { name: 'Portfolio', href: '/portfolio', icon: FaUncharted },
  { name: 'About Us', href: '/', icon: FaRocket },
  { name: 'Contact', href: '/contact', icon: SiMinutemailer },
  { name: 'Resume', href: '/resume', icon: MdMenuBook },
];
