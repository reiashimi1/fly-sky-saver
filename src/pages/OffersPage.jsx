import Layout from '../layout/user/Layout.jsx';
import DataTable from '../core/DataTable.jsx';
import { useEffect, useState } from 'react';
import API from '../utils/API.js';
import { useDispatch } from 'react-redux';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice.js';

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
    field: 'route',
    headerName: 'Route',
    valueGetter: (params) => params.row.origin + ' - ' + params.row.destination,
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

const OffersPage = () => {
  const [offers, setOffers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showSpinner('Please wait...'));
    API.get('/users/offers')
      .then((response) => {
        const { offers } = response.data;
        setOffers(offers);
      })
      .catch((error) => console.log(error))
      .finally(() => dispatch(hideSpinner()));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center mb-36">
        <h1
          className="font-bold font-xxl text-center py-5"
          style={{ color: 'purple', fontSize: 'xx-large' }}>
          Check out your offers here!
        </h1>
        <div className="flex h-full flex-col align-center justify-center w-full">
          <div className="bg-white p-3 m-3">
            <DataTable
              rows={offers}
              columns={columns}
              allowCheckboxSelection={false}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default OffersPage;
