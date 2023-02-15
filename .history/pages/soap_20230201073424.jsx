import React, { useState, useEffect } from 'react';

const App = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://www.dataaccess.com/webservicesserver/numberconversion.wso');
      const text = await response.text();
      console.log(text);
      setOutages(text);
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
