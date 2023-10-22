import React, { useEffect, useState } from 'react';
import Layout from '../layout/airline/Layout.jsx';
import { useDispatch } from 'react-redux';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice.js';
import API from '../utils/API.js';
import DataTable from '../core/DataTable.jsx';
import { dateFormatter, isArrayEmpty } from '../utils/helpers.js';
import AddButton from '../core/AddButton.jsx';
import { Alert } from '@mui/material';
import Input from '../core/Input.jsx';

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 100
  },
  {
    field: 'Type',
    headerName: 'Type',
    width: 100,
    valueGetter: (params) => params.row.type.toUpperCase()
  },
  {
    field: 'discount',
    headerName: 'Amount',
    type: 'number',
    width: 100,
    valueGetter: (params) => params.row.discount + ' %'
  },
  {
    field: 'startDate',
    headerName: 'Start date',
    width: 100,
    valueGetter: (params) => dateFormatter(params.row.startDate)
  },
  {
    field: 'endDate',
    headerName: 'End date',
    width: 100,
    valueGetter: (params) => dateFormatter(params.row.endDate)
  },
  {
    field: 'travel',
    headerName: 'Travel',
    width: 120,
    valueGetter: (params) => params.row.origin + ' - ' + params.row.destination
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 400
  }
];

const AirlineLoyaltyPage = () => {
  const [offers, setOffers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [updated, setUpdated] = useState(0);
  const [threshold, setThreshold] = useState(0);
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const createRoulette = () => {
    if (isArrayEmpty(selectedRows)) {
      setError(true);
    }
    dispatch(showSpinner('Please wait...'));
    const offerIds = selectedRows.map((row) => row.id);

    API.post('/airline/loyalty-programs', {
      title,
      threshold,
      description,
      startDate,
      endDate,
      offerIds: [offerIds[0]],
      thresholdType: "points"
    })
      .then(() => {
        setSuccess(true);
        setSelectedRows([]);
        setError(false);
        setUpdated((prevState) => prevState + 1);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => dispatch(hideSpinner()));
  };

  useEffect(() => {
    dispatch(showSpinner('Loading data...'));
    API.get('/airline/rewards')
      .then((res) => {
        const { offers } = res.data;
        setOffers(offers);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => dispatch(hideSpinner()));
  }, [updated]);

  return (
    <Layout>
      {success && <Alert severity="success">Loayalty Program created successfully</Alert>}
      {error && <Alert severity="error">Please select rewards</Alert>}
      <div className="p-3">
        <h1 className="font-bold text-xxl text-center pb-5" style={{ color: 'purple' }}>
          Create configuration for loyalty program
        </h1>
        <div className="bg-white p-5">
          <div className="flex sm:flex-row flex-col justify-between space-x-4">
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
              <div>Threshold</div>
              <Input
                className="w-full mb-4"
                placeholder="Enter threshold"
                value={threshold}
                handleInputChange={setThreshold}
                type="number"
              />
            </div>
          </div>
          <div className="w-full mt-1 mb-2">
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
          <div className="mt-5 font-semibold text-xl">Rewards</div>
          <DataTable
            rows={offers}
            columns={columns}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </div>
        <div className="flex justify-end mb-3 mr-3">
          <AddButton label="Create" onClick={createRoulette} />
        </div>
      </div>
    </Layout>
  );
};

export default AirlineLoyaltyPage;
