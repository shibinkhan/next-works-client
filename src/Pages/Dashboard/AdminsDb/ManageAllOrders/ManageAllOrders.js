import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [singleOrder, setSingleOrder] = useState([]);

    useEffect(() => {
        fetch('https://secure-tundra-16355.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleOrder(data);
            });
    }, []);

    return (
        <div className="">
            <div className="container vh mt-4 pb-3">
                {
                    singleOrder.map(order =>
                        <ManageOrder
                            key={order._id}
                            order={order}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;