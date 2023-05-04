import React from 'react';
import award1 from '../assets/istockphoto-601907282-1024x1024.jpg';
import award2 from '../assets/istockphoto-1338321403-1024x1024.jpg';
import award3 from '../assets/istockphoto-476476726-1024x1024.jpg';

const Reward = () => {
    return (
        <div>
            <h3  className='text-center' style={{color:"#900C3F "}} >Our Achievements</h3>
            <p className='text-center'>
                <small>One of our most significant achievements was winning the prestigious <br /> James Beard
                 Award for Best Chef in the Northeast region. This honor was a testament to our commitment to 
                 using the <br /> freshest, highest quality ingredients and preparing them with innovative techniques 
                 that showcase their natural flavors.</small>
            </p>
         <div className="row row-cols-sm-1 row-cols-lg-2">
         <div className='col'>
           <div className="row row-cols-1">
           <div className='col d-flex'>
            <div className="">
                <img src="" alt="" />
            </div>
            <div className="">


            </div>
           </div>
          
           </div>
          </div>
          <div className=""></div>
         </div>
            
        </div>
    );
};

export default Reward;