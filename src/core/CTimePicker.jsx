import React from 'react';

const CTimePicker = ({ value, disabled, handleInputChange, error, ...props }) => {
  return (
    <div {...props}>
      <input
        type="time"
        step="2"
        className={`${
          error ? 'focus:ring-red-100 border-red-300' : ''
        } flex block border-1 border-gray-300 shadow-sm rounded-md w-full text-gray-500 text-sm leading-5 font-normal px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-100`}
        value={value}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        disabled={disabled}
      />
      {error && <label className="text-xs text-red-500">{error}</label>}
    </div>
  );
};

export default CTimePicker;