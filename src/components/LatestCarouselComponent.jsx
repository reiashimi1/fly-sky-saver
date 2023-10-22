import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCards from './CarouselCards';
import WizzAir from '../assets/images/WizzAir.png';
import AirAlbania from '../assets/images/AirAlbania.svg';
import Alitalia from '../assets/images/Alitalia.svg';
import { useDispatch } from 'react-redux';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice.js';
import API from '../utils/API.js';
import { dateFormatter } from '../utils/helpers.js';

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

const LatestCarouselComponent = () => {
  const [latestOffers, setLatestOffers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSpinner('Loading data...'));
    API.get('/users/recommendations/latest')
      .then((res) => {
        const { articles } = res.data;
        setLatestOffers(articles);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => dispatch(hideSpinner()));
  }, []);

  return (
    <div style={{ height: '200px', width: '650px' }}>
      <h1 className="font-bold text-xxl text-left" style={{ color: 'purple' }}>
        LATEST BOOKINGS
      </h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style">
        {latestOffers.map((latestOffer) => (
          <CarouselCards
            key={latestOffer.id}
            imageSrc={latestOffer.imageUrl}
            date={dateFormatter(latestOffer?.createdAt)}
            title={latestOffer.title}
            description={latestOffer.description}
            onClick={() => console.log('testing')}
          />
        ))}
        {/*<CarouselCards*/}
        {/*  imageSrc={WizzAir}*/}
        {/*  date="3 shkurt "*/}
        {/*  title="Latest Wizz news"*/}
        {/*  description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"*/}
        {/*  onClick={() => console.log('testing')}*/}
        {/*/>*/}
        {/*<CarouselCards*/}
        {/*  imageSrc={AirAlbania}*/}
        {/*  date="3 shkurt "*/}
        {/*  title="Latest Wizz news"*/}
        {/*  description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"*/}
        {/*  onClick={() => console.log('testing')}*/}
        {/*/>*/}
        {/*<CarouselCards*/}
        {/*  imageSrc={Alitalia}*/}
        {/*  date="3 shkurt "*/}
        {/*  title="Latest Wizz news"*/}
        {/*  description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"*/}
        {/*  onClick={() => console.log('testing')}*/}
        {/*/>*/}
        {/*<CarouselCards*/}
        {/*  imageSrc={Alitalia}*/}
        {/*  date="3 shkurt "*/}
        {/*  title="Latest Wizz news"*/}
        {/*  description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"*/}
        {/*  onClick={() => console.log('testing')}*/}
        {/*/>*/}
      </Carousel>
    </div>
  );
};
export default LatestCarouselComponent;
