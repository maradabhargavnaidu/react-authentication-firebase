import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/firebase-config';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [Error, setError] = useState(false);

    const navigate = useNavigate();
    const logi = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            if (user.user) navigate('/user');
        } catch (error) {
            setError(true);
        }
    };

    // const login = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    //     .then((userCredential) => {
    //     const user = userCredential.user;
    //     navigate('/user')
    //     })
    //     .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
    // }

    return (
        <div className="grid">
            <form className="Login-box">
                <h1>USER LOGIN</h1>
                <label htmlFor="email">Enter Mail:</label>
                <input
                    type="email"
                    name="email"
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <label htmlFor="password">Enter Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <input type="submit" value="login" className="btn" onClick={logi} />
                <Link className="Link" to="/register">
                    Don't have an account ? SignUp
                </Link>
                {Error && <span>Wrong Email or Password</span>}
            </form>
        </div>
    );
};
export default Login;
