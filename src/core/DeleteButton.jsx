import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';

const DeleteButton = ({ label, onClick, ...props }) => {
  return (
    <div {...props}>
      <button
        className="flex flex-1 items-center justify-center rounded-md py-2 px-3 bg-red-500 text-xs font-medium text-white hover:bg-red-700 focus:outline-none transition duration-300"
        onClick={onClick}>
        {label}
        <TrashIcon className="text-white w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default DeleteButton;
