import React from "react";
import { Link } from "react-router-dom";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/products">Products page</Link>
    </div>
  );
}
