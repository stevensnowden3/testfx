import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import moment from 'moment';

const materialsDataTable = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [inspection_date, z] = useState('');

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
      <div className="container-fluid">
        <h2 className="text-center p-3 mb-2" style={{ background: '#b5bd36', color: '#fff' }}>
          MATERIALS INSPECTED AND APPROVED BY UMEME
        </h2>
      </div>
      <div className="p-grid mb-2">
        <div className="p-col-12">
          <div className="p-grid">
            <div className="p-col-6" style={{ textAlign: 'right' }}>
              <InputText
                type="text"
                style={{ backgroundColor: '#fff', color: '#04392a' }}
                className="me-2"
                onInput={e => setFilters({ ...filters, material_name: e.target.value })}
                placeholder="Search by material name"
              />

              <InputText
                type="text"
                style={{ backgroundColor: '#fff', color: '#04392a' }}
                onInput={e => setFilters({ ...filters, supplier_name: e.target.value })}
                placeholder="Search by supplier name"
              />
            </div>
          </div>
        </div>
      </div>
      <DataTable value={filterData()} paginator rows={4} responsive>
        <Column
          field="material_name"
          header="Material_Name"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
        />
        <Column
          field="supplier_name"
          header="Supplier_Name"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
        />
        <Column
          field="method_of_inspection"
          header="Inspection_Method"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
        />
        <Column
          field="material_received"
          header="material_received"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
        />
        <Column
          field="total_inspected"
          header="TotaI_Inspected"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
        />
        <Column field="total_pass" header="Total_Pass" headerStyle={{ backgroundColor: '#04392a', color: '#fff' }} />
        <Column field="total_failure" header="Total_Fail" headerStyle={{ backgroundColor: '#04392a', color: '#fff' }} />
        <Column
          field="delivery_note"
          header="Delivery_Note"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
        />
        <Column
          field="sample_inspected"
          header="sample_inspected"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
        />
        {/* <Column field="delivery_date" header="Delivery Date" headerStyle={{ backgroundColor: '#b5bd36' }} /> */}
        {/* <Column field="inspection_date" header="Inspection Date" headerStyle={{ backgroundColor: '#b5bd36' }} /> */}
        {/* <Column field="inspection_date" header="Inspection_date" headerStyle={{ backgroundColor: '#b5bd36' }} /> */}
        {/* <Column field="remark" header="Remark" headerStyle={{ backgroundColor: '#b5bd36' }} /> */}
        {/* <Column headerStyle={{ backgroundColor: 'yellow !important' }} /> */}
        {/* <Column
          field="inspection_date"
          header="Inspection Date"
          headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
          template={rowData => moment(rowData.inspection_date).fromNow()}
        /> */}
      </DataTable>
      <p> {inspection_date ? moment(inspection_date).fromNow() : 'none'}</p>
    </div>
  );
};

export default materialsDataTable;
