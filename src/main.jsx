import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Wishlist from './components/Wishlist/Wishlist.jsx';
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Cart from './components/Cart/Cart.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';
import CheckOut from './components/pages/CheckOut.jsx';
import ProductDetails from './components/pages/ProductDeatils.jsx';
import Profile from './components/pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
   
    children: [
      { index: true, Component: App },
      { path: "wishlist", Component: Wishlist },
      { path: "cart", Component: Cart },
      { path: "*", Component: NotFound },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/*", Component: NotFound },
      { path: "/checkout", Component: CheckOut },
      { path: "/productdetails/:id", Component: ProductDetails },
      { path: "/profile", Component: Profile },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
