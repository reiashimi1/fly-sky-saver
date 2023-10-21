import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Roulette from './components/Roulette';
import Layout from './layout/user/Layout.jsx';
import OfferAnnouncements from './components/OfferAnnouncements';
import MostPopularCarouselComponent from './components/MostPopularCarouselComponent';
import LatestCarouselComponent from './components/LatestCarouselComponent';
import SelectInput from './core/SelectInput';

function App() {
  const [selectedOption, setSelectedOption] = useState();
  const count = useSelector((state) => state.counterSlice.value);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col px-10 w-3/5">
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
              <LatestCarouselComponent />
            </section>
          </div>
        </div>
        <div className="flex flex-col align-items-center justify-content-center pt-10">
          <SelectInput
            className="mb-40"
            style={{ zIndex: '3' }}
            selectedOptionState={[selectedOption, setSelectedOption]}
          />
          <Roulette />
        </div>
      </div>
    </Layout>
  );
}

export default App;
