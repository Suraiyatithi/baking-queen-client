import React from 'react';
import award1 from '../assets/istockphoto-601907282-1024x1024.jpg';
import award2 from '../assets/istockphoto-1338321403-1024x1024.jpg';
import award3 from '../assets/istockphoto-476476726-1024x1024.jpg';
import Marquee from "react-fast-marquee";
import img7 from '../assets/never-stop-sport-success-successful-fitness-woman-hold-champion-cup-win-the-award-this-is-the-victory-congratulations-concept-female-competition-winner-happy-sportswoman-showing-her-trophy-2C8G597.jpg';
import img8 from '../assets/istockphoto-950492982-1024x1024.jpg';
import img9 from '../assets/istockphoto-174214096-1024x1024.jpg'


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
         <div className="row row-cols-sm-1 row-cols-lg-2 p-4 ms-4 me-4">
         <div className='col'>
           <div className="row row-cols-1 mt-3">
           <div className='col border border-warning d-flex'>
            <div className="">
                <img className='w-75' src={award1} alt="" />
            </div>
            <div className=" p-4">
                <h6>The National Award</h6>
                <p> our Honourable chef Aysha Begum Got this price in 2021 for the bestest cooked in that year.She
                     Just wown it by her bestest recipies.
                    .</p>
                    <p><small>Source:The Daily News 31 december,2021</small></p>


            </div>
           </div>
           <div className='col border border-warning d-flex mt-3'>
            <div className="">
                <img className='w-75' src={award2} alt="" />
            </div>
            <div className="p-4">
                <h6>The International award</h6>
                <p> our Honourable chef Jinia Smithi Got this price in 2020 for the bestest cooked in that year.She
                     Just wown it by her bestest recipies.
                    .</p>
                    <p><small>Source:The Daily News 27 february,2020</small></p>


            </div>
           </div>
           <div className='col border border-warning mt-3 d-flex'>
            <div className="">
                <img className='w-75 p-4' src={award3} alt="" />
            </div>
            <div className="p-4">
                <h6>The Best Chef Award</h6>
                <p> our Honourable chef Suraiya tithi Got this price in 2021 for the bestest cooked in that year.She
                     Just wown it by her bestest recipies.
                    .</p>
                    <p><small>Source:The Daily News 31 december,2019</small></p>


            </div>
           </div>
          
           </div>
          </div>
          <div className="col">
            <Marquee speed={95}>
         
         <img className='w-50' src={img7} alt="" />
         <img src={img8} alt="" />
         <img className='w-50' src={img9} alt="" />
         
            </Marquee>
          </div>
         </div>
            
        </div>
    );
};

export default Reward;