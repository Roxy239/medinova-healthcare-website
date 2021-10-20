import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
            </div>
        </div>
    );
};

export default Register;