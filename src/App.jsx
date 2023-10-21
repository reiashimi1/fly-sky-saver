import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counterSlice';
import { showSpinner } from './redux/spinnerSlice';
import Button from '@mui/material/Button';
import DataTable from './core/DataTable.jsx';
import { API_URL } from './utils/API_URL.js';
import Roulette from './components/Roulette';
import AirAlbania from "./assets/images/AirAlbania.svg";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 130
  },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42
  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 16
  },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
    age: 150
  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 36
  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

function App() {
  const count = useSelector((state) => state.counterSlice.value);
  console.log(count);
  console.log(API_URL);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="text-red-400">
          <Button
            aria-label="Increment value"
            color="inherit"
            onClick={() => dispatch(increment())}>
            Increment
          </Button>
          {/*<Alert severity="success" color="info">*/}
          {/*  This is a success alert — check it out!*/}
          {/*</Alert>*/}
        </div>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <div className="w-full">
          <img src={AirAlbania} alt="AirAlbania"/>
        </div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(showSpinner('Loading data...'))}>
          show spinner
        </button>
      </div>
      <DataTable rows={rows} columns={columns} />
      <Roulette />
    </div>
  );
}

export default App;
