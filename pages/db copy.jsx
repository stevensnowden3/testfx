import { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [observation, setObservation] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/addData', {
        observation,
        comment
      });
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Observation:
        <input type="text" value={observation} onChange={e => setObservation(e.target.value)} />
      </label>
      <br />
      <label>
        Comment:
        <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default MyComponent;
