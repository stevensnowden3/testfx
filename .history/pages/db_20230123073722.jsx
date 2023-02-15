import { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [material_name, setMaterialName] = useState('');
  const [supplier_name, setSupplierName] = useState('');
  const [method_of_inspection, setMethodOfInspection] = useState('');
  const [material_received, setContactNumber] = useState('');
  const [total_inspected, setTotalInspected] = useState('');
  const [total_pass, setTotalPass] = useState('');
  const [total_failure, setTotalFailure] = useState('');
  const [delivery_note, setDeliveryNote] = useState('');
  const [sample_inspected, setInvoiceNote] = useState('');
  const [delivery_date, setDeliveryDate] = useState('');
  const [inspection_date, setInspectionDate] = useState('');
  const [filename, setFilename] = useState('');
  const [remark, setRemark] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/checklist', {
        material_name,
        supplier_name,
        method_of_inspection,
        material_received,
        total_inspected,
        total_pass,
        total_failure,
        delivery_note,
        sample_inspected,
        delivery_date,
        inspection_date,
        filename,
        remark
      });
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Material Name:
        <input type="text" value={material_name} onChange={e => setMaterialName(e.target.value)} />
      </label>
      <br />
      <label>
        Supplier Name:
        <input type="text" value={supplier_name} onChange={e => setSupplierName(e.target.value)} />
      </label>
      <br />
      <label>
        Method of Inspection:
        <input type="text" value={method_of_inspection} onChange={e => setMethodOfInspection(e.target.value)} />
      </label>
      <br />
      <label>
        Contact Number:
        <input type="text" value={material_received} onChange={e => setContactNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Total Inspected:
        <input type="text" value={total_inspected} onChange={e => setTotalInspected(e.target.value)} />
      </label>
      <br />
      <label>
        Total Pass:
        <input type="text" value={total_pass} onChange={e => setTotalPass(e.target.value)} />
      </label>
      <br />
      <label>
        Total Failure:
        <input type="text" value={total_failure} onChange={e => setTotalFailure(e.target.value)} />
      </label>
      <br />
      <label>
        Delivery Note:
        <input type="text" value={delivery_note} onChange={e => setDeliveryNote(e.target.value)} />
      </label>
      <br />
      <label>
        Sample Inspected:
        <input type="text" value={sample_inspected} onChange={e => setInvoiceNote(e.target.value)} />
      </label>
      <br />
      <label>
        Delivery Date:
        <input type="date" value={delivery_date} onChange={e => setDeliveryDate(e.target.value)} />
      </label>
      <br />
      <label>
        Inspection Date:
        <input type="date" value={inspection_date} onChange={e => setInspectionDate(e.target.value)} />
      </label>
      <br />
      <label>
        Filename:
        <input type="text" value={filename} onChange={e => setFilename(e.target.value)} />
      </label>
      <br />
      <label>
        Remark:
        <input type="text" value={remark} onChange={e => setRemark(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default MyComponent;
