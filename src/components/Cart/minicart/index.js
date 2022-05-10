import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { getUser, getQuantityCart } from "../../../func/functions";


const Minicart = () => {
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState({});

    useEffect(() => {
        const user = getUser();
        const cart = user.cart;
        setCart(cart);
        const quantity = getQuantityCart(cart);
        setQuantity(quantity);
    }, [cart]);

    return ( 
        <>
            <div className="minicart">
                <div className="minicart__wrapper">
                    <div className="minicart__title">
                        <span>My cart</span>
                        <span className="minicart__quantity">({quantity})</span>
                    </div>
                    </div>
            </div>

        </>
     );
}
 
export default Minicart;