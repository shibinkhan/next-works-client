import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddAProduct.css';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        reset();
        axios.post('https://guarded-sierra-27673.herokuapp.com/bikes', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('New Bike Added Successfully.')
                }
            })
    };

    return (
        <div className="add-service vh">
            <h2 className="fw-bold color my-3">Add a New Bike</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name..." {...register("name", { required: true })} />
                <input placeholder="Price..." {...register("price", { required: true })} />
                <textarea placeholder="Description..." {...register("description", { required: true })} />
                <textarea placeholder="Specifications..." {...register("specifications")} />
                <input placeholder="Card Image Link..." {...register("img")} />
                <input className="button addService w-25" placeholder="" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddAProduct;