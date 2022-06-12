import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../Components/Product/ProductDetail";
import { products } from "../dummyData/data";

const ProductDetailPage = () => {
  let params = useParams();

  return (
    <div style={{ marginTop: "100px" }}>
      <ProductDetail product={products.find((x) => x.id == params.id)} />
    </div>
  );
};

export default ProductDetailPage;
