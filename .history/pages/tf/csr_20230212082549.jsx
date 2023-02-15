import React, { useState, useEffect } from 'react';

const OutageData = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    const fetchOutages = async () => {
      const response = await fetch('/api/test');
      const data = await response.json();
      setOutages(data.data.ongoing_outages);
    };

    fetchOutages();
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
          {data.ongoing_outages.map((outage, index) => (
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
