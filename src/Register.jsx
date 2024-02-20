import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './Register.css'


const Register = ({ users, setUsers}) => {
    
    const [username, setUsername] = useState([])
    const [email, setEmail] =useState('')
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
    
    const handleSubmit = async (e) => {
        if (!username || !email || !pass){
            alert('All fields are mandatory!')
            return 
        }
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
            axios.post('http://localhost:3500/register', user).then(response => {
                console.log(`${user} is created`);
            }).catch(error => {
                console.error('Cannot send data');
            })
        setUsername('')
        setEmail('')
        setPass('')
        navigate('/')
    }

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
            <label htmlFor="pass">Password: </label>
            <input
                required
                type='password' 
                id = 'pass'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <label htmlFor="retype-pass">Confirm Password: </label>
            <input
                required
                type='password' 
                id = 'retype-pass'
                value={retypePass}
                onChange={(e) => setRetypePass(e.target.value)}
            />
            <button type='submit' onClick={handleSubmit} >Submit</button>
        </form>
        </div>
    )
}

export default Register