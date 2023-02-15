import React, { useState, useEffect } from 'react';

const Outages = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    const fetchOutages = async () => {
      try {
        const res = await fetch('http://41.84.213.50/umeme/V7/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: JSON.stringify({
            api: 'UM-SyB1PXfwot-O1aHLZc7JJfXGp8-O38ugB1P',
            platform: 'Chatbot',
            version: 'V7',
            device: '41.210.141.178',
            route: 'get_ongoing_outages'
          })
        });
        const data = await res.json();
        setOutages(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOutages();
  }, []);

  return <div>{JSON.stringify(outages)}</div>;
};

export default Outages;
