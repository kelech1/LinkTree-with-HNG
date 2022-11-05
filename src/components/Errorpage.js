import React from 'react'
import { Navigate } from "react-router-dom";



const Errorpage = () => {
    return (
    <>
        <div className="Error-page">
            <h4>404 error</h4>
            <h1>We can't find that page</h1>
            <p>Sorry, the page you are looking for doesn't exist.</p>
            <Navigate to={'./Homepage'}>Go Home</Navigate>
        </div>
        
    </>
    );
};

export default Errorpage;