import React from 'react';
import Header from '../Home/Header/Header';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="notFound">
                <div>
                    <h1>404</h1>
                    <h1> Page Not Found!!!</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;