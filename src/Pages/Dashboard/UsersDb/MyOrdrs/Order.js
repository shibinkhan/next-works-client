import React, { useEffect, useState } from 'react';

const Order = ({ order }) => {
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
    }, []);

    const handleDeleteO = id => {
        const procced = window.confirm('Are you sure want to cancel this application?');
        if (procced) {
            fetch(`https://secure-tundra-16355.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainings = singleOrder.filter(remaining => remaining._id !== id);
                        // console.log(remainings);
                        alert('Application Canceled, Reload Now.')
                        setSingleOrder(remainings);
                    };
                });
        };
    };

    return (
        <div className='order'>
            <div className="row gx-5">
                <div className="col-12 col-md-12 col-lg-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={img} className="img-fluid mb-3 mb-lg-0 rounded-3" alt="..." />
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 order-info-your MT-3">
                    <h5 className="color">About You</h5>
                    <hr className='color' />
                    <p>Name: <span className="fw-bold">{customerName}</span></p>
                    <p>Email: <span className="fw-bold">{email}</span></p>
                    <p>Contat: <span className="fw-bold">{phone}</span></p>
                    <p>Resume Link: <span className="fw-bold">{resume}.</span></p>
                </div>

                <div className="col-12 col-md-6 col-lg-4 order-info mt-3">
                    <h3 className="color fw-bold">{name}</h3>
                    <p>Payment: <span className="fw-bold">{payment} $</span></p>
                    <hr className='color' />
                    <p>Application Status: <span className={!status ? 'fw-bold text-danger' : 'fw-bold text-success'}>{!status ? 'Pending.' : 'Aproved.'}</span></p>
                    <button onClick={() => { handleDeleteO(_id) }} className="button">Cancel Apply</button>
                </div>

            </div>
            <hr className='color' />
        </div>
    );
};

export default Order;