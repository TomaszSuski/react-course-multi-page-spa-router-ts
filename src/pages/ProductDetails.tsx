import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export interface ProductDetailsPageProps {}

export default function ProoductDetailsPage(props: ProductDetailsPageProps) {
  const params = useParams();

  const id = params.productId;

  return (
    <>
      <h1>Product details</h1>
      <p>{`product number ${id}`}</p>
       {/* prop relative is used to specify relative path, in this case it just removes one level of url when backing
       the other possibility is "route" which is default and provides back as the routes definitons nesting */}
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}
