import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { REGISTER } from "../apis/RegisterAPIs";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');

    const [register] = useMutation(REGISTER);

    const registerHandler = async () => {
        try {
            const isRegister = await register({
                variables: {
                    username: username,
                    password: password,
                    email: email,
                    lastName: lastname,
                    firstName: firstname
                }
            });

            console.log(isRegister);
        }
        catch (err) {
            console.log(err);
        }
    }
    return ( 
        <>
            <h1>Register</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" className="input" onChange={e => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="input" onChange={e => { setUsername(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="input" onChange={e => { setPassword(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" className="input" onChange={e => { setFirstname(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" className="input" onChange={e => { setLastname(e.target.value) }} />
                </div>
            </form>
            <button onClick={registerHandler} className="btn">Register</button>

        </>
     );
}
 
export default Register;