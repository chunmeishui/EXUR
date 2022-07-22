import React, { useState, useEffect } from "react";
import Loading from "../image/amalie-steiness.gif";
import ProductsItem from "./ProductsItem";
import "./Products.style.css";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchDataResult();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const fetchDataResult = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchText: searchInput }),
    };
    setLoading(true);
    const response = await fetch(
      `https://pfp-public-productdb-api.azurewebsites.net/api/product/search`,
      requestOptions
    );

    const data = await response.json();
    setProducts(data.results);
    setLoading(false);
  };

  return (
    <div className=" main-container">
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          placeholder="Search your product"
          onChange={(e) => setSearchInput(e.target.value)}
        />
       
      </div>
    
        {loading ? (
          <img src={Loading} alt="loading gify" />
        ) : (
          <ProductsItem products={products} />
        )}
      </div>
   
  );
};
