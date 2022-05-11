import React, { useContext } from "react";
import { useMutation } from "@apollo/client";

import { getUser, getQuantityCart } from "../../../func/functions";

import { Context } from "../../../context";

import { ADD_TO_CART } from "../../apis/CartAPIs";
import { random } from "lodash";
import { Link } from "gatsby";

const AddToCart = (props) => {
    const product = props;
    const { setAddCart } = useContext(Context);

    const [addCart] = useMutation(ADD_TO_CART);

    const user = getUser();

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
            if (productAddCart.id === item.id) {
                item.quantity += productAddCart.quantity;
                check = true;
                return;
            }
        });

        if (!check) {
            cart.push(productAddCart);
        }

        try {
            const addCartResult = await addCart({
                variables: {
                    productId: product.idProduct,
                    quantity: product.quantity,
                }
            });
            if (addCartResult?.addToCart?.cartItem?.total !== 0 || addCartResult?.addToCart?.cartItem?.total == undefined) {
                getQuantityCart(cart)
                localStorage.setItem("cart", JSON.stringify(cart));
            }

            setAddCart(random(1, 99999));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {user.isLogin ? (
                <div className="add_to_cart" onClick={handleAddToCart}>
                    <div className="add_to_cart__wrapper">
                        <div className="add_to_cart__title">Add to cart</div>
                    </div>
                </div>
            ) : (
                <div className="add_to_cart" onClick={handleAddToCart}>
                    <div className="add_to_cart__wrapper">
                        <div className="add_to_cart__title">
                            <Link to="/accounts/login">Login to add cart</Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddToCart;