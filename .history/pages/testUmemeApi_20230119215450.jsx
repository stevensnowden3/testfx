import React, { useEffect } from 'react';
import axios from 'axios';
// import FormData from 'form-data';

const Outages = () => {
  useEffect(() => {
    const myHeaders = {
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    };

    const data = {
      api: 'UM-SyB1PXfwot-O1aHLZc7JJfXGp8-O38ugB1P',
      platform: 'Chatbot',
      version: 'V7',
      device: 'dsdd',
      route: 'get_ongoing_outages'
    };

    axios
      .post('http://41.84.213.50/umeme/V7/', data, { headers: myHeaders })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <div>
      <h1>Outages</h1>
    </div>
  );
};

export default Outages;
