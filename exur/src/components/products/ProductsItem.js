import "./Products.style.css";
import React from "react";

function ProductsItem({ products }) {



  return (
    <>
      {products.map((item, index) => (
        <div className="specififc-product" key={index}>
          <img
            src={`https://pfp-public-productdb-api.azurewebsites.net/api/picture/${item.id}`}
            alt="product-img"
          />
          <h4>{item.name}</h4>
        </div>
      ))}
    </>
  );
}

export default ProductsItem;
