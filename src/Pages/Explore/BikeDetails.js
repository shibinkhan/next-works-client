import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Home/Header/Header';

const BikeDetails = () => {
    const [singleBike, setSingleBike] = useState({});
    const { bikeId } = useParams();
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data);
        reset();
        const bikeInfo = {
            name: singleBike.name,
            img: singleBike.img,
            payment: singleBike.payment,
            description: singleBike.description
        };
        const orderInfo = {
            bikeInfo: bikeInfo,
            customerInfo: data
        };
        axios.post('https://secure-tundra-16355.herokuapp.com/orders', orderInfo)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Applied, If we select you we will mail you, so be patient. Now Visit Dashboard To See Your Applied List.');
                }
            });
    };

    useEffect(() => {
        fetch(`https://secure-tundra-16355.herokuapp.com/bikes/${bikeId}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleBike(data);
            });
    }, [bikeId]);

    return (
        <div className="vh">
            <Header />
            <div className="container mx-auto">
                <h4 className="color fw-bold my-4">About Yourself</h4>
                <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                    <input className='apply-input ps-2' placeholder="Name..." defaultValue={user?.displayName} {...register("customerName", { required: true })} />
                    <br /><br />
                    <input className='apply-input ps-2' placeholder="Email..." defaultValue={user?.email} {...register("email", { required: true })} />
                    <br /><br />
                    <input className='apply-input ps-2' placeholder="Contact..." defaultValue="" {...register("phone", { required: true })} />
                    <br /><br />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                    <input className='apply-input ps-2' placeholder="Resume Link..." defaultValue="" {...register("resume", { required: true })} />
                    <br /><br />
                    <input className="button mb-2 w-50" type="submit" value="Confirm Apply" />
                </form>
            </div>
        </div>
    );
};

export default BikeDetails;