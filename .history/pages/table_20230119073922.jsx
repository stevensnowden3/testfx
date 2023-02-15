import React from 'react';
import { useTable, useFilters } from 'react-table';

function Table({ columns, data }) {
  // Use the useTable hook to create the table
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data
    },
    useFilters // Add the useFilters hook to enable filtering
  );

  // Render the table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.rowProps}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function DataTable() {
  // Define the columns and data for the table
  const columns = [
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    }
  ];

  const data = [
    {
      name: 'John Doe',
      email: 'john@example.com'
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com'
    }
  ];

  return <Table columns={columns} data={data} />;
}

export default DataTable;
