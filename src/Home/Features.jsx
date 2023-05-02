import React from 'react';
import chef from '../assets/PikPng.com_chef-png_489567.png';
import beef from '../assets/istockphoto-1457374980-1024x1024.jpg';
import chicken from '../assets/istockphoto-1254720533-1024x1024.jpg';
import kacchi from '../assets/istockphoto-1152493500-1024x1024.jpg';
import kichuri from '../assets/pexels-ella-olsson-1640774.jpg';

const Features = () => {
    return (
        <div className='m-5 p-5'>
            <h3 style={{background:"rosybrown"}} className='text-center p-2'>The Bengalian Food</h3>

           <div className="row  ">
           <div className="col-sm-12 col-lg-6 mt-5 pt-5">
              <div className="row row-cols-2">
              <div className="mt-5 text-center mb-5">
                    <img className='w-75 rounded-circle' src={kichuri} alt="" />
                   <p className='pt-2'> <small>Frits salate</small></p>
                </div>
                <div className="mt-5 text-center mb-5">
                    <img className='w-75 rounded-circle' src={kacchi} alt="" />
                   <p className='pt-2'> <small>kacchi</small></p>
                </div>
                <div className="text-center">
                    <img className='w-75 rounded-circle' src={beef} alt="" />
                   <p className='pt-2'> <small>Beef Biriyani</small></p>
                </div>
                <div className="text-center">
                <img className='w-75 rounded-circle' src={chicken} alt="" />
                   <p className='pt-2'> <small>Chicken Biriani</small></p>
                </div>
              </div>
            
            </div>
            <div className="col-sm-6 col-lg-4  mt-5">
                <img className='w-75 ms-5' src={chef} alt="" />
            </div>
            <div className="col-sm-6 col-lg-2 mt-5 pt-5 align-items-center ">
            <h2 style={{color:"		darkmagenta"}} className='mt-5 pt-5  lh-lg'>
            Cook <br />
                AnyThings With <br /> the Expert
            </h2>
            </div>
           </div>
        </div>
    );
};

export default Features;