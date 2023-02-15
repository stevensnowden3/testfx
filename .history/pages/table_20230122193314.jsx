import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

const DataTableExample = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getData');
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
          <div className="p-grid">
            <div className="p-col-6" style={{ textAlign: 'left' }}>
              <InputText
                type="text"
                onInput={e => setFilters({ ...filters, materialname: e.target.value })}
                placeholder="Search by material name"
              />
            </div>
            <div className="p-col-6" style={{ textAlign: 'left' }}>
              <InputText
                type="text"
                onInput={e => setFilters({ ...filters, suppliername: e.target.value })}
                placeholder="Search by supplier name"
              />
            </div>
          </div>
        </div>
      </div>
      <DataTable value={filterData()} paginator rows={10}>
        <Column field="materialname" header="Material Name" />
        <Column field="suppliername" header="Supplier Name" />
        <Column field="methodofinspection" header="Method of Inspection" />
        <Column field="contactnumber" header="Contact Number" />
        <Column field="totalinspected" header="Total Inpected" />
        <Column field="totalpass" header="Total Pass" />
        <Column field="totalfailure" header="Total Failure" />
        <Column field="deliverynote" header="Delivery Note" />
        <Column field="invoicenote" header="Sample Inspected" />
        <Column field="deliverydate" header="Delivery Date" />
        <Column field="inspection_date" header="Inspection Date" />
        <Column field="filename" header="File Name" />
        <Column field="remark" header="Remark" />
      </DataTable>
    </div>
  );
};

export default DataTableExample;
