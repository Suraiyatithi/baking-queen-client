import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



const Blog = () => {
    return (
        <div>
           <h3>Here is Our Daily Blog Page</h3> 
           <div className="">

    <div className='row row-cols-md-1 row-cols-lg-2 row-cols-sm-1 gap-2'>
    <Card className='col p-4'>
      <Card.Body>
        <Card.Title>Tell us the difference between unControl and Control Components</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='col p-4'>
      <Card.Body>
        <Card.Title>How to validate React Props using prop Types</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className='col'>
      <Card.Body>
        <Card.Title>Tell us the difference between nodejs and expressjs</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card className='col'>
      <Card.Body>
        <Card.Title>What is a Custom hook ,and why will you create a custom hook?</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
   
 </div>
 </div>
    );
};

export default Blog;