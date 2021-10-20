import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email"></input>
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="your password"></input>
                    <br /> <br />
                    <input type="submit" value="Submit" />
                    <p>new to Medinova?<br /><Link to="/register">Create Account ? </Link></p>
                    <div>------------or-----------</div>

                    <br /><br /><br />
                </form>

                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>

            </div>
        </div>


    );

};

export default Login;