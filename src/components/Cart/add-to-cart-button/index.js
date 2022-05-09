import React from "react";

const AddToCart = (props) => {
    const productId = props.idProduct;

    const handleAddToCart = () => {
        console.log(productId);
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