/** @format */

import React, { ReactNode, SetStateAction } from 'react';
import CancelButton from './CancelButton';

const BlankModal = ({
  setOpenModal,
  onClose,
  bgColor = "white",
  icon,
  title,
  otherButtons = [],
  children
}) => {
  const close = () => {
    if (setOpenModal) {
      setOpenModal(false);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      data-testid="blank-modal"
      aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div
          className={`inline-block self-center align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full`}>
          <div className={`bg-${bgColor} px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
            <div className="sm:flex sm:items-start">
              {icon && (
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 sm:mx-0 sm:h-10 sm:w-10">
                  {icon}
                </div>
              )}
              <div className="mt-3 sm:mt-0 sm:ml-4 text-left flex-1">
                {title && (
                  <h3 className="text-lg text-center sm:text-left leading-6 font-medium text-gray-900">
                    {title}
                  </h3>
                )}
                <div className="mt-2 justify-center" data-testid="modal-children">
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse">
            {otherButtons?.map((button, index) => (
              <div key={index} data-testid={`blank-modal-button-${index}`}>
                {button}{' '}
              </div>
            ))}
            <CancelButton label="Close" className="mr-2" onClick={close} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlankModal;
