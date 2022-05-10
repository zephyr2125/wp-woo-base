import React, { useState } from 'react';

export const Context = React.createContext();

export const AppProvider = (props) => {
    const [addCart, setAddCart] = useState();
    return (
        <Context.Provider
            value={{
                addCart,
                setAddCart
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
