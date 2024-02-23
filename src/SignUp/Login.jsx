import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import './Register.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const logIn = async (e) => {

        e.preventDefault();

        try{
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
        <div>
            <div className="login_page">
                <form onSubmit={logIn}>
                    <label htmlFor="username">Username:</label>
                    <input  
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="pass">Password: </label>
                    <input
                        type='password' 
                        id='pass'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button type='submit' >Submit</button>
                </form>
                <p><span>Can't registered ?</span><Link to='/register'>Register here</Link></p>
            </div>
        </div>
    );
};
  
export default Login;
