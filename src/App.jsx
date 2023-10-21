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

function App() {
  const count = useSelector((state) => state.counterSlice.value);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="flex px-10">
        <OfferAnnouncements />
        <CarouselComponent />
      </div>
      {/* <Roulette /> */}
    </Layout>
  );
}

export default App;
