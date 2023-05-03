import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../assets/ff0g_lr87_140724.jpg'

const Header = () => {
    return (
        
           <div>
            <Navbar  collapseOnSelect expand="lg" bg='light' variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className=''>
                            <img style={{width:"30px "}} src={logo1} alt="" />
                            <h3 style={{color:"rosybrown"}}>Baking Queen</h3>
                        </Nav>
                        <Nav className="mx-auto me-5 pe-5">
                            <Link className='text-decoration-none mt-2 text-secondary pe-4' to="/">Home</Link>
                            <Nav> <Link className='text-decoration-none text-secondary mt-2' to='/blog'>Blog</Link> </Nav>
                              {/* {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            } */}

                          
                              <Button className='ms-4 me-4 btn 'style={{background:"	darkmagenta"}}>Logout</Button> 
                                <Link to="/login">
                                    <Button className='btn' style={{background:"	darkmagenta"}}>Login</Button>
                                </Link>
                           
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      
    );
};

export default Header;