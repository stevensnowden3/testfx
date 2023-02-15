import React, { useState, useEffect } from 'react';

const Outages = () => {
  const [outages, setOutages] = useState([]);

  useEffect(() => {
    var myHeaders = [];
    myHeaders.push({ Cookie: 'ci_session=sh6enidldda10h950i8pr5qrsemb26j8' });

    var formdata = new FormData();
    formdata.append('api', 'UM-SyB1PXfwot-O1aHLZc7JJfXGp8-O38ugB1P');
    formdata.append('platform', 'Chatbot');
    formdata.append('version', 'V7');
    formdata.append('device', 'DEVICE-ID-HERE');
    formdata.append('route', 'get_ongoing_outages');

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    console.log(requestOptions);
    fetch('http://41.84.213.50/umeme/V7/', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);

  return <div>{JSON.stringify(outages)}</div>;
};

export default Outages;
