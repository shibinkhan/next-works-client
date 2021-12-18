import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="py-5 my-5">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    // Private route
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>
            }
        ></Route>
    );
};

export default PrivateRoute;