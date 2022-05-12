import React from "react";
import { Link } from "gatsby";

import { useQuery, gql } from "@apollo/client";

import AddToCart from "../Cart/add-to-cart-button";

const IndexPage = (props) => {
  const data = props.allProduct

  return (
      <div className="home__container">
        <div className="home__wrapper">
          <h3>List Product</h3>
          <div className="list_product" style={{ display:"flex", flexWrap: "wrap", gap: "20px" }} >
            {data &&
              data?.nodes.map((item) => (
                <div className="product" key={item.id} style={{ width:"calc(25% - 20px)" }}>
                  <div className="product__image">
                    <img src={item?.galleryImages?.nodes[0]?.sourceUrl} alt="" style={{ width:"100%" }}/>
                  </div>
                  <div className="product__info">
                    <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    <div className="product__price">{item.price}</div>
                  </div>
                  <AddToCart 
                    idProduct={item.databaseId}
                    quantity={1}
                    price={item.price}
                    name={item.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
  )
}

export default IndexPage
