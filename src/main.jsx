import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from "react-ga4";
import { routers } from './routes/index.js'
import { RouterProvider } from 'react-router-dom'
import "./index.css";

ReactGA.initialize("G-1EHZSLMV8D");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>,
)
