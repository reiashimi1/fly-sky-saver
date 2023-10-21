import React from 'react';
import DeleteButton from './DeleteButton';
import { X } from 'tabler-icons-react';
import PrimaryButton from './PrimaryButton';


const CancelModal = ({
  setOpenModal,
  title,
  children,
  cancelButtonLabel,
  onCancel,
  isLoading = false
}) => {

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      data-testid="cancel-modal"
      aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block self-center align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <X
					className="w-7 h-7 cursor-pointer text-white"
					onClick={() => setOpenModal(false)}
				/>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                <div className="mt-2">
                  <div className="text-sm text-gray-500">{children}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse">
            <PrimaryButton
              label='Continue'
              onClick={() => {
                onCancel();
                setOpenModal(false);
              }}
              className="mx-2"
            />
            <DeleteButton
              label='Back'
              onClick={() => setOpenModal(false)}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;