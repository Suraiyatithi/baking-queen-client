import React from 'react';
import { useLoaderData } from 'react-router-dom';
 import { Container } from 'react-bootstrap';
const Recipes = () => {
    const recipeInfo=useLoaderData();
    const {chef_name,chef_photo,experience,chef_description,likes,recipes}=recipeInfo;
    return (
        <div>
            <h3 className='text-white text-center'>More about The Chef</h3>
            <Container className='bg-white'>
              <div className="row row-cols-lg-2 row-cols-sm-1 p-5 m-5">
              <div className="col">
                <h4>Hey,This is {chef_name}</h4>
                <p>{chef_description}
                </p>
                <p><small>{experience} years of experience in this field</small></p>
                <p>Number of recipes : {recipes.length}</p>
                <p>{likes}</p>

              </div>
                <div className="col">
                    <img className=' img img-fluid w-75' src={chef_photo} alt="" />
                </div>
              </div>
            </Container>
         
        </div>
    );
};

export default Recipes;