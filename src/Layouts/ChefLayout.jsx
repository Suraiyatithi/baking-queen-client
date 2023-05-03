import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';
import bg3 from '../assets/istockphoto-1414285963-1024x1024.jpg'

const ChefLayout = () => {
    return (
        <div style={{backgroundImage:`url(${bg3})`}} className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;