import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Outage = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post('http://www.talend.org/service/get_ongoing_outages', {
        in: 'Input'
      });
      setOutages(response.data.out.Outages);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Outages</h2>
      {outages.map((outage, index) => (
        <div key={index}>
          <p>Outage Job Number: {outage.OutageJobNumber}</p>
          <p>District: {outage.District}</p>
          <p>Substation: {outage.Substation}</p>
          <p>Feeder: {outage.Feeder}</p>
          <p>Outage Type: {outage.OutageType}</p>
          <p>Outage Create Date: {outage.OutageCreateDate}</p>
          <p>Outage Condition: {outage.OutageCondition}</p>
          <p>Outage Description: {outage.OutageDescription}</p>
          <p>Outage Restoration Time: {outage.OutageRestorationTime}</p>
          <p>Outage Affected Areas: {outage.OutageAffectedAreas}</p>
        </div>
      ))}
    </div>
  );
};

export default Outage;
