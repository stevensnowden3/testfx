import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

import { Steps } from 'primereact/steps';
import { setActiveIndex } from '../../components/setIndexSteps';
import { itemsList, ROLES } from '../../components/dataitems';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Editor } from '@tinymce/tinymce-react';

import moment from 'moment';

const View = () => {
  const { user, isLoading } = useUser();

  const [item, setItem] = useState({});

  const router = useRouter();

  // handling editor
  const [content, setContent] = useState('');

  const onEditorChange = (content, editor) => {
    setContent(editor.getContent());
  };

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

  const [formData, setFormData] = useState({
    material_name: '',
    supplier_name: '',
    method_of_inspection: '',
    material_received: '',
    total_inspected: '',
    total_pass: '',
    total_failure: ''
  });
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
      const id = router.query.id;
      setTimeout(() => {
        router.push({
          pathname: '/materialView',
          query: { id }
        });
      }, 1000);
    } catch (error) {
      setMessage({ type: 'text-danger', text: error.response.data.message });
      console.log('fail!');
    }
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/checklist/${router.query.id}`);
      setMessage({ type: 'text-success', text: response.data.message });
      setTimeout(() => {
        router.push({
          pathname: '/viewEditDeleteTable'
        });
      }, 1000);
      console.log('delete success!');
      // redirect to list page or something similar
    } catch (error) {
      setMessage({ type: 'text-danger', text: error.response.data.message });
      console.log('delete fail!');
    }
  };

  return (
    <div>
      {isLoading && <Loading />}
      {(user && user[ROLES].includes('TCO')) ||
      user[ROLES].includes('QAM') ||
      user[ROLES].includes('LWM') ||
      user[ROLES].includes('HNAD') ? (
        <>
          <h2 className="text-center mx-5  text-white mb-2 p-3" style={{ background: '#b5bd36' }}>
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
                  disabled
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
                <Editor
                  apiKey="sss"
                  initialValue={formData.remark}
                  onEditorChange={onEditorChange}
                  onChange={handleChange}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar:
                      'undo redo | formatselect | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />
              </div>
              <div className="bg-light">{content && <div>Editor Content: {content}</div>}</div>
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
            <Button className="p-button-danger " onClick={handleDelete} aria-label="Delete">
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
      ) : (
        <>
          <h5 className="text-center text-warning m-5">You dont have permissions to access this page</h5>
          <p className="text-center text-danger m-5">Request for permissions</p>
        </>
      )}
    </div>
  );
};

export default withPageAuthRequired(View, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
