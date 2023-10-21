import React from 'react';
import { PencilIcon } from '@heroicons/react/solid';

const EditButton = ({ label, onClick, ...props }) => {
  return (
    <div {...props}>
      <button
        className="flex flex-1 items-center justify-center rounded-md py-2 px-3 bg-slate-300 text-xs font-medium hover:bg-slate-400 focus:outline-none transition duration-300"
        onClick={onClick}>
        {label}
        <PencilIcon className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
};

export default EditButton;
