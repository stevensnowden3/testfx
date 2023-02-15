import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const DataTableExample = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', age: 35 },
    { id: 2, name: 'Jane Smith', age: 28 },
    { id: 3, name: 'Bob Johnson', age: 42 },
    { id: 4, name: 'Linda Williams', age: 33 },
    { id: 5, name: 'Michael Brown', age: 39 },
    { id: 6, name: 'Emily Davis', age: 27 },
    { id: 7, name: 'Jacob Miller', age: 45 }
  ]);

  const [filters, setFilters] = useState({});

  const filterData = e => {
    let filteredData = data;
    Object.keys(filters).forEach(field => {
      filteredData = filteredData.filter(val => {
        return val[field].toString().toLowerCase().indexOf(filters[field].toLowerCase()) !== -1;
      });
    });
    return filteredData;
  };

  return (
    <div>
      <div className="p-grid">
        <div className="p-col-12">
          <div className="d-flex" style={{ textAlign: 'left' }}>
            <div className="p-col-6" style={{ textAlign: 'left' }}>
              <InputText
                type="text"
                onInput={e => setFilters({ ...filters, name: e.target.value })}
                placeholder="Search by name"
              />
            </div>
            <div className="p-col-6" style={{ textAlign: 'left' }}>
              <InputText
                type="text"
                onInput={e => setFilters({ ...filters, age: e.target.value })}
                placeholder="Search by age"
              />
            </div>
          </div>
        </div>
      </div>
      <DataTable value={filterData()} paginator rows={10}>
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
      </DataTable>
    </div>
  );
};

export default DataTableExample;
