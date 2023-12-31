import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/pexels-chan-walrus-958545.jpg'
import img2 from '../assets/pancakes-2020863_1280.jpg';
import img3 from '../assets/vegetables-752153_1920.jpg'

function Banner() {
  return (
    <div className='container align-items-center text-right h-25'>
    <Carousel className='container mt-4 '>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='mb-5 pb-5 text-white mt-0 '>
          <h3>CooKing is not just a job It's a Hobby</h3>
          <p className='mb-5 pb-5'>It is not necessery that everyone cook just for eating ,sometimes it can be anyones hobby to making speacial food </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption className='mb-5 pb-5 text-white mt-0'>
          <h3>Cooking is one types of Art</h3>
          <p className='mb-5 pb-5'>Basically we know that art is someones thinking ,or the beautiful imaginary that he imagine ,Cooking is some kinds of that things</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption className='mb-5 pb-5 text-white mt-0'>
          <h3>Make WHat you want to Eat</h3>
          <p className='mb-5 pb-5'>
            Eating food is human nature ,but to eat foods we must need to make it first so that we can eat our favourite foods
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;