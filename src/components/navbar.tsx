import { NavLink } from 'react-router-dom';
import StyledIcon from '../lib/styledIcon';
import { LinkProps } from '../types/styledNavLink';

export const StyledNav = ({ links }: LinkProps) => {
  return (
    <>
      <ul className='flex  flex-wrap mr-4'>
        {links.map((n) => {
          return (
            <li key={n.name} className='flex pr-5'>
              <StyledIcon
                icon={n.icon}
                className='fill-greenish-light inline mb-1 ml-4 mr-2 translate-y-1'
              />
              <NavLink
                className='font-bold pl-2 hover:shadow-md hover:shadow-greenish-light rounded-md text-bluish-dark pr-2'
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
