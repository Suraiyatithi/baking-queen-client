import React from 'react';
import bgfooter from '../assets/ittalian.jpg'

const Footer = () => {
    return (
        <div style={{backgroundImage:`url(${bgfooter})`}}  className='bg-dark text-dark'>
            <h3 style={{color:"#900C3F "}} className='text-center p-4 m-4'>Contact Us for More details</h3>
            <div className='row row-cols-1 row-cols-lg-2 p-4 m-4 text-white'>
                <div className="col">
                    <h6>Contact Us</h6>
                    <p>Phone: ++1876018166</p>
                    <p>Email: <a href="surtithi@gmail.com">chefQueen@gmail.com</a> </p>
                    <p>To see our recipe in hd video visit:<a href="/www.youtube.com">youtube</a></p>
                   <p>To know more about us visit: <a href="/www.google.com">google.com</a></p> 
                </div>
                <div className="col">
                    <h6>Send Feedback</h6>
                    <input style={{width:"24rem",height:"8rem"}} type='text'></input>
                    <button className='ps-5 pe-5 btn btn-warning text-white mt-4' type="submit" >Submit Your Feedback</button>
                </div>
      
            </div>
        </div>
    );
};

export default Footer;