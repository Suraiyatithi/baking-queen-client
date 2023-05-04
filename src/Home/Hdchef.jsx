import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const Hdchef = () => {
    const chefs=useLoaderData();
    return (
        <div>
            <h3 style={{color:"#900C3F "}} className='text-center mt-5 mb-5'>Let's introduce Ours Chef Queens</h3>
            <div className="row row-cols-sm-1 row-cols-lg-3 row-cols-md-2 m-5 p-3">
            {
                chefs.map(chef=><Chef key={chef.id} chef={chef}></Chef>)
            }
            </div>
        </div>
    );
};

export default Hdchef;