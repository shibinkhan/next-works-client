import React, { useEffect, useState } from 'react';
import Bike from '../../Explore/Bike';

const Products = () => {
    const [bikes, setBikes] = useState([]);

    // services
    useEffect(() => {
        fetch('https://guarded-sierra-27673.herokuapp.com/bikes/six')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBikes(data);
            });
    }, []);

    return (
        <div>
            <div className="container mt-3">
                <h1 className="color pt-3 mt-4 mb-3 fw-bold">Choose Your Desire Bike</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        bikes.map(bike => <Bike
                            key={bike._id}
                            bike={bike}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;