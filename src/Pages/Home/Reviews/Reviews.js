import React, { useEffect, useState } from 'react'
import TheReview from './TheReview';

const Reviews = () => {
    const [singleReview, setSingleReview] = useState([]);
    const [load, isload] = useState(false);

    useEffect(() => {
        isload(true);
        fetch('https://secure-tundra-16355.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleReview(data);
                isload(false);
            });
    }, []);

    return (
        <div className="container mt-3 mb-5">
            <h1 className="color pt-3 mt-4 mb-3 fw-bold">Worker's Reviews</h1>
            {load &&
                <div className="py-5 my-5">
                    <div className="spinner-border color" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {!load && 
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                    {
                        singleReview.map(theReview =>
                            <TheReview
                                key={theReview._id}
                                theReview={theReview}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
};

export default Reviews;