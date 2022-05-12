import React, { useState, useEffect, useContext } from "react"
import { gql, useQuery } from "@apollo/client"
import { Context } from "../../../context";


const CategoryList = (props) => {
    const GET_DATA = gql`
        query getData ($id: ID!) {
            productCategory(id: $id) {
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
        }
    `;

    const categoryList = props.categoryList

    const [categoryId, setCategoryId] = useState('')

    const { data, refetch } = useQuery(GET_DATA, {
        variables: { id: categoryId },
    });

    const handleFilter = (e) => {
        const cateId = e.target.getAttribute('cate-id')
        setCategoryId(cateId)
        // refetch()
    }

    const { setProductListFilter } = useContext(Context)
    setProductListFilter(data?.productCategory.products)

    return (
        <>
            <h4 className="categories-title">Categories</h4>
            {categoryList?.map( (category, index) => (
                <div className="category-item" key={index} cate-id={category.id} onClick={handleFilter}>{category.name}</div>
            ) )}
        </>
    )
}

export default CategoryList
