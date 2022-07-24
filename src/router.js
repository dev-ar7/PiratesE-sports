import React from "react";
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/PiratesE-sports" element={<App />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}


export default Router;