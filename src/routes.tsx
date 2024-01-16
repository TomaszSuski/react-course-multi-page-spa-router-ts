import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
]);
