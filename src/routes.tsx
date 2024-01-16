import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // relative paths don't start with slash
      // they are added direct;ly after domain name
      // absolute paths start with slash
      // they are added after domain name and before relative paths
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
