import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows, columns, selectedRows, setSelectedRows }) => {
  console.log(selectedRows);

  const handleRowSelection = (e) => {
    const myRows = rows.filter((row) => e.includes(row.id));
    setSelectedRows(myRows);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        selectionModel={selectedRows}
        onRowClick={handleRowSelection}
        onRowSelectionModelChange={handleRowSelection}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
