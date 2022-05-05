import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { navigate, Link } from "gatsby";

import { getUser, logout } from "../../func/functions"

import { LOGIN } from "../apis/LoginAPIs";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const USER = getUser();

    const [login] = useMutation(LOGIN);

    const handleLogin = async () => {
        try{
            const isLogin  = await login({ variables: { username, password } });
            
            if(isLogin?.data.login.authToken){
                localStorage.setItem('token_user', isLogin?.data.login.authToken);
                localStorage.setItem('token_user_username', isLogin?.data.login.user.name);
                navigate('/accounts');
            }
            
        }
        catch(err){
            setErr(err.message);
        }
    }

    const LogoutHandler = () => {
        logout();
        navigate('/accounts/login');
    }

    return ( 
        <>
            <h1>Login</h1>
            { USER.isLogin && USER.userName !== null ? ( 
                <div>
                    <h1>Hello, {USER.userName}</h1>
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