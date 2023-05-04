import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';


const ChefLayout = () => {
    return (
        <div className='bg-dark'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;