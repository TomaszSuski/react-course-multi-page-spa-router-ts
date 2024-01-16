import React from "react";
import { Link } from "react-router-dom";

export interface ProductsProps {}

const dummyProducts = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

export default function Products(props: ProductsProps) {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {dummyProducts.map((product) => (
          <li key={product.id}>
            <Link to={product.id.toString()}>{`Product ${product.id}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
