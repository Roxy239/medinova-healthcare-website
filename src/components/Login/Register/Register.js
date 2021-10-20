import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    // const { handleRegistration } = useAuth();
    // const { handleEmailchange } = useAuth();
    // const { handlePasswordchange } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email"></input>
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="your password"></input>
                    <br /> <br />
                    <input type="password" name="" id="" placeholder="re-enter password"></input>
                    <br /> <br />
                    <input type="submit" value="Submit" />
                </form>

                <p>Already have an account? <Link to="/login">Log in now</Link></p>
                <br />
                <button onclick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;