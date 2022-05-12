import React, { useState, useContext, useEffect } from "react"
import Seo from "../components/seo"
import { gql, useQuery, useLazyQuery } from "@apollo/client"
import ProductList from "../components/Product-list";
import CategoryList from "../components/Categories/Category-list";
import { Context } from "../context";

const Categories = () => {
    const GET_CATEGORY_LIST = gql`
        query getData {
            productCategories(first: 999999999) {
                nodes {
                    id
                    name
                }
            }
        }
    `;
    const GET_ALL_PRODUCT = gql`
    query getData {
      products (first: 999999999) {
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
    
    const { data:all_product } = useQuery(GET_ALL_PRODUCT)

    const [allProduct, setallProduct] = useState(all_product)

    const { productListFilter, setProductListFilter } = useContext(Context)

    setProductListFilter(all_product?.products)

    useEffect(() => {
      setallProduct(productListFilter)
    }, [productListFilter])

    // console.log(all_product?.products.products)
    let resultProduct

    allProduct === undefined ? resultProduct = all_product?.products : resultProduct = productListFilter
    console.log(resultProduct)
    console.log("AAAAAAA")
    // console.log(productListFilter)
    
    const { data:category_list } = useQuery(GET_CATEGORY_LIST);


    return (
        <div className="categories" style={{marginTop: "100px"}}>
            <div className="filter-container" style={{width: "33.33%", display: "inline-block"}}>
                <div className="category-container" ><CategoryList categoryList={category_list?.productCategories.nodes} /></div>
                <div className="time-container"></div>
                <div className="price-container"></div>
            </div>
            <div className="product-ls" style={{width: "66.66%", display: "inline-block"}}>
                <ProductList allProduct={resultProduct} />
            </div>
        </div>
    )
}

export default Categories
