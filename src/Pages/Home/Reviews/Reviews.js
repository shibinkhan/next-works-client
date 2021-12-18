import React, { useEffect, useState } from 'react'
import TheReview from './TheReview';

const Reviews = () => {
    const [singleReview, setSingleReview] = useState([]);

    useEffect(() => {
        fetch('https://secure-tundra-16355.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleReview(data);
            });
    }, []);

    return (
        <div className="container mt-3">
            <h1 className="color pt-3 mt-4 mb-3 fw-bold">Worker's Reviews</h1>
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
        </div>
    );
};

export default Reviews;