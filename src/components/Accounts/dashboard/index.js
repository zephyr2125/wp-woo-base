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
                    <section>
                        From your account dashboard you can view your recent orders, manage
                        your shipping and billing addresses
                    </section>
                </>
            )}
        </>
    );
};

export default Dashboard;