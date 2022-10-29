import React from 'react'
import { Link } from "react-router-dom";



const errorPage = () => {
    return (
    <>
        <div className="not-found">
            <h4>404 error</h4>
            <h1>We can't find that page</h1>
            <p>Sorry, the page you are looking for doesn't exist.</p>
            <div className='go-home' as={Link} to='../'>
            Go Home
            </div>
        </div>
        
    </>
    );
};

export default errorPage;