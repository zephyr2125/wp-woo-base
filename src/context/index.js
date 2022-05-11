import React, { useState } from 'react';

export const Context = React.createContext();

export const AppProvider = (props) => {

    const [addCart, setAddCart] = useState();
    const [productList, setProductList] = useState();
    return (
        <Context.Provider
            value={{
                addCart,
                setAddCart,
                productList,
                setProductList
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
