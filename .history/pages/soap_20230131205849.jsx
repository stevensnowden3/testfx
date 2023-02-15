import React, { useState, useEffect } from 'react';

const App = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://10.15.1.86:8040/services/get_ongoing_outages');
      const text = await response.text();
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
