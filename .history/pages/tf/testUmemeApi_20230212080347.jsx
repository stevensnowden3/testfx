import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'ci_session=sh6enidldda10h950i8pr5qrsemb26j8');

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
      .then(response => response.text())
      .then(result => setData(result))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default MyComponent;
