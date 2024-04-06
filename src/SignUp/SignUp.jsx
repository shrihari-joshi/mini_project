import { useState } from "react";
import Login from "./Login";
import './SignUp.css'; // Import the CSS file

const SignUp = ({ users, setUsers }) => {
    const [state, setState] = useState('login');
    

    const toggleState = () => {
        setState(state === 'login' ? 'register' : 'login');
    };

    return (
        <div className="mainbase">

        <div className="base">
            <Login/>
            
        </div>

        </div>
    );
};

export default SignUp;
