import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';
import bg from '../assets/roasted2.jpg'
import Footer from '../share/Footer';

const LoginLayOUt = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}} className='img img-fluid' >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayOUt;