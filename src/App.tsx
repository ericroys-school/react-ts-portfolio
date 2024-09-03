import { Outlet } from 'react-router-dom';
import { NavHeader } from './components/header';
import { Footer } from './components/footer';

const App = () => {
  return (
    <>
      <NavHeader />
      <main className='mx-3 h-full'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
