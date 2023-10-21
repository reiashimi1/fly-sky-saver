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
import EditOffer from '../components/airlineOffers/EditOffer.jsx';
import CancelOffer from '../components/airlineOffers/CancelOffer.jsx';

const columns = [
  {
    field: 'title',
    headerName: 'Title',
    width: 150
  },
  {
    field: 'Type',
    headerName: 'Type',
    width: 150,
    valueGetter: (params) => params.row.type.toUpperCase()
  },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 100
  },
  {
    field: 'startDate',
    headerName: 'Start date',
    width: 100
  },
  {
    field: 'endDate',
    headerName: 'End date',
    width: 100
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 400
  }
];

const rows = [
  {
    id: 1,
    title: 'Snow',
    type: 'DISCOUNT',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  },
  {
    id: 2,
    title: 'Snow',
    type: 'percentage',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  },
  {
    id: 3,
    title: 'Snow',
    type: 'fixedAmount',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description. Lorem Ipsum This is a description'
  },
  {
    id: 4,
    title: 'Snow',
    type: 'fixedAmount',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  },
  {
    id: 5,
    title: 'Snow',
    type: 'percentage',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  },
  {
    id: 6,
    title: 'Snow',
    type: 'fixedAmount',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  },
  {
    id: 7,
    title: 'Snow',
    type: 'fixedAmount',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  },
  {
    id: 8,
    title: 'Snow',
    type: 'percentage',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  },
  {
    id: 9,
    title: 'Snow',
    type: 'percentage',
    amount: 35,
    startDate: '2022-10-10',
    endDate: '2022-10-10',
    description: 'Lorem Ipsum This is a description'
  }
];

const AirlineOffersPage = () => {
  const [offers, setOffers] = useState(rows);
  const [selectedRows, setSelectedRows] = useState([]);
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
      <div className="p-5">
        <div className="text-xl font-bold uppercase my-3 pl-3">All Offers</div>
        <div className="bg-white p-8">
          <div className="flex justify-end mb-3">
            <AddButton label="ADD" onClick={() => setAddModal(true)} />
          </div>
          <DataTable
            rows={rows}
            columns={columns}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
          <DataTable
              rows={rows}
              columns={columns}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
          />

          <div className="mt-5 flex justify-end space-x-5 items-end">
            <EditButton label="EDIT" onClick={() => setEditModal(true)} />
            <DeleteButton label="REMOVE" onClick={() => setRemoveModal(true)} />
          </div>
        </div>
      </div>
      {addModal && <AddOffer openModal={addModal} setOpenModal={setAddModal} />}
      {editModal && selectedRows.length > 0 && (
        <EditOffer
          openModal={editModal}
          setOpenModal={setEditModal}
          selectedOffer={selectedRows[0]}
          onSuccess={() => setUpdated((prevState) => prevState++)}
        />
      )}
      {removeModal && selectedRows.length > 0 && (
        <CancelOffer
          setOpenModal={setRemoveModal}
          onSuccess={() => setUpdated((prevState) => prevState++)}
          selectedOffer={selectedRows[0]}
        />
      )}
    </Layout>
  );
};

export default AirlineOffersPage;
