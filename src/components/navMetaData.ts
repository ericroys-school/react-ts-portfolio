import { StyledNavLink } from '../components/navbar';
// import { HiHome } from 'react-icons/hi2';
import { FaUncharted } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';

export const links: StyledNavLink[] = [
  { name: 'Portfolio', href: '/home', icon: FaUncharted },
  // { name: 'Other', href: '/notfound', icon:  HiHome},
  { name: 'About Us', href: '/', icon: FaRocket },
  { name: 'Resume', href: '/resume', icon: MdMenuBook },
];
