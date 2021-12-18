import React from 'react';
import Rating from 'react-rating';

const TheReview = ({ theReview }) => {
    const { name, rating, img, review } = theReview;

    return (
        <div className="col">
            <div className="card h-100 card-body-custom py-4">
                <img src={img} className="card-img-top w-50 mx-auto rounded-circle" alt="..." />
                <div className="card-body text-center p-4 pb-0">
                    <h5 className="card-title text-primary">{name}</h5>
                    <Rating className="text-warning card-title"
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                    <br />
                    <p className="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default TheReview;