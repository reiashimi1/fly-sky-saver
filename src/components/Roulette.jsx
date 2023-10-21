import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import Confetti from 'react-confetti';
import PrimaryButton from '../core/PrimaryButton';

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [loadConfetti, setLoadConfetti] = useState(false);
  const [winningOption, setWinningOption] = useState();

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'red' } },
    { option: '2', style: { backgroundColor: 'yellow', textColor: 'black' } },
    { option: '3', style: { backgroundColor: 'white' } },
    { option: '4', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '5', style: { backgroundColor: 'pink' } },
    { option: '6' }
  ];

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  const handleSpinClick = () => {
    setLoadConfetti(false);
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      console.log('nr', newPrizeNumber);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div>
      {loadConfetti && (
        <Confetti
          width={screenSize.offsetWidth}
          height={screenSize.offsetHeight}
          tweenDuration={5000}
          run={loadConfetti}
          style={{ zIndex: '10' }}
        />
      )}
      <PrimaryButton className="mx-auto" label="Spin" onClick={handleSpinClick} />
      <Wheel
        outerBorderColor="gray"
        outerBorderWidth="2"
        innerBorderWidth="2"
        innerBorderColor="gray"
        radiusLineWidth="2"
        radiusLineColor="white"
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setLoadConfetti(true);
          setTimeout(() => {
            setLoadConfetti(false);
          }, 4000);
        }}
      />
      {winningOption && <p> winning option is: {prizeNumber}</p>}
    </div>
  );
};

export default Roulette;
