import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Wishlist from './components/Wishlist/Wishlist.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Cart from './components/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: App },
      { path: "Wishlist", Component: Wishlist },
      { path: "Cart", Component: Cart },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
