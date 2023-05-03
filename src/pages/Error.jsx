import React from 'react';
import errorimg from '../assets/5203299.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center row">
                <div class=" col-md-6 col-sm-12">
                    <img src={errorimg} alt=""
                        class="img-fluid w-75"/>
                </div>
                <div class=" col-md-6 col-sm-12 mt-5 align-items-center pt-5">
                    <p class="fs-3"> <span class="text-danger mt-5">Opps!</span> Page not found.</p>
                    <p class="lead mt-2">
                        The page you’re looking for doesn’t exist.
                    </p>
                   <Link to='/'> <button class="btn btn-primary mt-4">Go Home</button></Link>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Error;