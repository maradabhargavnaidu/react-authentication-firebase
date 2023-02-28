import { auth } from './firebase-config';
import { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
const UserInfo = () => {
    const [userInfo, setUserInfo] = useState({});
    const logout = async () => {
        signOut(auth);
    };

    onAuthStateChanged(auth, (currentUser) => {
        setUserInfo(currentUser);
    });
    return (
        <>
            <h1>User : {userInfo?.email}</h1>
            <button className="btn" onClick={logout}>
                Sign Out
            </button>
            <br />
            <Link to="/" className="Link">
                login
            </Link>
        </>
    );
};
export default UserInfo;
