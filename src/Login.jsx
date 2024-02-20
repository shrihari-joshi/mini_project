import React from 'react'
import { useState } from 'react'
import { Navigation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({users}) => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const logIn = () => {
        const user = {
            username : username,
            password : pass
        }
        axios.post('http://localhost:3500/auth', user).then((result) => {
            localStorage.setItem('currentUser', user)
            console.log(`${user} loggedIn`);
        }).catch((err) => {
            console.log(err);
        });
        navigate('/')
    }

    return (
        <div>
            <form >
                <label htmlFor="username">username:</label>
                <input  
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="pass">Password: </label>
                <input
                    type='text' 
                    id = 'pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <button type='submit' onClick={logIn} >submit</button>
            </form>
            <button type='submit' onClick={logIn}>submit</button>
        </div>
    )

}

export default Login