import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import { useQuery, useMutation } from "@apollo/client";

import { getUser, getQuantityCart, getTotalCartQty } from "../../../func/functions";
import { random } from "lodash";

import { GET_CART_ITEMS, CLEAR_CART } from "../../apis/CartAPIs";

import { Context } from "../../../context";

const Cart = () => {
    // const user = getUser();
    // const qtyCart = getTotalCartQty();
    // const cart = user.cart;

    const { setAddCart } = useContext(Context);

    useEffect(() => {
        refetch();
    }, []);

    const { data, refetch } = useQuery(GET_CART_ITEMS);
    const [clearCart] = useMutation(CLEAR_CART);

    const handlerClearCart = async () => {
        try {
            await clearCart();
            refetch();
            localStorage.removeItem('cart');
            localStorage.removeItem('cart-total');
            setAddCart(random(1, 99999));
        } catch (error) {
            console.log(error);
        }

    }

    const handleRemoveItem = (id) => {
        // const newCart = cart.filter((item) => item.id !== id);
        // localStorage.setItem("cart", JSON.stringify(newCart));
        // getQuantityCart(newCart);
        // setAddCart(random(1, 99999));
        // console.log(id);
    }

    return ( 
        <>
            <div className="cart">
                <div className="cart__wrapper">
                    <div className="cart__title">
                        <span>My cart</span>
                        <span className="cart__quantity">({data?.cart.contents.itemCount})</span>
                    </div>
                    <div className="cart__content">
                        <table className="cart__table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.cart.contents.nodes.map((item) => {
                                    return (
                                        <tr key={item.product.node.id}>
                                            <td>
                                                <Link to={`/product/${item.product.node.slug}`}>{item.product.node.name}</Link>
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td dangerouslySetInnerHTML={{ __html: item.total }} />
                                            <td><button onClick={() => {handleRemoveItem(item.id)}}>Remove</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="cart__action">
                        <button className="cart__action_clear" onClick={handlerClearCart}>Clear cart</button>
                        <Link to="/checkout">Checkout</Link>
                    </div>
                    <div className="cart__total">
                        <div className="cart__total-title">
                            <span>Total: </span>
                            <span className="cart__total-quantity">{data?.cart.contents.itemCount}</span>
                        </div>
                        <div className="cart__total-price">
                            <span>Total Price: </span>
                            <span dangerouslySetInnerHTML={{ __html: data?.cart.total }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Cart;