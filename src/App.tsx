import { Outlet } from 'react-router-dom';
import { NavHeader } from './components/header';
import { Footer } from './components/footer';

const App = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavHeader />
      <main className='mx-3 flex flex-col grow pb-10'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
