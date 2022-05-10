import React, { useEffect, useState, useContext } from "react";
import { Link } from "gatsby";

import { getUser, getTotalCartQty, getQuantityCart } from "../../../func/functions";

import { Context } from "../../../context";

const Minicart = () => {
    const [qty, setQty] = useState();
    const [cart, setCart] = useState({});
    const { addCart } = useContext(Context);

    useEffect(() => {
        const user = getUser();
        const qtyCart = getTotalCartQty();
        
        setCart(user.cart);

        setQty(qtyCart);

    }, [addCart]);
    

    return ( 
        <>
            <div className="minicart">
                <div className="minicart__wrapper">
                    <div className="minicart__title">
                        <span>My cart</span>
                        <span className="minicart__quantity">({qty})</span>
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default Minicart;