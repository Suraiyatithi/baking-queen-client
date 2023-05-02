import React from 'react';
import Header from '../share/Header';
import { Outlet } from 'react-router-dom';
import bg from '../assets/meat-1155132_1280.jpg'

const LoginLayOUt = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}} className='img img-fluid' >
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayOUt;