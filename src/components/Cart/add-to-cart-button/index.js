import React, { useContext } from "react";

import { getUser, getQuantityCart } from "../../../func/functions";

import { Context } from "../../../context";

const AddToCart = (props) => {
    const product = props;
    const { setAddCart } = useContext(Context);

    const handleAddToCart = () => {
        const user = getUser();
        const cart = user.cart;
        var check = false;

        const productAddCart = {
            id: product.idProduct,
            quantity: product.quantity,
            name: product.name,
            price: product.price,
            slug: product.slug,
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
        setAddCart(getQuantityCart(cart));
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