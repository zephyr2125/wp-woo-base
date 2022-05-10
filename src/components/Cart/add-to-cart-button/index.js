import React, { useContext } from "react";
import { useMutation } from "@apollo/client";

import { getUser, getQuantityCart } from "../../../func/functions";

import { Context } from "../../../context";

import { ADD_TO_CART } from "../../apis/CartAPIs";
import { random } from "lodash";

const AddToCart = (props) => {
    const product = props;
    const { setAddCart } = useContext(Context);

    const [ addCart ] = useMutation(ADD_TO_CART);

    const handleAddToCart = async () => {
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

        if(!user.isLogin){
            getQuantityCart(cart)
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        if(user.isLogin) {
            const addCartResult = await addCart({
                variables: {
                    productId: product.idProduct,
                    quantity: product.quantity,
                }
            });
            console.log(addCartResult);
        }
        setAddCart(random(1, 99999));
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