import React from 'react';
import Header from '../share/Header';
import Footer from '../share/Footer';
import Banner from '../Home/Banner';
import Features from '../Home/Features';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Header></Header> 
           <Banner></Banner>
           <Features></Features>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;