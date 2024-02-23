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
            await axios.post('http://localhost:3500/register', user);
            console.log(`${user.username} is created`);
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
                <label htmlFor="username">Username:</label>
                <input  
                    required
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input  
                    required
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="pass">Password:</label>
                <input
                    required
                    type='password' 
                    id='pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <label htmlFor="retype-pass">Confirm Password:</label>
                <input
                    required
                    type='password' 
                    id='retype-pass'
                    value={retypePass}
                    onChange={(e) => setRetypePass(e.target.value)}
                />
                <button type='submit' onClick={handleSubmit}>Submit</button>
                <p><span>Login here</span><Link to='/login'>login here</Link></p>
            </form>
        </div>
    );
};

export default Register;