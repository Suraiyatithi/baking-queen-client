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
      <Card style={{height:"49rem"}}>
        <Card.Img variant="top" src={recipe_photo} />
        <Card.Body>
          <Card.Title>{recipe_name}</Card.Title>
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
          <Card.Text>
            
            <Rating
  placeholderRating={rating}
  emptySymbol={<FaRegStar/>}
  placeholderSymbol={<FaStar className='text-warning'></FaStar>}
  fullSymbol={<FaStar/>}
/> <small>{rating}</small>

          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
        <button onClick={handleClick} className='btn btn-warning'>Add to Favouite</button>
        <ToastContainer></ToastContainer>
        </Card.Footer>
        
      </Card>
    
    </CardGroup>
        </div>
    );
};

export default Recipe;