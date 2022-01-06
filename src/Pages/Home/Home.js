import React from 'react';
import Header from './Header/Header';
import TopBanner from './TopBanner/TopBanner';
import './Home.css';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Faq from './Faq/Faq';
import SocialMedia from './SocialMedia/SocialMedia';

const Home = () => {
    return (
        <div className="vh">
            <Header />
            <TopBanner />
            <Products />
            <Reviews />
        </div>
    );
};

export default Home;