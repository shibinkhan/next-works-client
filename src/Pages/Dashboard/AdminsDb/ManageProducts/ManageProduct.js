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
        const procced = window.confirm('Are you sure want to delete this bike?');
        if (procced) {
            fetch(`https://secure-tundra-16355.herokuapp.com/bikes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainings = bikes.filter(remaining => remaining._id !== id);
                        // console.log(remainings);
                        alert('Bike Deleted, Reload Now.')
                        setBikes(remainings);
                    };
                });
        };
    };

    return (
        <div className="col">
            <div className="card-body-custom card h-100">
                <img src={img} className="service-img card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="color fw-bold card-title">{name}</h3>
                </div>
                <button onClick={() => { handleDeleteBike(_id) }} className="mx-auto mx-3 mb-3 button">Delete This Bike</button>
            </div>
        </div>
    );
};

export default ManageProduct;