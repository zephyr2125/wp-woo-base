import React, { useEffect, useState, useContext } from "react";
import { Link } from "gatsby";

import { getUser, getTotalCartQty, getQuantityCart } from "../../../func/functions";

import { Context } from "../../../context";

const Minicart = () => {
    const [qty, setQty] = useState();
    const [cart, setCart] = useState({});
    const { addCart } = useContext(Context);
    const [showMiniCart, setShowMiniCart] = useState(false);

    useEffect(() => {
        const user = getUser();
        const qtyCart = getTotalCartQty();
        
        setCart(user.cart);

        setQty(qtyCart);

    }, [addCart]);

    const handlerShowMiniCart = () => {
        setShowMiniCart(!showMiniCart);
    }
    

    return ( 
        <>
            <div className="minicart">
                <div className="minicart__wrapper">
                    <div className="minicart__title" onClick={handlerShowMiniCart}>
                        <span>My cart</span>
                        <span className="minicart__quantity">({qty})</span>
                    </div>
                    {showMiniCart && (
                        <div className="minicart__content">
                            {cart.map((item) => {
                                return (
                                    <div className="minicart__item" key={item.id}>
                                        <div className="minicart__item__name">
                                            <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                        </div>
                                        <div className="minicart__item__quantity">
                                            <span>{item.quantity}</span>
                                        </div>
                                        <div className="minicart__item__price">
                                            <span>{item.price}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

        </>
     );
}
 
export default Minicart;