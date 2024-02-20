import { Routes, Route , Link} from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import './SignUp.css'; // Import the CSS file

const SignUp = ({users, setUsers}) => {
    return (
        <div className="body_sign">
            <ul className="sign">
                <li className="in"><Link to="/login" className="nav-link">Login</Link></li>
                <li className="in"><Link to="/Register" className="nav-link">Register</Link></li>
            </ul>
        </div>
    )
}

export default SignUp
