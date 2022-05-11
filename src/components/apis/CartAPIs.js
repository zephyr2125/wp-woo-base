import { gql } from "graphql-tag";

export const ADD_TO_CART = gql`
    mutation addToCart($productId: Int!, $quantity: Int!) {
        addToCart(input: {productId: $productId, quantity: $quantity}) {
        clientMutationId
        cartItem {
            total
        }
        }
    }
`;

export const GET_CART_ITEMS = gql`
    query getCartItems {
        cart {
        total
        contents {
            itemCount
            nodes {
            quantity
            total
            product {
                node {
                name
                ... on SimpleProduct {
                    name
                }
                id
                slug
                }
            }
            }
        }
        }
    }
`;

export const CLEAR_CART = gql`
    mutation clearCart {
    emptyCart(input: {clearPersistentCart: true}) {
      deletedCart {
        isEmpty
      }
    }
  }
`;