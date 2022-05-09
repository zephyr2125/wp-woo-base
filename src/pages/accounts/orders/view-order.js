import React from "react";
import { useQueryParam, NumberParam } from "use-query-params";

import Order from "../../../components/Accounts/orders/order-item";

const OrderItem = () => {

    const orderId = useQueryParam("id", NumberParam);

    return (
        <>
            <Order id={orderId[0]} />
        </>
    )
}

export default OrderItem