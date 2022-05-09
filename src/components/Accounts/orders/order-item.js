import React from "react";
import { gql, useQuery } from "@apollo/client";

const Order = (props) => {
    const id = props.id;

    const GET_ORDER_ITEMS = gql`
    query getOrderItems($id: ID!) {
        order(id: $id, idType: DATABASE_ID) {
          id
          total
          lineItems {
            nodes {
              product {
                node {
                  name
                  totalSales
                  ... on SimpleProduct {
                    id
                    name
                    price(format: RAW)
                    totalSales
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
          shippingTax
          subtotal
          totalTax
        }
      }
  `;

    const { data } = useQuery(GET_ORDER_ITEMS, {
        variables: {
            id: id * 1, // * 1 to convert to number
        },
    });

    return (
        <>
            <div className="order">
                <h4 className="mb-3">Order #{id}</h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td scope="col">Product</td>
                            <td scope="col">Quantity</td>
                            <td scope="col">Price</td>
                            <td scope="col">Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.order.lineItems.nodes.map((item) => {
                            return (
                                <tr key={item.product.node.id}>
                                    <td>{item.product.node.name}</td>
                                    <td dangerouslySetInnerHTML={{__html: item.product.node.totalSales}} />
                                    <td dangerouslySetInnerHTML={{__html: item.product.node.price}} />
                                    <td dangerouslySetInnerHTML={{__html: item.product.node.totalSales * item.product.node.price}} />
                                </tr>
                            );
                        }
                        )}
                    </tbody>
                </table>
                <div className="order-total">
                    <div className="order-total-item">
                        <span className="order-total-item-label">Subtotal</span>
                        <span className="order-total-item-amount" dangerouslySetInnerHTML={{__html: data?.order.subtotal}} />
                    </div>
                    <div className="order-total-item">
                        <span className="order-total-item-label">Shipping</span>
                        <span className="order-total-item-amount" dangerouslySetInnerHTML={{__html: data?.order.shippingTax}} />
                    </div>
                    <div className="order-total-item">
                        <span className="order-total-item-label">Tax</span>
                        <span className="order-total-item-amount" dangerouslySetInnerHTML={{__html: data?.order.totalTax}} />
                    </div>
                    <div className="order-total-item">
                        <span className="order-total-item-label">Total</span>
                        <span className="order-total-item-amount" dangerouslySetInnerHTML={{__html: data?.order.total}} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order;