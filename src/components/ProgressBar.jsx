import React, { useEffect, useMemo, useState } from 'react';
import { Line } from 'rc-progress';
import API from '../utils/API.js';
import {logout} from "../redux/authSlice.js";

const ProgressBar = ({ airlineId }) => {
  const [loyaltyProgram, setLoyaltyProgram] = useState();

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
    <div className="mt-10">
      <div className="font-semibold text-xl">Check your loyalty</div>
      <Line percent={percentage} strokeWidth={4} strokeColor="#026e04" />
        <p
            className="flex justify-end text-indigo-800 hover:text-white block px-3 rounded-md font-medium">
            Score: {loyaltyProgram?.score} / {loyaltyProgram?.threshold}
        </p>
    </div>
  );
};

export default ProgressBar;
