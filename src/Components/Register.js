import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/firebase-config';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const Navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                Navigate('/user');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <div className="grid">
            <form className="Login-box">
                <h1>REGISTER USER</h1>
                <label htmlFor="email">Enter Mail:</label>
                <input
                    type="email"
                    name="email"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <label htmlFor="password">Enter Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <input type="submit" value="register" className="btn" onClick={register} />
                <Link to="/" className="Link">
                    Already have an acoount? Login
                </Link>
            </form>
        </div>
    );
};
export default Login;
