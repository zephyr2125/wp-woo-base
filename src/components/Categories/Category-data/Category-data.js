import {gql } from "@apollo/client";

export const GET_DATA = gql`
    query getData {
        productCategory(id: "dGVybTo1Ng==") {
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
