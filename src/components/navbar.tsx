import { IconType } from 'react-icons';
import { NavLink, To } from 'react-router-dom';
import StyledIcon from '../lib/styledIcon';

/**
 * Properties for links array that can be passed
 * through to StyledNav
 */
export type LinkProps = {
  links: StyledNavLink[];
};

/**
 * A StyledNavLink type definition
 */
export type StyledNavLink = {
  name: React.Key;
  href: To;
  icon: IconType;
};

export const StyledNav = ({ links }: LinkProps) => {
  return (
    <>
      <ul className='flex w-2/5 flex-wrap mr-4'>
        {links.map((n) => {
          return (
            <li key={n.name} className='flex pr-5'>
              <StyledIcon
                icon={n.icon}
                className='fill-greenish-light inline mb-1 ml-4 mr-2 translate-y-1'
              />
              <NavLink
                className='font-bold pl-2 hover:shadow-md hover:shadow-greenish-light rounded-md text-bluish-dark'
                to={n.href}>
                {n.name.toString()}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
