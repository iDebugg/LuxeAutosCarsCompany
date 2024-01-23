import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutUs from './AboutUs'
import HowItWorks from './HowItWorks'
import ContactUs from './ContactUs';
import ConnectWallet from './ConnectWallet';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "LandingPage",
    element: <LandingPage />
  },
  {
    path:"AboutUs",
    element: <AboutUs />
  },
  {
    path:"HowItWorks",
    element: <HowItWorks />
  },
  {
    path:"ContactUs",
    element: <ContactUs />
  },
  {
    path:"ConnectWallet",
    element: <ConnectWallet />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
