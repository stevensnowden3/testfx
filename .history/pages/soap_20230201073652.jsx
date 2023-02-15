import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const soapRequest = `
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="https://www.dataaccess.com/webservicesserver/">
          <soap:Header/>
          <soap:Body>
            <web:NumberToDollars>
              <web:dNum>100</web:dNum>
            </web:NumberToDollars>
          </soap:Body>
        </soap:Envelope>
      `;

      const response = await axios.post(
        'https://www.dataaccess.com/webservicesserver/numberconversion.wso',
        soapRequest,
        {
          headers: {
            'Content-Type': 'text/xml;charset=UTF-8',
            SOAPAction: 'https://www.dataaccess.com/webservicesserver/NumberToDollars'
          }
        }
      );

      setOutages(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Ongoing Outages</h1>
      <pre>{outages}</pre>
      <p>none</p>
    </div>
  );
};

export default App;
