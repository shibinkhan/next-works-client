import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [bikes, setBikes] = useState([]);

    // services
    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBikes(data);
            });
    }, []);

    return (
        <div className="vh">
            <div className="container px-0 pb-4 mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
                    {
                        bikes.map(bike => <ManageProduct
                            key={bike._id}
                            bike={bike}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;