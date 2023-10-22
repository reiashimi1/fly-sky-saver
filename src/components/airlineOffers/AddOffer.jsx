import React, { useState } from 'react';
import BlankModal from '../../core/BlankModal.jsx';
import SelectInput from '../../core/SelectInput.jsx';
import { offerTypes } from '../../utils/data/offerTypes.js';
import Input from '../../core/Input.jsx';
// import CountrySelect from '../../core/CountrySelect.jsx';
import AddButton from '../../core/AddButton.jsx';
import { hideSpinner, showSpinner } from '../../redux/spinnerSlice.js';
import useValidate from '../../hooks/useValidate.js';
import { useDispatch } from 'react-redux';
import API from '../../utils/API.js';
import {Alert} from "@mui/material";

const AddOffer = ({ openModal, setOpenModal, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [discount, setDiscount] = useState(0);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const { clearError, getError, validateErrors } = useValidate();

  const addOffer = () => {
    const fields = { title, description, origin, destination, type: type.value, discount: discount/100, startDate, endDate };
    // const errors = validateErrors(fields, loginValidator);
    // if (errors) return;
    dispatch(showSpinner('Please wait...'));
    API.post('/airline/offers', {
      ...fields, imageUrl
    })
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

  return (
    <BlankModal
      title="Add new offer"
      setOpenModal={setOpenModal}
      onClose={() => setOpenModal(false)}
      otherButtons={[<AddButton key="Add" label="Add" onClick={addOffer} />]}>
      <div className="mt-5">
        <div className="w-full mt-1">
          <div>Title</div>
          <Input
            className="w-full mb-4"
            placeholder="Enter title"
            value={title}
            handleInputChange={setTitle}
          />
        </div>
        <div className="w-full mt-1">
          <div>Description</div>
          <textarea
            className={`${
              getError('description') ? 'focus:ring-red-100 border-red-300' : ''
            } mr-5 appearance-none relative block px-4 py-2 w-full 
                 placeholder-gray-500 placeholder:text-sm border text-gray-900 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 sm:text-sm`}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-between space-x-5 mt-3">
          <div className="w-full">
            <div className="mb-2">Origin Airport</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter origin"
              value={origin}
              handleInputChange={setOrigin}
            />
          </div>
          <div className="w-full">
            <div className="mb-2">Destination Airport</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter destination"
              value={destination}
              handleInputChange={setDestination}
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between space-x-4">
          <div className="w-full mt-1">
            <div>Offer Type</div>
            <SelectInput selectedOptionState={[type, setType]} options={offerTypes} />
          </div>
          <div className="w-full mt-1">
            <div>Amount</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter amount"
              value={discount}
              handleInputChange={setDiscount}
              type="number"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between space-x-4">
          <div className="w-full mt-1">
            <div>Start Date</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter start date"
              value={startDate}
              handleInputChange={setStartDate}
              type="date"
            />
          </div>
          <div className="w-full mt-1">
            <div>End Date</div>
            <Input
              className="w-full mb-4"
              placeholder="Enter end date"
              value={endDate}
              handleInputChange={setEndDate}
              type="date"
            />
          </div>
        </div>
        <div className="w-full mt-1">
          <div>Image URL</div>
          <Input
            className="w-full mb-4"
            placeholder="Enter image URL"
            value={imageUrl}
            handleInputChange={setImageUrl}
          />
        </div>
      </div>
      {error && <Alert severity="error">Something went wrong</Alert>}
    </BlankModal>
  );
};

export default AddOffer;
