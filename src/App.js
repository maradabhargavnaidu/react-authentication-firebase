import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInfo from './Components/UserInfo';
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/user" element={<UserInfo />} />
                </Routes>
            </Router>
            {/* <Login/>
      <Register/> */}
        </div>
    );
}

export default App;
