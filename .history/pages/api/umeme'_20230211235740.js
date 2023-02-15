import axios from 'axios';
import FormData from 'form-data';

var data = new FormData();
data.append('api', 'UM-SyB1PXfwot-O1aHLZc7JJfXGp8-O38ugB1P');
data.append('platform', 'Chatbot');
data.append('version', 'V7');
data.append('device', 'DEVICE-ID-HERE');
data.append('route', 'get_ongoing_outages');

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://41.84.213.50/umeme/V7/',
  headers: {
    Cookie: 'ci_session=sh6enidldda10h950i8pr5qrsemb26j8',
    ...data.getHeaders()
  },
  data: data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
