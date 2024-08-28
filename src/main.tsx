import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFound } from './pages/notfound.tsx';
import { AboutPage } from './pages/about.tsx';
import { Home } from './pages/home.tsx';
import { Contact } from './pages/contact.tsx';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/portfolio',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
