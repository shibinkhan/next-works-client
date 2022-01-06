import React, { useEffect, useState } from 'react';

const ManageOrder = ({ order }) => {
    const { _id, bikeInfo, customerInfo, status } = order;
    const { name, payment, img } = bikeInfo;
    const { customerName, email, phone, resume } = customerInfo;

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
        const procced = window.confirm('Are you sure want to reject this application?');
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
                        alert('Application Rejected, Reload Now.')
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
                    alert('Application Approved, Reload Now.')
                };
            });
    };


    return (
        <div className='grayText'>
            <div className="row gx-5">
                <div className="col-12 col-md-12 col-lg-4">
                    <img src={img} className="img-fluid mb-3 mb-lg-0" alt="..." />
                </div>

                <div className="col-12 col-md-6 col-lg-4 order-info-your MT-3">
                    <h3 className="color">About Customer</h3>
                    <hr className='color' />
                    <p>Name: <span className="fw-bold">{customerName}</span></p>
                    <p>Email: <span className="fw-bold">{email}</span></p>
                    <p>Contat: <span className="fw-bold">{phone}</span></p>
                    <p className="w-50">Resume Link: <span className="fw-bold">{resume}</span></p>
                </div>

                <div className="col-12 col-md-6 col-lg-4 order-info mt-3">
                    <h3 className="color fw-bold">{name}</h3>
                    <p>Payment: <span className="fw-bold">{payment} $</span></p>
                    <hr className='color' />
                    <p>Application Status: <span className={!status ? 'fw-bold text-danger' : 'fw-bold text-success'}>{!status ? 'Pending' : 'Aproved'}</span></p>
                    <button onClick={() => { handleUpdateMO(_id) }} className="button mb-3 me-2">Approve This Apply</button>
                    <button onClick={() => { handleDeleteMO(_id) }} className="button">Reject This Apply</button>
                </div>
            </div>
            <hr className='color' />
        </div>
    );
};

export default ManageOrder;