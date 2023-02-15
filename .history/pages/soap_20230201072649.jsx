import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import xml2js from 'xml2js';

const parseString = xml2js.parseString;

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://www.dneonline.com/calculator.asmx');
        const xml = await res.text();

        parseString(xml, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          setData(result);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Ongoing Outages</h1>
      {JSON.stringify(data)}
      <p>none</p>
    </div>
  );
};

export default App;
