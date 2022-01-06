import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="footer-container pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="text-start">
                                <h3 className='color'>Next Works</h3>
                                <p><small>Why Next Works?...It is a Bangladeshi freelance marketplace website, which allows potential employers to post jobs that freelancers can then bid to complete., Thank You.</small></p>
                            </div>
                        </div>

                        <div className="col-md-6 my-auto">
                            <div>
                                <h5 className="mb-4 color">NEWSLETTER</h5>
                                <form className="input-group">
                                    <input type="text" className="form-control me-2" placeholder="Insert Your Email Here..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <button className="button" type="submit">Submit</button>
                                </form>
                            </div>

                            <ul className="ps-0 d-flex justify-content-center mt-3">
                                <NavLink to="/home" className="text-color nav-link">Home</NavLink>
                                <NavLink to="/about" className="text-color nav-link">About Us</NavLink>
                            </ul>
                        </div>
                    </div>
                    <p className="mb-0 py-4">© Copyright Reserved by Next Works 2022.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;