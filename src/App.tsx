import { Outlet } from 'react-router-dom';
import { NavHeader } from './components/header';

const App = () => {
  return (
    <>
      <NavHeader />
      <main className='mx-3'>
        <Outlet />
      </main>
    </>
  );
};

export default App;
