import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from '../share/Footer';
import Header from '../share/Header'
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaFileDownload } from 'react-icons/fa';
import bg6 from "../assets/istockphoto-1414285963-1024x1024.jpg"


const Blog = () => {
  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  };
    return (
      <div style={{backgroundImage:`url(${bg6})`}}>
        <Header></Header>
        <div className=" bg-secondary text-white">
        <div className="p-3 mx-auto">
          <button className='btn btn-danger text-white' onClick={printDocument}><FaFileDownload></FaFileDownload> Download</button>
        </div>
        </div>
  
        <div id="divToPrint" ref={inputRef} className=' text-center'>
           <h3 className='text-center text-white p-5'>Here is Our Daily Blog Page</h3> 
           <div className="m-4">

    <div className='row  row-cols-1 text-center'>
    <Card className='w-75 p-5 col mx-auto'>
      <Card.Body>
        <Card.Title className='mb-4'>Tell us the difference between unControlled and Controlled Components</Card.Title>
       
        <Card.Text>
         <div className="row row-cols-sm-1 row-cols-lg-2 justify-content-between">
          <div className="col">
          <Card.Subtitle className="mb-2 text-muted">Controlled Components</Card.Subtitle>
      
            <p>Basically controlled components refers to components that have their state and behaviour controlled by the parent components.The parents components has held over the from data.it does not maintain its internal state. </p>
          </div>
          <div className="col">
          <Card.Subtitle className="mb-2 text-muted">Uncontrolled Components</Card.Subtitle>
           
            <p>On the Otherhand the uncontrolled components refers to components that usually manage it's own state internally.The DOM itself control over the data.</p>
          </div>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='w-75 p-5 col mx-auto mt-4'>
      <Card.Body>
        <Card.Title className='mb-4'>How to validate React Props using prop Types</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Validate Reat props </Card.Subtitle>
        <Card.Text>
            <p>Since parent components can pass down any data as props to child components, we need to validate
               the data type to ensure the child gets what it expects.A parent component passes props down to 
               child components. And child components receive them. We can pass any data as props. Therefore, 
              we need a way to validate their data type so that the child component gets what they expect.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card className='w-75 p-5 col mx-auto mt-4'>
      <Card.Body>
        <Card.Title className='mb-4'>Tell us the difference between nodejs and expressjs</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
<div className="row row-cols-sm-1 row-cols-lg-2 justify-content-between">
  <div className="col">
  <Card.Subtitle className="mb-2 text-muted">Node.js</Card.Subtitle>
  <p>Node js is an Open source and Cross plateform runtime environment for executing javascript code
     outside of the browser.First of all you just need to remember that node.js is not a framework 
     and it's a programming language.We basically 
    use Node.js for the purpose of backend work as like building apis like web app or mobile app</p>
  </div>
  <div className="col">
  <Card.Subtitle className="mb-2 text-muted">Express.js</Card.Subtitle>
  <p>One the Otherside Express.js is a kind of framework that sits on top of Node.js's web server 
    functionally to simplify it's APIs and add helpful new features.It's makes it easier to organize
     your applications functionallywith middle ware and routing.It facilities the rendering of dynamic
      HTTP objects.</p>
  </div>
</div>
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card className='w-75 p-5 col mx-auto mt-4 mb-4'>
      <Card.Body>
        <Card.Title className='mb-4'>What is a Custom hook ,and why will you create a custom hook?</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Custom Hook</Card.Subtitle>
        <Card.Text>
         <p>A custom hook is a speacial javascript function which name start with 'use' and can be used to 
          call other hooks.It's a reusable function in javascript that a React js Software developer can use
           to add speacial and unique functionality to the react application .If there is a requirments
            to add a features,one can install a third party library and solve the problem .But What if there 
            is no such kind of library
           with hook rhat can be used.And Thuis problem Can be easily solve by using custom react js hooks.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
   
 </div>
 </div>
 <Footer></Footer>
 </div>
    );
};

export default Blog;