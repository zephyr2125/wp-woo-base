import React from "react";
import { navigate, Link } from "gatsby";
import { useQuery, gql } from "@apollo/client";
import { getUser, logout } from "../../func/functions"

import Minicart from "../Cart/minicart";

const Header = () => {
    const USER = getUser();

    const GET_HEADER = gql`
        query MyQuery {
            menuItems {
            nodes {
                label
                url
            }
            }
        }
    `;

    const { data } = useQuery(GET_HEADER);

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
                <div className="header_menu">
                    <ul>
                        {data &&
                            data.menuItems.nodes.map((item) => (
                                <li key={item.label}>
                                    <Link to={item.url}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
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
