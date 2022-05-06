import React from "react";
import { gql, useQuery } from "@apollo/client";

const OrderItem = ({ pageContext }) => {
    const { order } = pageContext;

    const GET_DATA = gql`
    query getData($id: ID!) {
        order(id: $id, idType: DATABASE_ID) {
            id
            status
            total
        }
        }
  `;

    const { data } = useQuery(GET_DATA, {
        variables: { id: order },
    });

    return (
        <div>
            <h1>Order #{data?.order.id}</h1>
            <p>Status: {data?.order.status}</p>
            <p dangerouslySetInnerHTML={{__html: `Total: ${data?.order.total}`}} />
            
        </div>
    )
}

export default OrderItem