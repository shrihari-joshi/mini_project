import React from 'react'
import { useState } from 'react'
import { Navigation, useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import axios from 'axios'
=======
import './Register.css'
>>>>>>> fa0fd1ff14bfbdc535e2ffaaa2a34ab1f81bf853

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
<<<<<<< HEAD
        <div>
            <form >
=======
        <div className="login_page">
            {/* <form >
>>>>>>> fa0fd1ff14bfbdc535e2ffaaa2a34ab1f81bf853
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
<<<<<<< HEAD
            </form>
            <button type='submit' onClick={logIn}>submit</button>
=======
            </form> */}
            <button type='submit' onClick={logIn}>Submit</button>
>>>>>>> fa0fd1ff14bfbdc535e2ffaaa2a34ab1f81bf853
        </div>
    )

}

export default Login