import React, { useState, useEffect } from 'react';

const OutageData = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL = 'http://41.84.213.50/umeme/V7/';

      const myHeaders = new Headers();
      myHeaders.append('Cookie', 'ci_session=sh6enidldda10h950i8pr5qrsemb26j8');

      const formData = new FormData();
      formData.append('api', 'UM-SyB1PXfwot-O1aHLZc7JJfXGp8-O38ugB1P');
      formData.append('platform', 'Chatbot');
      formData.append('version', 'V7');
      formData.append('device', '22.222.222.22');
      formData.append('route', 'get_ongoing_outages');

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
      };

      const response = await fetch(API_URL, requestOptions);
      const result = await response.text();

      try {
        const parsedData = JSON.parse(result);
        setOutages(parsedData.ongoing_outages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Outage Information</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DISTRICT</th>
            <th>FEEDER</th>
            <th>JOB_TYPE</th>
            <th>CREATED_DATE</th>
            <th>JOB_CONDITION</th>
            <th>WORK_DESCRIPTION</th>
            <th>RTS_TIME</th>
            <th>AREAS</th>
          </tr>
        </thead>
        <tbody>
          {outages &&
            outages.map((outage, index) => (
              <tr key={index}>
                <td>{outage.ID}</td>
                <td>{outage.DISTRICT}</td>
                <td>{outage.FEEDER}</td>
                <td>{outage.JOB_TYPE}</td>
                <td>{outage.CREATED_DATE}</td>
                <td>{outage.JOB_CONDITION}</td>
                <td>{outage.WORK_DESCRIPTION}</td>
                <td>{outage.RTS_TIME}</td>
                <td>{outage.AREAS}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OutageData;
