import React, { useEffect, useMemo, useState } from 'react';
import { Line } from 'rc-progress';
import API from '../utils/API.js';
import { useNavigate } from 'react-router-dom';

const ProgressBar = ({ airlineId }) => {
  const navigate = useNavigate();
  const [loyaltyProgram, setLoyaltyProgram] = useState('');

  useEffect(() => {
    if (airlineId) {
      API.get(`/users/loyalty-programs/${airlineId}`)
        .then((res) => {
          const { loyaltyProgram } = res.data;
          setLoyaltyProgram(loyaltyProgram);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [airlineId]);

  const percentage = useMemo(
    () => (loyaltyProgram?.score * 100) / loyaltyProgram?.threshold,
    [loyaltyProgram]
  );

  return (
    <div className="mt-10 w-full">
      <div className="font-semibold text-xl">Check your loyalty</div>
      <Line percent={percentage} strokeWidth={4} strokeColor="#026e04" />
      <div>
        {percentage >= 100 ? (
          <p
            onClick={() => navigate('/offers')}
            className="flex justify-end text-indigo-800 cursor-pointer block px-3 rounded-md font-medium">
            Check your offers page!
          </p>
        ) : (
          <p className="flex justify-end text-indigo-800 block px-3 rounded-md font-medium">
            Score: {loyaltyProgram?.score} / {loyaltyProgram?.threshold}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
