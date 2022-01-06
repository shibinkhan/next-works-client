import React, { useEffect, useState } from 'react';
import Bike from '../../Explore/Bike';

const Products = () => {
    const [bikes, setBikes] = useState([]);
    const [load, isload] = useState(false);

    // services
    useEffect(() => {
        isload(true);
        fetch('https://secure-tundra-16355.herokuapp.com/bikes/six')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBikes(data);
                isload(false);
            });
    }, []);

    return (
        <div>
            <div className="container mt-3">
                <h1 className="color pt-3 mt-4 mb-3 fw-bold">Available Works</h1>
                {load &&
                    <div className="py-5 my-5">
                        <div className="spinner-border color" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {!load &&
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            bikes.map(bike => <Bike
                                key={bike._id}
                                bike={bike}
                            />)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Products;