import React from "react";
import { navigate } from "gatsby";

import { getUser, logout } from "../../func/functions";

const Index = () => {

    const USER = getUser();

    return ( 
        <>
            <h1>Accounts</h1>
            { !USER.isLogin ? (
                navigate('/accounts/login')
            ) : (
                <>
                    <h1>Hello, {USER.userName}</h1>
                </>
            )}

        </>
     );
}
 
export default Index;