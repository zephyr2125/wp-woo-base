import React from "react";
import { navigate, Link } from "gatsby";

const Header = () => {

    // get token from local storage
    const token_user_public_blog = localStorage.getItem('token_user');
    // if token is exist, then show logout button
    const isLogin = token_user_public_blog ? true : false;
    const userName = localStorage.getItem('token_user_username');

    const LogoutHandler = () => {
        localStorage.removeItem('token_user');
        localStorage.removeItem('token_user_username');
        navigate('/accounts/login');
    }

    return ( 
        <section className="header">
            <div className="header_wrapper">
                <div aria-hidden="true" className="header_logo" onClick={() => { navigate("/")}}>
                    <div>Woo</div>
                </div>
            </div>
            {
                isLogin && userName ? (
                    <div className="header_login">
                        <span className="header_name">Hello, {userName}</span>
                        <a onClick={LogoutHandler} href="#">Logout</a>
                    </div>
                ) : (
                    <div className="header_login">
                        <Link to="/accounts/login">Login</Link>
                    </div>
                )
            }
            
        </section>
     );
}
 
export default Header;
