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
      <div className="flex xl:flex-row flex-col">
        <div className="flex flex-col px-10 pb-5 w-3/5">
          <OfferAnnouncements />
          <div className="">
            <section
              style={{
                margin: '20px 0 20px 0'
              }}>
              <MostPopularCarouselComponent />
            </section>
          </div>
          <div className="my-24">
            <section
              style={{
                margin: '40px 0 40px 0'
              }}>
              <LatestCarouselComponent />
            </section>
          </div>
        </div>
        <div className="flex flex-col align-items-center justify-content-center ml-10 pt-16 w-1/4">
          <div className="font-semibold text-indigo-800 pb-3 pl-3">Airline Provider</div>
          <SelectInput
            placeholder="Select airline"
            className="mb-40"
            maxHeight={180}
            selectedOptionState={[selectedOption, setSelectedOption]}
            options={options}
          />
          <div className="flex flex-col items-center w-full">
            <Roulette airlineId={selectedOption?.value} />
            <ProgressBar airlineId={selectedOption?.value} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
