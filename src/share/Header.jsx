import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo1 from '../assets/ff0g_lr87_140724.jpg'
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import {  NavLink } from 'react-router-dom';
import '../share/Header.css'
const Header = () => {
    
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        
           <div>
            <Navbar  collapseOnSelect expand="lg" bg='light' variant="light">
                <Container>
                <Nav className=''>
                            <img style={{width:"30px "}} src={logo1} alt="" />
                            <h3 style={{color:"rosybrown"}}>Baking Queen</h3>
                        </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                     
                        <Nav className="mx-auto me-5">
  
                         <NavLink className={({ isActive }) => (isActive ? 'text-info' : ' ')} to="/">Home</NavLink>
                            {/* <NavLink className={({isActive})=>(isActive?'text-info':'')}> <Link className=' text-decoration-none text-secondary mt-2' to='/blog'> Blog</Link> </NavLink> */}
       </Nav>
       <Nav className='text-decoration-none '>
       <NavLink  className= {({ isActive }) => (isActive ? 'text-info' : ' ')} to="/blog">Blog</NavLink>
       </Nav>
                   <Nav>
                              {/* {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            } */}
  
{
    user && <div className="profile">
        <img style={{height:"30px",weight:"30px"}} className='img img-fluid rounded-circle mt-2 ms-4' src={user?.photoURL}></img>
    <div className="name">{user.displayname}</div>
    </div>
}

                          {user ?
                                <Button  className='ms-3' onClick={handleLogOut} style={{background:"	darkmagenta"}}>Logout</Button> :
                                <Link to="/login">
                                    <Button className='ms-3' style={{background:"	darkmagenta"}}>Login</Button>
                                </Link>
                            }
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      
    );
};

export default Header;