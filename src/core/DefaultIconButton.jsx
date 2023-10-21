import React from 'react';

const DefaultIconButton = ({ onClick, title, icon, disabled = false, ...props }) => {
  return (
    <div {...props}>
      <button
        data-testid="default-icon-button"
        className="border-1 rounded-md h-9 w-9 m-1 p-2 bg-white text-xs font-normal hover:bg-gray-100 focus:outline-none disabled:opacity-50 transition duration-300"
        onClick={onClick}
        disabled={disabled}
        type="button"
        title={title}>
        {icon}
      </button>
    </div>
  );
};

export default DefaultIconButton;