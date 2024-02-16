import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username : username,
            email : email,
            password : pass
        }

        const response = JSON.stringify(user)
        localStorage.setItem('user', response)
        console.log(`Use ${username} and ${email} created`);
        setUsername('')
        setEmail('')
        setPass('')

    }
    return (
        <form >
            <label htmlFor="username">username:</label>
            <input  
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input  
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="pass">Password: </label>
            <input
                type='text' 
                id = 'pass'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <button type='submit' onClick={handleSubmit} >submit</button>
        </form>
    )
}

export default Register