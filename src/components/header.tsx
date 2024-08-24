import { links } from './navMetaData';
import { StyledNav } from './navbar';

export const NavHeader = () => {
  return (
    <>
      <div className='bg-redish flex h-30 items-center bg-cyan-600 justify-between'>
        <h1
          className='bg-bluish font-special m-4 text-center text-4xl text-wrap
            w-1/4 bg-slate-200 p-4 rounded-md border-slate-600 border-solid border-t 
            border-e-0 border-l-4 shadow-2xl min-w-min '>
          Eric Roys
        </h1>
        <StyledNav links={links} />
      </div>
    </>
  );
};
