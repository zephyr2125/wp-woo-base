import React from "react";
import { navigate, Link } from "gatsby";

import { getUser, logout } from "../../func/functions"

import Minicart from "../Cart/minicart";

const Header = () => {
    const USER = getUser();

    const LogoutHandler = () => {
        logout();
        navigate('/accounts/login');
    }

    return (
        <section className="header">
            <div className="header_wrapper">
                <div aria-hidden="true" className="header_logo" onClick={() => { navigate("/") }}>
                    <div>Woo</div>
                </div>
            </div>
            {
                USER.isLogin && USER.userName !== null ? (
                    <div className="header_login">
                        <Link to="/accounts">
                            <span className="header_name">Hello, {USER.name}</span>
                        </Link>
                        <a onClick={LogoutHandler} href="#">Logout</a>
                    </div>
                ) : (
                    <div className="header_login">
                        <Link to="/accounts/login">Login</Link>
                    </div>
                )
            }
            <Minicart />
        </section>
    );
}

export default Header;
