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

const AirlineHomePage = () => {
  const [offers, setOffers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [updated, setUpdated] = useState(0);

  const dispatch = useDispatch();

  const createRoulette = () => {
    if (isArrayEmpty(selectedRows)) {
      setError(true);
    }
    dispatch(showSpinner('Please wait...'));
    const offerIds = selectedRows.map((row) => row.id);

    API.post('/airline/roulette', { eventName, startDate, endDate, offerIds })
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
      {success && <Alert severity="success">Carousel items created successfully</Alert>}
      {error && <Alert severity="error">Please select rewards</Alert>}
      <div className="p-3">
        <h1 className="font-bold text-xxl text-center py-5" style={{ color: 'purple' }}>
          Create configuration for roulette
        </h1>
        <div className="bg-white p-5">
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
          <div className="flex flex-col items-center justify-center mt-1">
            <div>Event name</div>
            <Input
              className="sm:w-1/3 w-full mb-4"
              placeholder="Enter event name"
              value={eventName}
              handleInputChange={setEventName}
            />
          </div>
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

export default AirlineHomePage;
