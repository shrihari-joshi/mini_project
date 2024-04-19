import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const logIn = async (e) => {

        e.preventDefault();

        try{
            const response = await axios.get(`http://localhost:3500/auth`,{ 
                params : {
                    username : username,
                    password : pass
                }
            });
            if (response){
                localStorage.setItem('currentUser', JSON.stringify(response.data));
            }
            console.log(`${username} logged In`);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            
                <form className="loggedin" onSubmit={logIn}>
                <div className="login_page">
                    {/* <label htmlFor="username">Username:</label> */}
                    <input  
                        placeholder='Username:'
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input2'
                    />
                    {/* <label htmlFor="pass">Password: </label> */}
                    <input
                        placeholder='Password:'
                        type='password' 
                        id='pass'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className='input2'
                    />
                    <button className='loginbutton' type='submit' >Log in</button>
                </div>
                </form>
                
            </div>
        
    );
};
  
export default Login;
