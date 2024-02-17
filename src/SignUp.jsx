import { Routes, Route , Link} from "react-router-dom"
import Login from "./Login"
import Register from "./Register"

const SignUp = ({users, setUsers}) => {
    return (
        // <Routes>

        // </Routes>
        <div>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    )
}

export default SignUp