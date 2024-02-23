import { useState } from "react";
// import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import './SignUp.css'; // Import the CSS file

const SignUp = ({ users, setUsers }) => {
    const [state, setState] = useState('login');
    

    const toggleState = () => {
        setState(state === 'login' ? 'register' : 'login');
    };

    return (
        <div className="body_sign">
            {state === 'login' ? <Login /> : <Register />}
            
            <div className="toggle-button">  
                <button onClick={toggleState}>
                    {state === 'login' ? 'Register' : 'Login'}
                </button>
            </div>
        </div>
    );
};

export default SignUp;
