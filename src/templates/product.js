import React from "react";
import Seo from "../components/seo";
import { gql, useQuery } from "@apollo/client";

const  Product = ({ pageContext }) => {
    const { product } = pageContext;
    const GET_DATA = gql`
    query MyQuery2($id: ID!) {
        product(id: $id) {
            name
            id
            sku
            description
            galleryImages {
              nodes {
                mediaItemUrl
            }
            }
        }
    }
  `;

  const { data } = useQuery(GET_DATA, {
      variables: { id: product },
    });

    return (
      <div>
        <Seo title={data?.product.name} />
        <div className="product">
            <div className="product__image">
                <img src={data?.product.galleryImages.nodes[0].mediaItemUrl} alt="" />
            </div>
            <div className="product__info">
                <div className="product__name">{data?.product.name}</div>
                <div className="product__price">{data?.product.sku}</div>
                <div className="product__description">{data?.product.description}</div>
            </div>
        </div>
      </div>
    )
  }

  export default Product