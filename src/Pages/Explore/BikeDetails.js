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
            price: singleBike.price,
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
                    alert('Order Confirmed, Now Visit Dashboard > My Orders To See Your Order List.');
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
                {/* Bike Details */}
                <h1 className="color my-3">{singleBike?.name}</h1>
                <hr />
                <div className="row">
                    {/* User Details */}
                    <div className="col-12 col-sm-5 col-md-4 col-lg-3">
                        <h4 className="color fw-bold">About Yourself</h4>
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                            <input placeholder="Name..." defaultValue={user?.displayName} {...register("customerName", { required: true })} />
                            <br /><br />
                            <input placeholder="Email..." defaultValue={user?.email} {...register("email", { required: true })} />
                            <br /><br />
                            <input placeholder="Contact..." defaultValue="" {...register("phone", { required: true })} />
                            <br />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                            <br />
                            <input placeholder="Address..." defaultValue="" {...register("address", { required: true })} />
                            <br /><br />
                            <input type="number" placeholder="Post Code..." defaultValue="" {...register("postCode", { required: true })} />
                            <br /><br />
                            <input placeholder="Discount Voucher..." defaultValue="" {...register("voucher")} />
                            <br /><br />
                            <input className="button mb-2" type="submit" value="Confirm Order" />
                        </form>
                    </div>

                    <div className="service-booking-main col-12 col-sm-7 col-md-8 col-lg-9">
                        <div>
                            <img src={singleBike?.img} alt="" className="mx-auto container img-fluid px-0" />
                            <hr />
                            <p>Price: <span className="fw-bold">BDT {singleBike?.price} Only.</span></p>
                            <p>{singleBike?.description}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;