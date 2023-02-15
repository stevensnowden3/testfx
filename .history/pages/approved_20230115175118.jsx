import React,{ useState, useRef } from 'react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
// import { Calendar } from 'primereact/calendar';
// import moment mfrom 'moment';

const approved = () => {

  const { user, isLoading } = useUser();


 const [activeIndex, setActiveIndex] = useState(2);
    const toast = useRef(null);
    const materials = [
        {
            label: 'Inspection of Raw Materials',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Waiting for Aprroval',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
            }
        },
        {
            label: 'Approved by QA',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
            }
        },
       
    ];
   

    

  return (
    <>
    {isLoading && <Loading />}
    
    {user && user["https://netlify-integration.com/roles"].includes('editor') && <>
 <table className="table table-bordered">
  <thead className=''>
    <tr>
      <th className='text-center' colSpan="8"><h3> Materials Inspected and Approved </h3></th>
    </tr>
  </thead>
  <tbody>
    
      <tr>
          <th colSpan={2}>Inspected Item</th>
          <th colSpan={2}>Number of materials</th>
          <th colSpan={2}>Health of material</th>
          <th colSpan={2}>Date of Inspection</th>


</tr>


<tr>
<td  colSpan="2">
<h6>Wooden Electric Poles</h6>
</td>
<td colSpan={2} className='text-center'><label>40 pole inspected</label>
</td>
<td colSpan={2} className='text-center'>In good condition  </td>
<td colSpan={2} className='text-center'> <div className='d-flex flex-row justify-content-between'> <div> 4 Days ago </div><div><Button label="View Item" className=" p-button-raised p-button-text" /></div></div> 
</td>
</tr>
<tr>
<td  colSpan="2">
<h6>Wooden Electric Poles</h6>
</td>
<td colSpan={2} className='text-center'><label>40 pole inspected</label>
</td>
<td colSpan={2} className='text-center'>In good condition  </td>
<td colSpan={2} className='text-center'> <div className='d-flex flex-row justify-content-between'> <div> 4 Days ago </div><div><Button label="View Item" className=" p-button-raised p-button-text" /></div></div> 
</td>
</tr>

   
   
  </tbody>
</table>


   <div className="steps-demo m-5">
            <Toast ref={toast}></Toast>

            <div>
                 <Steps model={materials} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={true} />
            </div>
            {user["https://netlify-integration.com/roles"].includes('editor') && <p className='m-5'> Inspector</p>}
            {user["https://netlify-integration.com/roles"].includes('admin')  && <h5>You are Admin</h5>}
        </div>
        </>}
        {user["https://netlify-integration.com/roles"].includes('user') && <p className='text-center text-warning m-5'>You dont have permissions to access this route</p>
}
        
    
    </>
  )
}

export default withPageAuthRequired(approved, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});