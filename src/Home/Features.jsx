import React from 'react';
import chef from '../assets/PikPng.com_chef-png_489567.png';
import beef from '../assets/istockphoto-1457374980-1024x1024.jpg';
import chicken from '../assets/istockphoto-1254720533-1024x1024.jpg';
import kacchi from '../assets/istockphoto-1152493500-1024x1024.jpg';
import kichuri from '../assets/pexels-ella-olsson-1640774.jpg';
import Marquee from "react-fast-marquee";
import LazyLoad from 'react-lazyload';

const Features = () => { 
    return (
        <div className='m-5 p-5'>
            <h3 style={{color:"#900C3F "}}className='text-center'>The Bengalian Food</h3>
          <div className="text-center">
          <small className=''>
                Our Chef will provide you the Best food you have ever eat.We can <br /> surely said that you will definatly love  our services and food quality.World bestest Chef is here to cook for you and the dises you love most
            </small>
          </div>

           <div className="row  ">
           <div className="col-sm-12 col-lg-6  pt-5">
              <div className="row row-cols-2">
              <div className="mt-5 text-center mb-2">
                    <img className='w-100 rounded-circle' src={kichuri} alt="" />
                   <p className='pt-2'> <small>Frits salate</small></p>
                </div>
                <div className="mt-5 text-center mb-2">
                    <img className='w-100 rounded-circle' src={kacchi} alt="" />
                   <p className='pt-2'> <small>kacchi</small></p>
                </div>
                <div className="text-center">
                    <img className='w-100 shadow-lg rounded-circle' src={beef} alt="" />
                   <p className='pt-2'> <small>Beef Biriyani</small></p>
                </div>
                <div className="text-center">
                <img className='w-100 rounded-circle' src={chicken} alt="" />
                   <p className='pt-2'> <small>Chicken Biriani</small></p>
                </div>
              </div>
            
            </div>
            <div className="col-sm-6 col-lg-4  mt-5">
            <LazyLoad height={200} once >
                               
        
                <img className='w-75 ms-5' src={chef} alt="" />
                </LazyLoad>
            </div>
            <div className="col-sm-6  col-lg-2 mt-5 pt-5 align-items-center ">
         <div className="d-flex">
          <div  style={{background:"#900C3F"}} className="border rounded shadow-lg"> <br />0 </div>
        <div>
         <h4>Cook 
            <br />AnyThings 
            <br />With Experts
          </h4>
          <p style={{color:"#900C3F"}} className='mt-4'>
            out chef list:
          </p>
          <ul className='text-warning'>
          <li>Suraiya Tithi</li>
            <li>Aysha Rahman</li>
            <li>Kibita Begum</li>
            <li>Johnia Sithi</li>
            <li>Jinia Doly</li>
            <li>Maria Rodriguze</li>
            <li>Suraiya Tithi</li>
            <li>Aysha Rahman</li>
            <li>Kibita Begum</li>
          </ul>
          </div>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Features;