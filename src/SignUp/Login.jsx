import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css'


const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const logIn = async (e) => {

        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3500/auth', {
                username: username,
                password: pass
            });

            localStorage.setItem('currentUser', JSON.stringify(response.data));
            console.log(`${username} logged In`);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='mainbase'>
            <div className='base'>

            <div class="baklol">
            <div class="heading">Sign In</div>
            <form action="" class="form">
                <input required="" class="input" type="email" name="email" id="email" placeholder="E-mail" />
                <input required="" class="input" type="password" name="password" id="password" placeholder="Password" />
                <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
                <input class="login-button" type="submit" value="Sign In" />
                <span class="forgot-password"><a href="#">Don't have an account?</a></span>

                <input class="login-button" type="submit" value="Sign Up" />
            </form>
        </div>

            </div>


        </div>
        
    );
};

export default Login;
