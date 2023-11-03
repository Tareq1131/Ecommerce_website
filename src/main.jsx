import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Layout/Home.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./loaers/cartProductsLoader";
import Checkout from "./components/Checkout/Checkout";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./components/Provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
Orders;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "orders",
        element: <Orders />,
        // loader: ()=> fetch('products.json')
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <PrivateRoute><Inventory /></PrivateRoute>,
      },
      {
        path: "checkout",
        element: <PrivateRoute><Checkout /></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
