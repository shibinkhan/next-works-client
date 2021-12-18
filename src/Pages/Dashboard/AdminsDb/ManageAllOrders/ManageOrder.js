import React, { useEffect, useState } from 'react';

const ManageOrder = ({ order }) => {
    const { _id, bikeInfo, customerInfo, status } = order;
    const { name, price, img } = bikeInfo;
    const { customerName, email, phone, address } = customerInfo;

    const [singleOrder, setSingleOrder] = useState([]);

    useEffect(() => {
        fetch('https://secure-tundra-16355.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, [status]);

    const handleDeleteMO = id => {
        const procced = window.confirm('Are you sure want to delete this order?');
        if (procced) {
            fetch(`https://secure-tundra-16355.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        const remainingPlans = singleOrder.filter(remaining => remaining._id !== id);
                        setSingleOrder(remainingPlans);
                        alert('Order Deleted, Reload Now.')
                    };
                });
        };
    };

    const handleUpdateMO = id => {
        fetch(`https://secure-tundra-16355.herokuapp.com/orders/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    alert('Order Approved, Reload Now.')
                };
            });
    };


    return (
        <div>
            <div className="row gx-5">
                <div className="col-12 col-md-12 col-lg-5">
                    <img src={img} className="img-fluid mb-3 mb-lg-0" alt="..." />
                </div>

                <div className="col-12 col-md-7 col-lg-4 order-info-your MT-3">
                    <h3 className="color">About Customer</h3>
                    <hr />
                    <p>Name: <span className="fw-bold">{customerName}</span></p>
                    <p>Email: <span className="fw-bold">{email}</span></p>
                    <p>Contat: <span className="fw-bold">{phone}</span></p>
                    <p>Address: <span className="fw-bold">{address}.</span></p>
                </div>

                <div className="col-12 col-md-5 col-lg-3 order-info mt-3">
                    <h3 className="color fw-bold">{name}</h3>
                    <p>Price: <span className="fw-bold">BDT {price} Only.</span></p>
                    <hr />
                    <p>Order Status: <span className={!status ? 'fw-bold text-danger' : 'fw-bold text-success'}>{!status ? 'Pending' : 'Aproved'}</span></p>
                    <button onClick={() => { handleUpdateMO(_id) }} className="button mb-3 me-2">Approve This Order</button>
                    <button onClick={() => { handleDeleteMO(_id) }} className="button">Delete This Order</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default ManageOrder;