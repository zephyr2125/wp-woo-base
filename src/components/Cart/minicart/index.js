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
                            <table className="minicart__table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <Link to={`/product/${item.slug}`}>{item.name}</Link>
                                                </td>
                                                <td>{item.quantity}</td>
                                                <td dangerouslySetInnerHTML={{__html: item.price}} />
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="minicart__total">
                                <div className="minicart__total-title">Total</div>
                                <div className="minicart__total-price">{cart.reduce((total, item) => {
                                    return total + item.price * item.quantity;
                                }
                                , 0)}</div>
                            </div>
                            <div className="minicart__button">
                                <Link to="/cart" className="minicart__button-link">View cart</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
     );
}
 
export default Minicart;