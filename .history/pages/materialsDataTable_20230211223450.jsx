import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import moment from 'moment';

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { setActiveIndex } from '../components/setIndexSteps';
import { itemsList } from '../components/dataitems';
import { Steps } from 'primereact/steps';
import { ROLES } from '../components/dataitems';
import PermissionDeny from '../components/PermissionDeny';

const materialsDataTable = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [inspection_date, z] = useState('');
  const { user, isLoading } = useUser();

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
        let match = false;
        Object.keys(val).forEach(dataField => {
          if (
            val[dataField] &&
            typeof val[dataField] === 'string' &&
            val[dataField].toLowerCase().includes(filters[field].toLowerCase())
          ) {
            match = true;
          }
        });
        return match;
      });
    });

    return filteredData;
  };

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);

  return (
    <>
      {isLoading && <Loading />}
      {(user && user[ROLES].includes('TCO')) || user[ROLES].includes('QAM') || user[ROLES].includes('LWM') ? (
        <div>
          <div className="container-fluid">
            <h2 className="text-center p-3 mb-2" style={{ background: '#b5bd36', color: '#fff' }}>
              MATERIALS INSPECTED AND APPROVED
            </h2>
          </div>

          <div className="p-col-6" style={{ textAlign: 'right' }}>
            <InputText
              type="text"
              style={{ backgroundColor: '#fff', color: '#04392a' }}
              className="me-2"
              onInput={e => setFilters({ ...filters, filter: e.target.value })}
              placeholder="Search all fields"
            />
          </div>

          <DataTable value={filterData()} paginator rows={7} responsive>
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
              field="inspection_technique"
              header="Sample"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column field="id" header="id" headerStyle={{ backgroundColor: '#04392a', color: '#fff' }} />
            <Column
              field="material_received"
              header="material_received"
              headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}
            />
            <Column header="Actions" headerStyle={{ backgroundColor: '#04392a', color: '#fff' }}>
              {rowData => (
                <>
                  <Link to={`/materialView/${rowData.id}`}>
                    <Button label="View" className="p-button-secondary" style={{ marginRight: '.5em' }} />
                  </Link>
                  {(user && user[ROLES].includes('QAM')) || user[ROLES].includes('LWM') ? (
                    <Link to={`/materialEdit/${rowData.id}`}>
                      <Button label="Edit" className="p-button-success" />
                    </Link>
                  ) : null}
                </>
              )}
            </Column>
          </DataTable>
          <div className="m-3">
            <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
          </div>
        </div>
      ) : (
        <PermissionDeny />
      )}
    </>
  );
};

export default withPageAuthRequired(materialsDataTable, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
