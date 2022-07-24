import React from "react";
import App from './App';
import LogIn from "./Components/logIn";
import SignUp from "./Components/SignUp";
import Winners from "./Components/winners";
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/login" element={<LogIn />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route exact path="/winners" element={<Winners />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}


export default Router;