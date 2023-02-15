import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

const View = () => {
  const [item, setItem] = useState({});
  const router = useRouter();

  // Fetch the item from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/checklist/${router.query.id}`);
        setItem(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="text-center mb-2" style={{ color: '#04392a' }}>
        INDIVIDUAL MATERIAL DETAILS
      </h2>
      {item ? (
        <div className=" container m-5">
          <p>Material Name: {item.material_name}</p>
          <p>Supplier Name: {item.supplier_name}</p>
          <p>Method of Inspection: {item.method_of_inspection}</p>
          <p>Contact Number: {item.material_received}</p>
          <p>Total Failure: {item.total_failure}</p>
          <p>Delivery Note: {item.delivery_note}</p>
          <p>Sample Inspected: {item.sample_inspected}</p>
          <p>Inspection Date: {item.inspection_date}</p>
          <p>Delivery Date: {item.delivery_date}</p>
          <p>Filename: {item.filename}</p>
          <p>Remark: </p>
          <div dangerouslySetInnerHTML={{ __html: item.remark }} />

          <div className="text-center ">
            <Button
              className="p-button-raised  p-button-text "
              style={{ background: '#b5bd36', color: '#fff' }}
              aria-label="download pdf">
              <i className="pi pi-check-circle "></i>
              <span className="px-3">Approve</span>
            </Button>
            <Button className="p-button-raised p-button-danger p-button-text " aria-label="download pdf">
              <i className="pi pi-times-circle "></i>
              <span className="px-3">Reject</span>
            </Button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default View;
