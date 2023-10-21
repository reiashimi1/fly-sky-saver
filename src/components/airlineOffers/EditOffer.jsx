import React, { useEffect, useState } from 'react';
import BlankModal from '../../core/BlankModal.jsx';
import SelectInput from '../../core/SelectInput.jsx';
import { offerTypes } from '../../utils/data/offerTypes.js';
import Input from '../../core/Input.jsx';
import CountrySelect from '../../core/CountrySelect.jsx';

const EditOffer = ({ openModal, setOpenModal, onSuccess, selectedOffer }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  // const [origin, setOrigin] = useState(null);
  // const [destination, setDestination] = useState(null);

  const error = false;

  useEffect(() => {
    setTitle(selectedOffer?.title);
    setDescription(selectedOffer?.description);
    setStartDate(selectedOffer?.startDate);
    setEndDate(selectedOffer?.endDate);
    const selectedType = offerTypes.find((offerType) => offerType.value === selectedOffer?.type);
    setType(selectedType);
    setAmount(selectedOffer?.amount);
  }, [selectedOffer]);

  return (
    <BlankModal title="Edit offer" setOpenModal={setOpenModal} onClose={() => setOpenModal(false)}>
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
              error ? 'focus:ring-red-100 border-red-300' : ''
            } mr-5 appearance-none relative block px-4 py-2 w-full 
                 placeholder-gray-500 placeholder:text-sm border text-gray-900 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100 sm:text-sm`}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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
              value={amount}
              handleInputChange={setAmount}
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
        {/*<div className="flex sm:flex-row flex-col justify-between space-x-5 mt-2">*/}
        {/*  <div className="w-full">*/}
        {/*    <div className="mb-2">Origin Country</div>*/}
        {/*    <CountrySelect country={origin} setCountry={setOrigin} placeholder="Select" />*/}
        {/*  </div>*/}
        {/*  <div className="w-full">*/}
        {/*      <div className="mb-2">Destination Country</div>*/}
        {/*    <CountrySelect country={destination} setCountry={setDestination} placeholder="Select" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </BlankModal>
  );
};

export default EditOffer;
