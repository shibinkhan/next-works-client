import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user);

    return (
        <div className="header sticky-top">
            <div className="px-0">
                <nav className="navbar navbar-expand-md navbar-dark nav-bar-btn py-0">
                    <div className="main-navbar container-fluid d-flex justify-content-between">
                        <Link className="navbar-brand py-0" to="/home"><span className='color'>Next Works</span></Link>

                        <div className="">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Navlinks */}
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                    <NavLink className="nav-link" to="/explore">More Works</NavLink>
                                    {user?.email && <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>}
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div>
                                {user?.email &&
                                    <div className="d-flex">
                                        <p className="my-auto user-name grayText">{user.displayName}</p>
                                        <img className="user-img mx-2" src={user.photoURL} alt="" />
                                    </div>
                                }
                            </div>

                            {/* Log in and out */}
                            <div>
                                {user?.email ?
                                    <button className="button" onClick={logOut}>Log Out</button> :
                                    <Link to="/login"><button className="button">Log In</button></Link>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;