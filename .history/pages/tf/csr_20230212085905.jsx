import React, { useState, useEffect } from 'react';

const OutageData = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/test');
      const json = await res.json();

      if (json.success && json.data) {
        try {
          const parsedData = JSON.parse(json.data);
          setOutages(parsedData);
          console.log(parsedData);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Outage Information</h1>

      {outages ? (
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
            {outages.map((outage, index) => (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OutageData;
