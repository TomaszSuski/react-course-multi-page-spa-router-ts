import React from "react";
import { Link, useNavigate } from "react-router-dom";

export interface HomeProps {}

export default function Home(props: HomeProps) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>Home page</h1>
      <Link to="products">Products page</Link>
      <button onClick={navigateHandler}>Navigate to products</button>
    </>
  );
}
