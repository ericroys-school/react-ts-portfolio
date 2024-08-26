import { links } from './navMetaData';
import { StyledNav } from './navbar';
import { FaRocket } from 'react-icons/fa';

export const NavHeader = () => {
  return (
    <>
      <div className='bg-redish flex h-30 items-center bg-cyan-600 justify-between'>
        <div className='flex w-1/4'>
          <FaRocket id="rocket" size={20} className='rotate-45'/> 
          <h1
          className='font-bold bg-bluish font-special m-4 text-center text-4xl text-wrap
            w-1/2 bg-slate-200 p-4 rounded-md border-slate-600 border-solid border-t 
            border-e-0 border-l-4 shadow-2xl min-w-min '>
          Eric Roys
                   
        </h1>
        </div>
        <StyledNav links={links} />
      </div>
    </>
  );
};
