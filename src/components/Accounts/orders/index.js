import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMER_ORDER } from "../../apis/AccountsAPIs";
import { getFormattedDate } from "../../../func/functions";
import Link from 'gatsby-link';

const Orders = ({ authData }) => {
    const userID = authData.id;

    const { loading, error, data } = useQuery(GET_CUSTOMER_ORDER, {
        variables: {
            customerId: userID * 1, // * 1 to convert to number
        },
    });
    console.log(data);
    return (
        <div className="order">
            {loading && <p>Loading order items...</p>}
            {error && <p>Error : Can not load order items</p>}
            {data?.customer.id !== null
                ? data?.customer.orders.nodes.map((order) => {
                    return (
                        <div key={order.orderKey}>
                            <div className="card-header">
                                <h4>Order #{order.orderKey}</h4>
                                <time>Order Placed: {getFormattedDate(order.date)}</time>
                                <div>Payment Method: {order.paymentMethodTitle}</div>
                                <div>Order Status: {order.status}</div>
                                <div>Total: {order.total}</div>
                            </div>
                            <div className="card-body">
                                {order.lineItems.nodes.map((item) => {
                                    return (
                                        <div className="order-item" key={item.product.node.id}>
                                            <h5>{item.product.node.name}</h5>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })
                : (
                    <div className="p-3">
                        <h4 className="mb-3">No orders found</h4>
                        <Link to="/"><button className="btn-outline-dark" style={{ fontSize: '12px', padding: '8px 12px' }}>Shop now</button></Link>
                    </div>
                )}
        </div>
    );
};

export default Orders;