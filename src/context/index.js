import React, { useState } from 'react';

export const Context = React.createContext();

export const AppProvider = (props) => {
    const [addCart, setAddCart] = useState(false);
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
