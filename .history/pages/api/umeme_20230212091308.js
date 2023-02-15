import fetch from 'node-fetch';

const API_URL = 'http://41.84.213.50/umeme/V7/';

export default async (req, res) => {
  try {
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
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
