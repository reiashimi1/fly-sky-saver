import rome from '../assets/images/rome.jpg';
import PrimaryButton from '../core/PrimaryButton';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice.js';
import API from '../utils/API.js';
import Carousel from 'react-multi-carousel';
import PersonalizedCard from './PersonalizedCard.jsx';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const OfferAnnouncements = () => {
  const [recommendations, setRecommendations] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSpinner('Loading data...'));
    API.get('/users/recommendations/personalized')
      .then((res) => {
        const { recomendations } = res.data;
        setRecommendations(recomendations);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => dispatch(hideSpinner()));
  }, []);

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      partialVisible={false}
      dotListClass="custom-dot-list-style">
      {recommendations?.length > 0 && recommendations.map((recommendation) => (
        <PersonalizedCard offer={recommendation} />
      ))}
    </Carousel>
  );
};

export default OfferAnnouncements;
