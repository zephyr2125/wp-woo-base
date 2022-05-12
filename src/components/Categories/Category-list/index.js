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

    // const [categoryList, setCategoryList] = useState(props.categoryList)
    const [categoryId, setCategoryId] = useState('')
    // useEffect(() => {
    //     setCategoryList(props.categoryList);
    // }, [props.categoryList])

    const handleFilter = (e) => {
        console.log("111")
        const cateId = e.target.getAttribute('cate-id')
        setCategoryId(cateId)
        refetch()
    }

    const { data, refetch } = useQuery(GET_DATA, {
        variables: { id: categoryId },
    });

    const { setProductListFilter } = useContext(Context)
    setProductListFilter(data?.productCategory.products)
    console.log(categoryId)
    console.log(data?.productCategory.products)

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
