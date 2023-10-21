import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';

const AddButton = ({ label, onClick, ...props }) => {
  return (
    <div {...props}>
      <button
        className="flex flex-1 items-center justify-center rounded-md py-2 px-3 bg-blue-700 text-xs text-white font-medium hover:bg-blue-800 focus:outline-none transition duration-300"
        onClick={onClick}>
        {label}
        <PlusIcon className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default AddButton;
