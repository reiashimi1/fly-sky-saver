import React, { useState } from 'react';
import BlankModal from '../../core/BlankModal.jsx';
import SelectInput from '../../core/SelectInput.jsx';
import { offerTypes } from '../../utils/data/offerTypes.js';
import Input from '../../core/Input.jsx';

const AddOffer = ({ openModal, setOpenModal, onSuccess }) => {
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);
  const [startDate, setStartDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  return (
    <BlankModal
      title="Add new offer"
      setOpenModal={setOpenModal}
      onClose={() => setOpenModal(false)}>
      <div className="mt-5">
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
    </BlankModal>
  );
};

export default AddOffer;
