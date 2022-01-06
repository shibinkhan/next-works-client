import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddAProduct.css';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        reset();
        axios.post('https://secure-tundra-16355.herokuapp.com/bikes', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Work Added Successfully.')
                }
            })
    };

    return (
        <div className="add-service vh">
            <h2 className="fw-bold color my-3">Add a Work</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='inputpro ps-2' placeholder="Name..." {...register("name", { required: true })} />
                <input className='inputpro ps-2' placeholder="Price..." {...register("price", { required: true })} />
                <textarea className='inputpro ps-2' placeholder="Description..." {...register("description", { required: true })} />
                <textarea className='inputpro ps-2' placeholder="Specifications..." {...register("specifications")} />
                <input className='inputpro ps-2' placeholder="Card Image Link..." {...register("img")} />
                <input className="button addService w-25" placeholder="" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddAProduct;