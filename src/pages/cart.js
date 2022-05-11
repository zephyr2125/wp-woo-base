import React from "react";
import Seo from "../components/Seo";

import Cart from "../components/Cart/cart-page";

const CartPage = () => {
    return ( 
        <>
            <Seo title="Cart" />
            <Cart />
        </>
     );
}
 
export default CartPage;