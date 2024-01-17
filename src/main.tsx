import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import { routing } from './routes/config.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routing} />
  </React.StrictMode>,
)
