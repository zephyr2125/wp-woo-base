import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { navigate, Link } from "gatsby";

import { LOGIN } from "../apis/LoginAPIs";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    // get token from local storage
    const token_user = localStorage.getItem('token_user');
    
    // if token is exist, then show logout button
    const isLogin = token_user ? true : false;
    const userName = localStorage.getItem('token_user_username');


    const [login] = useMutation(LOGIN);

    const handleLogin = async () => {
        try{
            const isLogin  = await login({ variables: { username, password } });
            
            if(isLogin?.data.login.authToken){
                localStorage.setItem('token_user', isLogin?.data.login.authToken);
                localStorage.setItem('token_user_username', isLogin?.data.login.user.name);
                navigate('/');
            }
            
        }
        catch(err){
            setErr(err.message);
        }
    }

    const LogoutHandler = () => {
        localStorage.removeItem('token_user');
        localStorage.removeItem('username_gatsby_demo');
        navigate('/accounts/login');
    }

    return ( 
        <>
            <h1>Login</h1>
            { isLogin ? ( 
                <div>
                    <h1>Hello, {userName}</h1>
                    <p>You are logged</p>
                    <button>
                        <Link to="/">Go to Home</Link>
                    </button>
                    <button 
                        onClick={LogoutHandler}>
                            Logout
                    </button>
                </div>
            ) : (
                <>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username" className="label">Username</label>
                            <input type="text" id="username" className="input" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" id="password" className="input" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </form>
                    <button onClick={handleLogin} className="btn">Login</button>
                    {err && <p className="error">{err}</p>}
                    <div className="link">
                        <Link to="/accounts/register">Register</Link>
                    </div>
                </>
            )}
        </>
     );
}
 
export default Login;