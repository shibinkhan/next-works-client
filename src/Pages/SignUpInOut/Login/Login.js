import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Home/Header/Header';

const Login = () => {
    const { signIn, googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        signIn(data.email, data.password, location, history);
    };

    const handleGoogleSignin = () => {
        googleSignIn(location, history);
    };

    return (
        <div className="resister vh">
            <Header />
            <div className="d-flex justify-content-center">
                <div className="resister-main my-5 py-5">
                    <h1 className="fw-bold color my-3">Log In</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="inputR ps-2" type="email" placeholder="Email..." {...register("email", { required: true })} />
                        <input className="inputR ps-2" type="password" placeholder="Password..." {...register("password", { required: true })} />
                        <input className="button w-25" placeholder="" type="submit" value="Log In" />
                    </form>
                    <p className="grayText">Or</p>
                    <button className="button mb-2" onClick={handleGoogleSignin}>Sign In with Google</button>
                    <hr className='color' />
                    <p className="grayText">Don't Have Account?</p>
                    <NavLink className="" to="/signup"><button className="button w-25">Create Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;