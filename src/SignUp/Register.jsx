import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';

import './Register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [retypePass, setRetypePass] = useState('');
    const navigate = useNavigate();

    const isPassMatch = (pass, rePass) => {
        if (pass !== rePass) {
            alert("Passwords do not match");
            setPass('');
            setRetypePass('');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!username || !email || !pass){
            alert('All fields are mandatory!');
            return;
        }
        
        if (!isPassMatch(pass, retypePass)){
            return;
        }

        const user = {
            username: username,
            email: email,
            password: pass
        };

        try {
            const response = await axios.post('http://localhost:3500/register', user);

                console.log(`${user.username} is created`);
                console.log('successful')
                setUsername('');
                setEmail('');
                setPass('');
                setRetypePass('');
                navigate('/');
        } catch (error) {
            console.error('Cannot send data:', error);
            alert('Failed to register. Please try again.');
        }
    };

    return (
        <div className='full'>
            <form className='page'>
                {/* <label htmlFor="username">Username:</label> */}
                <input  
                    placeholder='Username:'
                    required
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='input1'
                />
                {/* <label htmlFor="email">Email:</label> */}
                <input  
                    placeholder='Email:'
                    required
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input1'
                />
                {/* <label htmlFor="pass">Password:</label> */}
                <input
                    placeholder='Password:'
                    required
                    type='password' 
                    id='pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    className='input1'
                />
                {/* <label htmlFor="retype-pass">Confirm Password:</label> */}
                <input
                    placeholder='Confirm Password:'
                    required
                    type='password' 
                    id='retype-pass'
                    value={retypePass}
                    onChange={(e) => setRetypePass(e.target.value)}
                    className='input1'
                />
                <button className='regbutton' type='submit' onClick={handleSubmit}>Register</button>
            </form>
        </div>
    );
};

export default Register;