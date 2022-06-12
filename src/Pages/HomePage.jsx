import React, { useState } from "react";
import Filter from "../Components/Filter/Filter";
import ProductList from "../Components/Product/ProductList";
import { products } from "../dummyData/data";

const HomePage = () => {
  const [productList, setProductList] = useState(products);

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const filteredProducts = () => {
    let arr = productList;
    if (brand != "") {
      arr = arr.filter((x) => {
        return x.brand.id == brand;
      });
    }

    if (category != "") {
      arr = arr.filter((x) => {
        return x.category.id == category;
      });
    }

    arr = arr.filter((x) => {
      return (
        x.name.toLowerCase().includes(search) ||
        x.detail.toLowerCase().includes(search)
      );
    });
    return arr;
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Filter
        brand={brand}
        setBrand={setBrand}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <ProductList products={filteredProducts()} />
    </div>
  );
};

export default HomePage;
