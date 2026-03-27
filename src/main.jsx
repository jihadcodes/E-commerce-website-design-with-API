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
import SignUp from './components/pages/SignUp.jsx';
import CheckOut from './components/pages/CheckOut.jsx';

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
      { path: "/signup", Component: SignUp },
      { path: "/*", Component: NotFound },
      { path: "/checkout", Component: CheckOut },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
