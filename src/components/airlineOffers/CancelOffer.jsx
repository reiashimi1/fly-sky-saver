import React, { useEffect, useState } from 'react';
import CancelModal from '../../core/CancelModal.jsx';
import Input from '../../core/Input.jsx';
import SelectInput from '../../core/SelectInput.jsx';
import { offerTypes } from '../../utils/data/offerTypes.js';
import { dateFormatter } from '../../utils/helpers.js';
import { hideSpinner, showSpinner } from '../../redux/spinnerSlice.js';
import API from '../../utils/API.js';
import {useDispatch} from "react-redux";

const CancelOffer = ({ selectedOffer, setOpenModal, onSuccess }) => {
  const [type, setType] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const cancelOffer = () => {
    dispatch(showSpinner('Please wait...'));
    API.delete(`/airline/offers/${selectedOffer.id}`)
      .then(() => {
        onSuccess();
        setOpenModal(false);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => dispatch(hideSpinner()));
  };

  useEffect(() => {
    const selectedType = offerTypes.find((offerType) => offerType.value === selectedOffer?.type);
    setType(selectedType);
  }, [selectedOffer]);

  return (
    <CancelModal
      title="Are you sure you want to cancel this offer?"
      setOpenModal={setOpenModal}
      onCancel={cancelOffer}
      cancelButtonLabel="Confirm cancellation">
      <div className="mt-5">
        <div className="w-full mt-1">
          <div>Title</div>
          <Input
            className="w-full mb-4"
            placeholder="Enter title"
            value={selectedOffer?.title}
            disabled
          />
        </div>
        <div className="w-full mt-1">
          <div>Description</div>
          <textarea
            className={`${
              error ? 'focus:ring-red-100 border-red-300' : ''
            } mr-5 appearance-none relative block px-4 py-2 w-full 
                 placeholder-gray-500 placeholder:text-sm border text-gray-900 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 sm:text-sm`}
            placeholder="Enter description"
            value={selectedOffer?.description}
            disabled
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-between space-x-5 mt-3">
          <div className="w-full">
            <div className="mb-2">Origin Airport</div>
            <Input className="w-full mb-4" placeholder="Enter origin" value={origin} disabled />
          </div>
          <div className="w-full">
            <div className="mb-2">Destination Airport</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter destination"
              value={selectedOffer?.destination}
              disabled
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between space-x-4 mt-3">
          <div className="w-full mt-1">
            <div>Offer Type</div>
            <SelectInput selectedOptionState={[type, setType]} options={offerTypes} disabled />
          </div>
          <div className="w-full mt-1">
            <div>discount</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter discount"
              value={selectedOffer?.discount * 100}
              type="number"
              disabled
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between space-x-4">
          <div className="w-full mt-1">
            <div>Start Date</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter start date"
              value={dateFormatter(selectedOffer?.startDate, 'yyyy-MM-DD')}
              type="date"
              disabled
            />
          </div>
          <div className="w-full mt-1">
            <div>End Date</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter end date"
              value={dateFormatter(selectedOffer?.endDate, 'yyyy-MM-DD')}
              type="date"
              disabled
            />
          </div>
        </div>
      </div>
    </CancelModal>
  );
};

export default CancelOffer;
