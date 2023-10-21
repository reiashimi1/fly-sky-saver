import { useState } from 'react';
import Layout from '../layout/airline/Layout';
import DataTable from '../core/DataTable.jsx';

const UserProfilePage = () => {
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

  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <Layout>
      <h1 className="font-bold text-xxl text-center py-10" style={{ color: 'purple' }}>
        Checkout your bookings!
      </h1>
      <div className="flex h-full flex-col align-center justify-center w-full">
        <div>
          <DataTable
            rows={rows}
            columns={columns}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </div>
      </div>
    </Layout>
  );
};
export default UserProfilePage;
