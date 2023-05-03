import React from 'react';
import bgfooter from '../assets/ittalian.jpg'

const Footer = () => {
    return (
        <div style={{backgroundImage:`url(${bgfooter})`}}  className='bg-dark text-dark'>
            <h3 className='text-center p-4 m-4'>Contact Us for More details</h3>
            <div className='row row-cols-1 row-cols-lg-2 p-4 m-4'>
                <div className="col">
                    <h6>Contact Us</h6>
                    <p>Phone: ++1876018166</p>
                    <p>Email: <a href="surtithi@gmail.com">surtithy@gmail.com</a> </p>
                    <p><a href="/www.youtube.com">youtube</a></p>
                   <p><a href="/www.google.com">google.com</a></p> 
                </div>
                <div className="col">
                    <h6>Send Feedback</h6>
                    <input style={{width:"200px",height:"60px"}} type='text'></input>
                </div>
      
            </div>
        </div>
    );
};

export default Footer;