import React, { useEffect, useState } from 'react';
import Layout from '../layout/airline/Layout.jsx';
import DataTable from '../core/DataTable.jsx';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice.js';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice.js';
import { fetchUser } from '../redux/userSlice.js';
import API from '../utils/API.js';
import DeleteButton from '../core/DeleteButton.jsx';
import EditButton from '../core/EditButton.jsx';
import AddButton from '../core/AddButton.jsx';
import AddOffer from '../components/airlineOffers/AddOffer.jsx';

const columns = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 200
  },
  { field: 'lastName', headerName: 'Last name', width: 200 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 150
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
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

const AirlineOffersPage = () => {
  const [offers, setOffers] = useState(rows);
  const [updated, setUpdated] = useState(0);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(showSpinner('Loading data...'));
    // API.get('/auth/signin')
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => dispatch(hideSpinner()));
  }, [updated]);

  const removeOffer = () => {
    setUpdated((prevState) => prevState++);
  };

  return (
    <Layout>
      <div className="mb-8 p-5">
        <div className="bg-white p-8">
          <div className="flex justify-between mb-3">
            <div className="text-xl font-bold uppercase mb-3">All Offers</div>
            <AddButton label="ADD" onClick={() => setAddModal(true)} />
          </div>
          <DataTable rows={rows} columns={columns} />
          <div className="mt-5 flex justify-end space-x-5 items-end">
            <EditButton label="EDIT" onClick={() => setEditModal(true)} />
            <DeleteButton label="REMOVE" onClick={() => setRemoveModal(true)} />
          </div>
        </div>
      </div>
      {addModal && <AddOffer openModal={addModal} setOpenModal={setAddModal} />}
    </Layout>
  );
};

export default AirlineOffersPage;
