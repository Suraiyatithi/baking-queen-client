import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, getAuth, updateProfile, } from 'firebase/auth';
import app from '../firebase/firebase.config';


const Register = () => {
    const [error, setError] = useState('');
    const[success,setsuccess]=useState()
    // const [displayName, setDisplayName] = useState("");

    const { createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        setError('')
        setsuccess('')
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);



if (password.length < 6) {
   setError('!!!!password must be 6 characters or longer')
   return
}
      
     

         createUser(email, password)
        // createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                event.target.reset();
                setError('')
                setsuccess("Successfully Register")
                //  updateUserData(result.user,result.user.displayName,result.user.photoURl);
               
     })
            .catch(error => {
                console.log(error);
                setError(error);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }
    // const updateUserData = (user, name,url) => {
    //     updateProfile(user, {
    //         displayName:name,
    //        photoURL:url,
    //      })
    //          .then(() => {
    //              console.log('user name updated')
    //          })
    //          .catch(error => {
    //              console.log(error);
    //          })
       
    // }
    // const updateProfile = () => {
    //     const user = auth.currentUser;
    //     if (user) {
    //       user
    //         .updateProfile({
    //           displayName: displayName,
    //         })
    //         .then(() => {
    //           console.log('Update successful')
    //         })
    //         .catch((error) => {
    //           // An error occurred
    //         });
    //     }
    //   };
      
    const handlechange=event=>{
    
        if(event.target.value.trim().length ==0)
        {
           setError('!!!!!!!Please Fill All the Input Value')
           return
        }}
  const  handleShow=()=>{
    if(success){
       
    toast('Successfully Register to this site')}
  }

    return (
        <Container className='w-50 text-white'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister} name='From'>
                <Form.Group className="mb-3" controlId="formBasicname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicphoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handlechange} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlechange} type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
              <Button onSubmit={handleShow} style={{background:"	darkmagenta"}} disabled={!accepted} type="submit">
                Register
        
                </Button>
                <ToastContainer></ToastContainer>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
               
                <Form.Text className="">
              <h6 className='text-error text-danger p-2'>{error}</h6>
                </Form.Text>
                    
                <Form.Text className="">
              <h6 className=' text-success p-2'>{success}</h6>
                </Form.Text>
            </Form>
        </Container>
    );
}

export default Register;