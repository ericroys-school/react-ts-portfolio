import { StyledNavLink } from '../components/navbar';
import { FaUncharted } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';

export const links: StyledNavLink[] = [
  { name: 'Portfolio', href: '/home', icon: FaUncharted },
  { name: 'About Us', href: '/', icon: FaRocket },
  { name: 'Resume', href: '/resume', icon: MdMenuBook },
];
