import React from "react";
import { Link } from "gatsby";

import { useQuery, gql } from "@apollo/client";

import AddToCart from "../Cart/add-to-cart-button";

const IndexPage = () => {
  const GET_DATA = gql`
  query getData {
    products {
      nodes {
        sku
        slug
        name
        id
        galleryImages {
          nodes {
            sourceUrl
          }
        }
        databaseId
        ... on SimpleProduct {
          id
          name
          price
        }
        ... on VariableProduct {
          id
          name
          price
        }
      }
    }
  }
  `;

  const { data } = useQuery(GET_DATA);

  return (
      <div className="home__container">
        <div className="home__wrapper">
          <div>List Product</div>
          <div className="list_product">
            {data &&
              data?.products.nodes.map((item) => (
                <div className="product" key={item.id}>
                  <div className="product__image">
                    <img src={item?.galleryImages?.nodes[0]?.sourceUrl} alt="" />
                  </div>
                  <div className="product__info">
                    <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    <div className="product__price">{item.price}</div>
                  </div>
                  <AddToCart 
                    idProduct={item.databaseId}
                    quantity={1}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
  )
}

export default IndexPage
