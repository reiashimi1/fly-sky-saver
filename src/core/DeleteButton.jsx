import React from 'react';

const DeleteButton = ({ label, onClick, ...props }) => {
  return (
    <div {...props}>
      <button
        data-testid="delete-button"
        className="flex flex-1 items-center justify-center border rounded-md py-2 px-4 bg-red-500 text-xs font-medium text-white hover:bg-red-700 focus:outline-none transition duration-300"
        onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default DeleteButton;