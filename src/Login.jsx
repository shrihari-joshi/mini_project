import React from 'react'
import { useState } from 'react'
import { Navigation, useNavigate } from 'react-router-dom'

const Login = ({users}) => {
    const [currentUser, setCurrentUser] = useState('');
    const navigate = useNavigate();
    const logIn = () => {
        navigate('/')
    }

    return (
        <div>
            {/* <form >
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
            </form> */}
            <button type='submit' onClick={logIn}>submit</button>
        </div>
    )

}

export default Login