import React from "react";

import { getUser, getQuantityCart } from "../../../func/functions";

const AddToCart = (props) => {
    const product = props;

    const handleAddToCart = () => {
        const user = getUser();
        const cart = user.cart;
        var check = false;

        const productAddCart = {
            id: product.idProduct,
            quantity: product.quantity
        };

        cart.map((item) => {
            if(productAddCart.id === item.id) {
                item.quantity += productAddCart.quantity;
                check = true;
                return;
            }
        });

        if(!check) {
            cart.push(productAddCart);
        }

        getQuantityCart(cart)
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return ( 
        <div className="add_to_cart" onClick={handleAddToCart}>
            <div className="add_to_cart__wrapper">
                <div className="add_to_cart__title">Add to cart</div>
            </div>
        </div>
     );
}
 
export default AddToCart;