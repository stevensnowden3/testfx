import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { setActiveIndex } from '../../components/setIndexSteps';
import { itemsList } from '../../components/dataitems';
import { Steps } from 'primereact/steps';
import { ROLES } from '../../components/dataitems';

const RejectedMaterials = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { user, isLoading } = useUser();
  const approved = 'confirmed';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/getData?approved=${approved}`);
        const json = await response.json();
        setData(json.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // Function to handle view button click
  const handleView = id => {
    // Redirect to the View component with the id as a query param
    router.push({
      pathname: '/materialView',
      query: { id }
    });
    console.log('View button clicked for id: ', id);
  };

  // Function to handle delete button click
  const handleEdit = id => {
    // Code to handle delete logic
    router.push({
      pathname: '/materialEdit',
      query: { id }
    });
    console.log('Delete button clicked for id: ', id);
    // // Call api to delete the data
    // axios
    //   .delete(`/api/deleteData/${id}`)
    //   .then(response => {
    //     console.log(response);
    //     // Remove the deleted data from the table
    //     setData(data.filter(item => item.id !== id));
    //   })
    //   .catch(error => console.log(error));
  };

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);

  // Render the data
  return (
    <>
      {isLoading && <Loading />}
      {(user && user[ROLES].includes('MIT')) || user[ROLES].includes('QAM') || user[ROLES].includes('LWM') ? (
        <div>
          <table className="table table-bordered">
            <thead>
              <tr style={{ background: '#b5bd36' }}>
                <td colSpan="13" className="text-center text-danger">
                  <h2> Materials Reviewed and Rejected</h2>
                </td>
              </tr>
              <tr style={{ background: '#04392a', color: '#fff' }}>
                <td scope="col">Material&nbsp;Name</td>
                <td scope="col">Supplier</td>

                <td scope="col">Total&nbsp;Failure</td>
                <td scope="col">Total&nbsp;Pass</td>
                <td scope="col">Inspected</td>
                <td scope="col">Delivery&nbsp;Note</td>
                <td scope="col">Sample&nbsp;Inspected</td>

                <td scope="col">delivery_date</td>

                <td scope="col">Actions</td>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.material_name}</td>
                  <td>{row.supplier_name}</td>

                  <td>{row.total_failure}</td>
                  <td>{row.total_pass}</td>
                  <td>{row.total_inspected}</td>
                  <td>{row.delivery_note}</td>
                  <td>{row.sample_inspected}</td>
                  <td>{moment(row.delivery_date).format(' MMMM, Do hA')}</td>

                  <td>
                    <div className="d-flex justify-content-evenly">
                      <Button
                        icon="pi pi-eye"
                        style={{ background: '#04392a', color: '#fff', fontSize: '10px' }}
                        onClick={() => handleView(row.id)}></Button>
                      <Button
                        // label="Edit "
                        icon="pi pi-pencil"
                        style={{ background: '#04392a', color: '#fff', fontSize: '10px' }}
                        onClick={() => handleEdit(row.id)}></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="steps-demo m-5 ">
            <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
          </div> */}
        </div>
      ) : (
        <>
          <h5 className="text-center text-warning m-5">You don't have permissions to access this page</h5>
          <p className="text-center text-danger m-5">Request for permissions</p>
        </>
      )}
    </>
  );
};

export default withPageAuthRequired(RejectedMaterials, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
