import React from "react";
import { useParams } from "react-router";

export interface ProductDetailsPageProps {}

export default function ProoductDetailsPage(props: ProductDetailsPageProps) {
  const params = useParams();

  const id = params.productId;

  return (
    <>
      <h1>Product details</h1>
      <p>{`product number ${id}`}</p>
    </>
  );
}
