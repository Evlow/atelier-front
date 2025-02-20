import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router/router'; 
import './index.css'; 
import React from 'react';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
