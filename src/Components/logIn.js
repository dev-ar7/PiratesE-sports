import React, {useState} from "react";
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../Static/Css/Login.css';


function LogIn() {

    const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')

    return(
        <>
            <NavBar />
            <div className="login">
            <h1>LogIn</h1>
            <div className='row'>
                <div className='six columns'>
                <label className='label'>Username</label>
                <input
                    className='u-full-width input'
                    placeholder='Username'
                    type='text'
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    autoFocus
                />
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>
                <label className='label'>Password</label>
                <input
                    className='u-full-width input'
                    placeholder='Password'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                </div>
            </div>
            <button className="btn">LogIn</button>
            </div>
            <Footer />
        </>
    );
}


export default LogIn;