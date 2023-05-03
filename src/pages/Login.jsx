import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import bg from '../assets/istockphoto-1371318211-1024x1024.jpg'
import {  FaGithub, FaGoogle } from 'react-icons/fa';


const Login = () => {
    const { signIn,signInWithGoogle,githubLogIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }
    const handleGithubSignIn = () => {
        githubLogIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
        
        })
    }
    

    return (
     
       <Container className='w-50 text-white'>
      <h3 className='mt-5'>Please Login</h3>
      <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" required />
          </Form.Group>

          <Button style={{background:"	darkmagenta"}} type="submit">
              Login
          </Button>
          <br />
          <Form.Text className="text-white mb-5">
              Don't Have an Account? <Link className='text-white' to="/register">Register</Link>
          </Form.Text>
          <Form.Text>
          <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-warning mt-4 ps-5 pe-5 text-white"><FaGoogle></FaGoogle> Sign in with google</button>
                    </div>
          </Form.Text>
          <Form.Text>
          <div>
                    <button onClick={handleGithubSignIn} className="btn btn-secondary mt-3 mb-5 ps-5 pe-5 text-white"> <FaGithub></FaGithub> Sign in with Github</button>
                    </div>
          </Form.Text>
      </Form>
  </Container>
    );
};

export default Login;