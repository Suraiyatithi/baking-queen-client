import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {chef_name,chef_photo,experience,chef_description,likes,recipes,id}=chef;
    return (
        <div>
               <CardGroup>
      <Card>
        <Card.Img variant="top" src={chef_photo} />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
          {chef_description}
          </Card.Text>
          <Card.Text>
          <p className='ps-2'><small>{experience} Years of Experience</small></p>
           <div className="d-flex">
            <div className="ps-2 pe-5">
            <p>Number of recipes:{recipes.length}</p>
        
            </div>
            <div className="ps-5 ms-4">
            <p>{likes}</p> 
            </div>
           </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
       <Link className='text-decoration-none text-white' to={`/recipes/${id}`}> <button className='btn ps-5 pe-5 text-white'style={{background:"	darkmagenta"}}>View recipies</button></Link>
        </Card.Footer>
      </Card>
    </CardGroup>
 
        </div>
    );
};

export default Chef;