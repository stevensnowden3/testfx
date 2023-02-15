import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { setActiveIndex } from '../components/setIndexSteps';
import { itemsList } from '../components/dataitems';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import moment from 'moment';

const View = () => {
  const { user, isLoading } = useUser();

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

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);

  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/checklist/${router.query.id}`);
        setFormData(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/checklist/${router.query.id}`, formData);
      setMessage({ type: 'text-success', text: response.data.message });
      console.log('sucess!');
    } catch (error) {
      setMessage({ type: 'text-danger', text: error.response.data.message });
      console.log('fail!');
    }
  };

  return (
    <div>
      {isLoading && <Loading />}
      {user && user['https://netlify-integration.com/roles'].includes('TCO') && (
        <>
          <h2 className="text-center  text-white mb-2 p-3" style={{ background: '#b5bd36' }}>
            UPDATE OR DELETE MATERIAL
          </h2>
          <div className="d-flex justify-content-center mb-2">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="material_name">Material Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="material_name"
                  value={formData.material_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="supplier_name">Supplier Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="supplier_name"
                  value={formData.supplier_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="method_of_inspection">Method of Inspection:</label>
                <input
                  className="form-control"
                  type="text"
                  name="method_of_inspection"
                  value={formData.method_of_inspection}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="material_received">Contact Number:</label>
                <input
                  className="form-control"
                  type="text"
                  name="material_received"
                  value={formData.material_received}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="total_inspected">Total Inspeced:</label>
                <input
                  className="form-control"
                  type="text"
                  name="total_inspected"
                  value={formData.total_inspected}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="total_pass">Total Pass:</label>
                <input
                  className="form-control"
                  type="text"
                  name="total_pass"
                  value={formData.total_pass}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="total_failure">Total Failure:</label>
                <input
                  className="form-control"
                  type="text"
                  name="total_failure"
                  value={formData.total_failure}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="delivery_note">Delivery Note:</label>
                <input
                  className="form-control"
                  type="text"
                  name="delivery_note"
                  value={formData.delivery_note}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sample_inspected">Sample Inspected:</label>
                <input
                  className="form-control"
                  type="text"
                  name="sample_inspected"
                  value={formData.sample_inspected}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="inspection_date">Inspection Date:</label>
                <input type="date" name="inspection_date" value={formData.inspection_date} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="delivery_date">Delivery Date:</label>
                <input type="date" name="delivery_date" value={formData.delivery_date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="remark">Remark:</label>
                <textarea
                  className="form-control"
                  rows={10}
                  cols={100}
                  name="remark"
                  value={formData.remark}
                  onChange={handleChange}
                />
              </div>
              <div className="text-start m-2 ">
                <Button
                  className="p-button-raised  p-button-text me-2 "
                  style={{ background: '#b5bd36', color: '#fff' }}
                  type="submit"
                  aria-label="download pdf">
                  <i className="pi pi-database "></i>
                  <span className="px-3">Update</span>
                </Button>
              </div>

              {message.text && <p className={message.type}>{message.text}</p>}
            </form>
          </div>
          <div className="text-end  ">
            <Button className="p-button-danger " aria-label="Delete">
              <i className="pi  pi-trash"></i>
              <span className="px-1">Delete</span>
            </Button>
          </div>

          {item ? (
            <div className=" container m-5">
              <div className="mt-5">
                <Steps
                  model={items}
                  activeIndex={activeIndex}
                  onSelect={e => setActiveIndex(e.index)}
                  readOnly={true}
                />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
      {!user['https://netlify-integration.com/roles'].includes('TCO') ||
        (user['https://netlify-integration.com/roles'].includes('T') && (
          <p className="text-center text-warning m-5">You dont have permissions to access this route</p>
        ))}
    </div>
  );
};

export default withPageAuthRequired(View, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
