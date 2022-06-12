import React from "react";
import ProductItem from "./ProductItem";
import "./Product.css";

const ProductList = (props) => {
  const { products } = props;
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {products.length == 0 && "Product not found!"}
    </div>
  );
};

export default ProductList;
