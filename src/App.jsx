import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Roulette from './components/Roulette';
import Layout from './layout/user/Layout.jsx';
import OfferAnnouncements from './components/OfferAnnouncements';
import MostPopularCarouselComponent from './components/MostPopularCarouselComponent';
import LatestCarouselComponent from './components/LatestCarouselComponent';
import SelectInput from './core/SelectInput';
import API from './utils/API.js';
import ProgressBar from './components/ProgressBar.jsx';
import { isArrayEmpty } from './utils/helpers.js';

function App() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    API.get('/users/airlines')
      .then((res) => {
        const { airlines } = res.data;
        const formattedOptions = airlines?.map((option) => {
          return { label: option.name, value: option.id };
        });
        setOptions(formattedOptions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!isArrayEmpty(options)) {
      setSelectedOption(options[0]);
    }
  }, [options]);

  return (
    <Layout>
      <div className="flex lg:flex-row flex-col items-center">
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
        <div className="flex flex-col align-items-center justify-content-center pt-10 z-9999  ">
          <SelectInput
            placeholder="Select airline"
            className="mb-40 mt-10"
            maxHeight={180}
            selectedOptionState={[selectedOption, setSelectedOption]}
            options={options}
          />
          <Roulette airlineId={selectedOption?.value} />
          <ProgressBar airlineId={selectedOption?.value} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
