import React, { useState } from 'react';

export const Context = React.createContext();

export const AppProvider = (props) => {

    const [addCart, setAddCart] = useState();
    const [productListFilter, setProductListFilter] = useState();
    return (
        <Context.Provider
            value={{
                addCart,
                setAddCart,
                productListFilter,
                setProductListFilter
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
