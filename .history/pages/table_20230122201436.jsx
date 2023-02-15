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
        if (val[field]) {
          return val[field].toString().toLowerCase().indexOf(filters[field].toLowerCase()) !== -1;
        }
      });
    });
    return filteredData;
  };

  return (
    <div>
      <div className="p-grid">
        <div className="p-col-12">
          <div className="p-grid">
            <div className="p-col-6" style={{ textAlign: 'right' }}>
              <InputText
                type="text"
                className="me-2"
                onInput={e => setFilters({ ...filters, material_name: e.target.value })}
                placeholder="Search by material name"
              />

              <InputText
                type="text"
                onInput={e => setFilters({ ...filters, supplier_name: e.target.value })}
                placeholder="Search by supplier name"
              />
            </div>
          </div>
        </div>
      </div>
      <DataTable value={filterData()} paginator rows={4}>
        <Column field="material_name" header="Material Name" headerStyle={{ backgroundColor: 'red' }} />
        <Column field="supplier_name" header="Supplier Name" headerStyle={{ backgroundColor: 'red' }} />
        <Column field="method+of_inspection" header="Method of Inspection" headerStyle={{ backgroundColor: 'red' }} />
        <Column field="material_received" header="Contact Number" />
        <Column field="total_inspected" header="Total Inpected" />
        <Column field="total_pass" header="Total Pass" />
        <Column field="total_failure" header="Total Failure" />
        <Column field="delivery_note" header="Delivery Note" />
        <Column field="sample_inspected" header="Sample Inspected" />
        <Column field="delivery_date" header="Delivery Date" />
        <Column field="inspection_date" header="Inspection Date" />
        <Column field="filename" header="File Name" />
        <Column field="remark" header="Remark" />
        <th className="checklistTable"></th>
        {/* <Column headerStyle={{ backgroundColor: 'yellow !important' }} /> */}
      </DataTable>
    </div>
  );
};

export default DataTableExample;
