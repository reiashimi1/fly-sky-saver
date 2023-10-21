import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import Confetti from 'react-confetti';

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [loadConfetti, setLoadConfetti] = useState(false);

  const data = [
    { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
    { option: '1', style: { backgroundColor: 'red' } },
    { option: '2', style: { backgroundColor: 'yellow', textColor: 'black' } },
    { option: '3', style: { backgroundColor: 'white' } },
    { option: '4', style: { backgroundColor: 'blue', textColor: 'black' } },
    { option: '5', style: { backgroundColor: 'pink' } },
    { option: '6' }
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <Confetti width={500} height={500} />
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
          setLoadConfetti(true);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};

export default Roulette;
