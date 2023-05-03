import React from 'react';
import errorimg from '../assets/5203299.jpg'

const Error = () => {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center row">
                <div class=" col-md-6">
                    <img src={errorimg} alt=""
                        class="img-fluid"/>
                </div>
                <div class=" col-md-6 mt-5">
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p class="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <a href="index.html" class="btn btn-primary">Go Home</a>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Error;