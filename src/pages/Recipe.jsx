import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({recipe}) => {
    const{recipe_photo,recipe_name,ingridant,rating,recipe_description}=recipe;
    const handleClick = (event) => {
        toast("Recipe is added to your favourite list")
        event.currentTarget.disabled = true;
      
      };
    return (
        <div>
            <CardGroup>
      <Card className=' mb-5'>
  <div className=" row row-cols-1 row-cols-lg-2">
  <div className="col">
       <img  className='w-75 p-4 m-4' src={recipe_photo} />
       <Card.Title className='ps-5'>{recipe_name}</Card.Title>
       <Card.Text className='ps-5'>
            
            <Rating
  placeholderRating={rating}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/> <small>{rating}</small>

          </Card.Text>
       </div>
   <div className="col">
   <Card.Body className=''>
          {/* <Card.Title>{recipe_name}</Card.Title> */}
          <Card.Text>
           <div className="">
            <h6>Ingrident:</h6>
           <ul>
            
           {
                ingridant.map(items=><li>{items}</li>)
            }
           </ul>
            <p>
                {recipe_description}
            </p>
           </div>
          </Card.Text>
       
          
        </Card.Body>
        <Card.Footer>
        <button onClick={handleClick} className='btn btn-warning'>
           Add to Favouite</button>
        <ToastContainer></ToastContainer>
        </Card.Footer>
   </div>
  </div>
        
      </Card>
    
    </CardGroup>
        </div>
    );
};

export default Recipe;