import React from "react";
import { Link } from "react-router-dom";

export interface ProductsProps {}

export default function Products(props: ProductsProps) {
  return <div><h1>Products</h1>
  <Link to="/">Home Page</Link></div>;
}
