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

    return (
        <div className="order">
            {loading && <p>Loading order items...</p>}
            {error && <p>Error : Can not load order items</p>}
            {data?.customer.id !== null
                ? (
                    <table className="table table-striped">
                <thead>
                    <tr>
                        <td scope="col">Order #</td>
                        <td scope="col">Date</td>
                        <td scope="col">Payment Method</td>
                        <td scope="col">Status</td>
                        <td scope="col">Total</td>
                    </tr>
                </thead>
                <tbody>
                    {data?.customer.orders.nodes.map((order) => {
                        return (
                            <tr key={order.orderKey}>
                                <td>{order.orderKey}</td>
                                <td>{getFormattedDate(order.date)}</td>
                                <td>{order.paymentMethodTitle}</td>
                                <td>{order.status}</td>
                                <td>{order.total}</td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
                )
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