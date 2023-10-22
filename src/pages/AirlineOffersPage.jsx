import React, { useEffect, useState } from 'react';
import Layout from '../layout/airline/Layout.jsx';
import DataTable from '../core/DataTable.jsx';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice.js';
import { useDispatch } from 'react-redux';
import API from '../utils/API.js';
import DeleteButton from '../core/DeleteButton.jsx';
import EditButton from '../core/EditButton.jsx';
import AddButton from '../core/AddButton.jsx';
import AddOffer from '../components/airlineOffers/AddOffer.jsx';
import EditOffer from '../components/airlineOffers/EditOffer.jsx';
import CancelOffer from '../components/airlineOffers/CancelOffer.jsx';
import { dateFormatter } from '../utils/helpers.js';

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
    valueGetter: (params) => params.row.discount + " %"
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

const AirlineOffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [updated, setUpdated] = useState(0);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSpinner('Loading data...'));
    API.get('/airline/offers')
      .then((res) => {
        const {offers} = res.data;
        setOffers(offers);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => dispatch(hideSpinner()));
  }, [updated]);

  const updateData = () => {
    setUpdated((prevState) => prevState + 1);
  };

  return (
    <Layout>
      <div className="p-5">
        <div className="text-xl font-bold uppercase mb-3 pl-3">All Offers</div>
        <div className="bg-white p-8">
          <div className="flex justify-end mb-3">
            <AddButton label="ADD" onClick={() => setAddModal(true)} />
          </div>
          <DataTable
            rows={offers}
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
      {addModal && (
        <AddOffer openModal={addModal} setOpenModal={setAddModal} onSuccess={updateData} />
      )}
      {editModal && selectedRows?.length > 0 && (
        <EditOffer
          openModal={editModal}
          setOpenModal={setEditModal}
          selectedOffer={selectedRows[0]}
          onSuccess={updateData}
        />
      )}
      {removeModal && selectedRows?.length > 0 && (
        <CancelOffer
          setOpenModal={setRemoveModal}
          onSuccess={updateData}
          selectedOffer={selectedRows[0]}
        />
      )}
    </Layout>
  );
};

export default AirlineOffersPage;
