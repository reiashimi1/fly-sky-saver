import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCards from './CarouselCards';
import WizzAir from '../assets/images/WizzAir.png';
import AirAlbania from '../assets/images/AirAlbania.svg';
import Alitalia from '../assets/images/Alitalia.svg';

const LatestCarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div style={{ width: '600px' }}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
        <CarouselCards
          imageSrc={WizzAir}
          date="3 shkurt "
          title="Latest Wizz news"
          description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
        <CarouselCards
          imageSrc={AirAlbania}
          date="3 shkurt "
          title="Latest Wizz news"
          description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
        <CarouselCards
          imageSrc={Alitalia}
          date="3 shkurt "
          title="Latest Wizz news"
          description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
        <CarouselCards
          imageSrc={Alitalia}
          date="3 shkurt "
          title="Latest Wizz news"
          description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
      </Carousel>
    </div>
  );
};
export default LatestCarouselComponent;
