import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        reset();
        const user = { email: data.email };
        fetch('https://secure-tundra-16355.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    alert('Admin Made Successfully.')
                };
            });
    };

    return (
        <div className="vh">
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-75 make-admin-email mb-3 ps-2" type="email" placeholder="New Admin's Email..." {...register("email", { required: true })} />
                <input className="w-75 make-admin-email mb-3 ps-2" type="password" placeholder="Password..." {...register("password", { required: true })} />
                <br />
                <input className="button addService" placeholder="" type="submit" value="Add Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;