import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Register = ({ users, setUsers}) => {
    
    const [username, setUsername] = useState([])
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [retypePass, setRetypePass] = useState('')
    const navigate = useNavigate();

    const isPassMatch = (pass, rePass) => {
        if (pass !== rePass) {
            alert("Password not does not matched");
            setPass('');
            setRetypePass('');
            return false
        }
        return true
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isPassMatch(pass, retypePass)){
            return;
        }
        const id = users.length ? users[users.length - 1].id + 1 : 0
        const user = {
            id : id,
            username : username,
            email : email,
            password : pass
        }
        console.log(`User ${username} created`);

        const response = JSON.stringify(user)
        const newUsers = [ ...users, response]
        localStorage.setItem('Users', newUsers)
        setUsers(newUsers)
        setUsername('')
        setEmail('')
        setPass('')
        navigate('/login')
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
            <label htmlFor="retype-pass">Retype Password: </label>
            <input
                type='text' 
                id = 'retype-pass'
                value={retypePass}
                onChange={(e) => setRetypePass(e.target.value)}
            />
            <button type='submit' onClick={handleSubmit} >submit</button>
        </form>
    )
}

export default Register