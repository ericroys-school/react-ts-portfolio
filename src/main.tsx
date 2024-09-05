import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NotFound } from './pages/notfound.tsx';
import { AboutPage } from './pages/about.tsx';
import { Portfolio } from './pages/portfolio.tsx';
import { Contact } from './pages/contact.tsx';
import React from 'react';
import { Resume } from './pages/resume.tsx';

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
        element: <Portfolio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
