import React from 'react';
import { useLoaderData } from 'react-router-dom';
 import { Container } from 'react-bootstrap';
  import {BiLike} from 'react-icons/bi'

import Recipe from './Recipe';
const Recipes = () => {
    const recipeInfo=useLoaderData();
    const {chef_name,chef_photo,experience,chef_description,likes,recipes,id}=recipeInfo;
    return (
        <div>
            <h3 className=' text-center mt-5 pt-5 text-warning'>More about The Chef</h3>
            <Container className='bg-white rounded shadow-lg'>
              <div className="row row-cols-sm-1 row-cols-lg-2  p-5 m-5">
              <div className="col align-items-center">
                <h4>Hey,This is {chef_name}</h4>
                <p>{chef_description}
                </p>
                <p><small>{experience} years of experience in this field</small></p>
                <p>Number of recipes : {recipes.length}</p>
                <p><BiLike/> {likes}</p>

              </div>
                <div className="col">
                    <img className=' img img-fluid w-75' src={chef_photo} alt="" />
                </div>
              </div>
            </Container>
            <div className="">
            <h3 className='text-warning text-center mt-5 mb-5'>Here are Some of my Recipes</h3>
                <div className="row row-cols-1  shadow-lg p-5 m-4 mb-5">
            {
                recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
            </div>
            </div>
         
        </div>
    );
};

export default Recipes;