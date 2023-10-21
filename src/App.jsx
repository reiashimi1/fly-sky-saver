import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';
import { showSpinner } from './redux/spinnerSlice';
import Button from '@mui/material/Button';
import DataTable from './core/DataTable.jsx';
import { API_URL } from './utils/API_URL.js';
import Roulette from './components/Roulette';
import AirAlbania from './assets/images/AirAlbania.svg';
import Layout from './layout/user/Layout.jsx';
import DescriptiveCard from './components/DescriptiveCard';
import OfferAnnouncements from './components/OfferAnnouncements';
import CarouselComponent from './components/Carousel';
import MostPopularCarouselComponent from './components/MostPopularCarouselComponent';

function App() {
  const count = useSelector((state) => state.counterSlice.value);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="flex flex-col px-10">
        <OfferAnnouncements />
        <div className="">
          <section
            style={{
              margin: '20px 0 20px 0'
            }}>
            <MostPopularCarouselComponent />
          </section>
        </div>
        <div className="">
          <section
            style={{
              margin: '20px 0 20px 0'
            }}>
            <MostPopularCarouselComponent />
          </section>
        </div>
      </div>
      {/* <Roulette /> */}
    </Layout>
  );
}

export default App;
