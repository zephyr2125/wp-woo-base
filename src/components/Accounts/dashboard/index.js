import React from "react";
import { navigate } from "gatsby";

import { getUser } from "../../../func/functions";

const Dashboard = () => {

    const USER = getUser();

    return (
        <>
            <h1>Accounts</h1>
            {!USER.isLogin ? (
                navigate('/accounts/login')
            ) : (
                <>
                    <h1>Hello, {USER.name}</h1>
                </>
            )}
        </>
    );
};

export default Dashboard;