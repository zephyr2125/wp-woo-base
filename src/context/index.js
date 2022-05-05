import React, { useState } from 'react';

export const Context = React.createContext();

export const AppProvider = (props) => {
    const [userID, setUserID] = useState({});
    return (
        <Context.Provider
            value={{
                userID,
                setUserID
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
