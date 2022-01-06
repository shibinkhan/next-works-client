import React, { useEffect, useState } from 'react';

const ManageProduct = ({ bike }) => {
    const { _id, name, img } = bike;

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://secure-tundra-16355.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBikes(data);
            });
    }, []);

    const handleDeleteBike = id => {
        const procced = window.confirm('Are you sure want to delete this work?');
        if (procced) {
            fetch(`https://secure-tundra-16355.herokuapp.com/bikes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainings = bikes.filter(remaining => remaining._id !== id);
                        // console.log(remainings);
                        alert('Work Deleted, Reload Now.')
                        setBikes(remainings);
                    };
                });
        };
    };

    return (
        <div className="col">
            <div className="card-body-custom2 card h-100">
                <img src={img} className="service-img card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="color fw-bold card-title">{name}</h4>
                </div>
                <button onClick={() => { handleDeleteBike(_id) }} className="mx-auto mx-3 mb-3 button">Delete This Work</button>
            </div>
        </div>
    );
};

export default ManageProduct;