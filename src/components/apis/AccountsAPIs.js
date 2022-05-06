import { gql } from "graphql-tag";

export const GET_CUSTOMER_ORDER = gql `
    query getCustomerOrder($customerId: Int!) {
        customer(customerId: $customerId) {
            id
            orders {
                nodes {
                    id
                    databaseId
                    orderKey
                    date
                    status
                    total
                    paymentMethodTitle
                    lineItems {
                        nodes {
                            product {
                                node {
                                    name
                                }
                            }
                        }  
                    }
                }
            }
        }
    }
`;