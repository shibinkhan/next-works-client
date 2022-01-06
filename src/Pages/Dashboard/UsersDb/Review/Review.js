import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        reset();
        axios.post('https://secure-tundra-16355.herokuapp.com/reviews', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Review Added Successfully.');
                };
            });
    };

    return (
        <div className="vh">
            <h2 className="fw-bold color my-3">Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="review-form">
                <input className="review-input w-100 mb-3 ps-2" placeholder="Your Name..." {...register("name", { required: true })} />
                <br />
                <input className="review-input w-100 mb-3 ps-2" type="number" placeholder="Rating...(0-5)" {...register("rating", { required: true })} />
                <br />
                <textarea className="w-100 ps-2" placeholder="Your Review..." {...register("review", { required: true })} />
                <br />
                <input className="button" type="submit" value="Add This Review" />
            </form>
        </div>
    );
};

export default Review;