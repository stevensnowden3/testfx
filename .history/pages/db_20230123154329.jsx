import { useState } from 'react';

const MyComponent = () => {
  const [material_name, setMaterialName] = useState('1');
  const [supplier_name, setSupplierName] = useState('1');
  const [method_of_inspection, setMethodOfInspection] = useState('1');
  const [material_received, setContactNumber] = useState('1');
  const [total_inspected, setTotalInspected] = useState('1');
  const [total_pass, setTotalPass] = useState('1');
  const [total_failure, setTotalFailure] = useState('1');
  const [delivery_note, setDeliveryNote] = useState('1');
  const [sample_inspected, setInvoiceNote] = useState('1');
  const [delivery_date, setDeliveryDate] = useState('1');
  const [inspection_date, setInspectionDate] = useState('1');
  const [filename, setFilename] = useState('1');
  const [remark, setRemark] = useState('1');
  const [message, setMessage] = useState('1');

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      !material_name ||
      !supplier_name ||
      !method_of_inspection ||
      !material_received ||
      !total_inspected ||
      !total_pass ||
      !total_failure ||
      !delivery_note ||
      !sample_inspected ||
      !delivery_date ||
      !inspection_date ||
      !filename ||
      !remark
    ) {
      setMessage('All fields are required');
      return;
    }
    try {
      const response = await fetch('/api/addData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          material_name,
          supplier_name,
          method_of_inspection,
          material_received,
          total_inspected,
          total_pass,
          total_failure,
          delivery_note,
          sample_inspected,

          filename,
          remark
        })
      });
      const data = await response.json();
      setMessage(data.message);
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
      <p>{total_failure}</p>
      {message && <p>{message}</p>}
    </form>
  );
};

export default MyComponent;
