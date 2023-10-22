import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';

const AddButton = ({ label, onClick, ...props }) => {
  return (
    <div {...props}>
      <button
        className="flex flex-1 items-center justify-center rounded-md py-2 px-3 bg-green-700 text-xs text-white font-medium hover:bg-green-800 focus:outline-none transition duration-300"
        onClick={onClick}>
        <CheckIcon className="w-5 h-5 mr-2" />
        {label}
      </button>
    </div>
  );
};

export default AddButton;
