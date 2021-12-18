import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrders from './UsersDb/MyOrdrs/MyOrders';
import Payment from './UsersDb/Payment/Payment';
import Review from './UsersDb/Review/Review';
import MakeAdmin from './AdminsDb/MakeAdmin/MakeAdmin';
import ManageProducts from './AdminsDb/ManageProducts/ManageProducts';
import AddAProduct from './AdminsDb/AddAProduct/AddAProduct';
import ManageAllOrders from './AdminsDb/ManageAllOrders/ManageAllOrders';
import AdminRoute from './AdminRoute/AdminRoute';

const Dashboard = () => {
    const { logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div className="vh">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-3 dash-side-nav-main">
                        <br />
                        <NavLink className="dashboard-side-nav" to="/home">Home</NavLink>
                        {!admin ?
                            <div>
                                <NavLink className="dashboard-side-nav" to={`${url}`}>My Orders</NavLink>
                                <NavLink className="dashboard-side-nav" to={`${url}/payment`}>Payments</NavLink>
                                <NavLink className="dashboard-side-nav" to={`${url}/review`}>Review</NavLink>
                            </div> :
                            <div>
                                <NavLink className="dashboard-side-nav" to={`${url}`}>Manage All Orders</NavLink>
                                <NavLink className="dashboard-side-nav" to={`${url}/manageproducts`}>Manage Products</NavLink>
                                <NavLink className="dashboard-side-nav" to={`${url}/addaproduct`}>Add a Product</NavLink>
                                <NavLink className="dashboard-side-nav" to={`${url}/makeadmin`}>Make Admin</NavLink>
                            </div>
                        }
                        <button className="dashboard-side-nav dash-log-out w-100" onClick={logOut}>Log Out</button>
                    </div>

                    <div className="col-md-9">
                        <Switch>
                            <Route exact path={`${path}`}>
                                {!admin ? <MyOrders /> : <ManageAllOrders />}
                            </Route>

                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>

                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>

                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>

                            <AdminRoute path={`${path}/addaproduct`}>
                                <AddAProduct></AddAProduct>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;