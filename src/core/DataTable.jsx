import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows, columns, selectedRow, onSelect }) => {

  const handleRowSelection = (e) => {
    console.log(e);
    onSelect(e);
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
        checkboxSelection
        selectionModel={selectedRow}
        onSelectionModelChange={handleRowSelection}
      />
    </div>
  );
};

export default DataTable;
