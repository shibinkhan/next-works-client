import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllBikes from './Pages/Explore/AllBikes';
import BikeDetails from './Pages/Explore/BikeDetails';
import Login from './Pages/SignUpInOut/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/SignUpInOut/PrivateRoute/PrivateRoute';
import Resister from './Pages/SignUpInOut/Resister/Resister';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/explore">
              <AllBikes></AllBikes>
            </Route>

            <PrivateRoute path="/bike/:bikeId">
              <BikeDetails></BikeDetails>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Resister></Resister>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
