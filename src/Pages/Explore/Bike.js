import React from 'react';
import { NavLink } from 'react-router-dom';
import './Allbikes.css';

const Bike = ({ bike }) => {
    const { _id, name, img, price, description } = bike;

    return (
        <div className="col">
            <div className="card-body-custom card h-100">
                <img src={img} className="service-img card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="color fw-bold card-title">{name}</h3>
                    <p>Price: <span className="fw-bold">BDT {price} Only</span></p>
                    <p>{description}</p>
                </div>
                <NavLink to={`/bike/${_id}`}><button className="button mb-5 px-4">Apply Now</button></NavLink>
            </div>
        </div>
    );
};

export default Bike;