import { MdRocketLaunch } from 'react-icons/md';
import { links } from '../data/navMetaData';
import { StyledNav } from './navbar';

export const NavHeader = () => {
  return (
    <>
      <div className='bg-redish flex h-30 items-center justify-between'>
        <div className='flex w-1/2'>
          <MdRocketLaunch  id="rocket" size={22} className='rotate-45 fill-blueish-dark'/> 
          <h1
          className='font-bold bg-bluish font-special m-4 text-center text-4xl text-wrap
            w-3/4 p-4 rounded-md border-bluish-dark border-solid border-t 
            border-e-0 border-l-4 shadow-2xl '>
          Eric Roys
                   
        </h1>
        </div>
        <StyledNav links={links} />
      </div>
    </>
  );
};
