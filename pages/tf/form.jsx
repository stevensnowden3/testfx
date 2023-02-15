import React,{ useState, useRef } from 'react'
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';

const form = () => {
    const [value1, setValue1] = useState('');
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [checked1, setChecked1] = useState(false);
     const [textValue, setTextValue] = useState('');
  const [text1, setText1] = useState('<div></div>');

   const cities = [
        { name: 'Poles', code: 'pol' },
        { name: 'Safe', code: 'sf' },
    ];
  
      const onCityChange = (e) => {
      setSelectedCity1(e.value);
      }

 const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {
            label: 'Inspection of Raw Materials',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Waiting for Aprroval',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
            }
        },
        {
            label: 'Approved by QA',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
       
    ];


  return (
    <>
 <table className="table table-bordered">
  <thead className=''>
    <tr>
      <th className='text-center' colSpan="8"><h1> Material Quality Inspection Report</h1></th>
    </tr>
  </thead>
  <tbody>
      <tr>
       
       <td className='text-start' colSpan="6">
        <div className="col-12 md:col-4">
          <div className="p-inputgroup">
              <span className="p-inputgroup-addon p-inputtext-sm block mb-2">Material Quality Inspection Report</span>
              <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
          </div>
        </div>
        </td>

        <td className='text-start' colSpan="2">
          <div className="col-12 md:col-4">
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon p-inputtext-sm block mb-2"> Delivery Date:</span>
                <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
          </div>
          </td>
    
    </tr>
    <tr>
        <td className='text-start' colSpan="6">
            <div className="col-12 md:col-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon p-inputtext-sm block mb-2">Supplier/Manufacturer:</span>
              <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
            </div>
        </td>


       <td className='text-start' colSpan="2">
            <div className="col-12 md:col-4">
              <div className="p-inputgroup">
                  <span className="p-inputgroup-addon p-inputtext-sm block mb-2"> Inspection Date:</span>
                  <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
              </div>
            </div>
        </td>
    </tr>
    
    <tr>
        <td className='text-start' colSpan="4">
            <div className="col-12 md:col-4">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon p-inputtext-sm block mb-2">Method of Inspection: Visual, Measurement and Testing.:</span>
              <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
            </div>
        </td>



      <td className='text-start' colSpan="2">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Sample
            </label>
        </div>
        
    </td>
    
       <td className='text-start' colSpan="2">
          <div className="col-12 md:col-4">
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon p-inputtext-sm block mb-2">Delivery Note:</span>
                <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
          </div>
         </td>
    </tr>
     <tr>
     <td className='text-start' colSpan="4">
          <div className="col-12 md:col-4">
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon p-inputtext-sm block mb-2">Contract  No:</span>
                <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
            </div>
          </div>
         </td>
      <td className='text-start' colSpan="2">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                Whole
            </label>
        </div>
        
    </td>
      <td className='text-start' colSpan="2">
      <div className="col-12 md:col-4">
        <div className="p-inputgroup">
            <span className="p-inputgroup-addon p-inputtext-sm block mb-2"> Invoice No:</span>
            <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
        </div>
      </div>
        </td>
    </tr>
    <tr>
      <td className='text-center' colSpan="8">
      <div className="col-12 md:col-4">
          <div className="p-inputgroup">
              <span className="p-inputgroup-addon p-inputtext-sm block mb-2">Total Inspected:</span>
              <InputText type="text" className="p-inputtext-sm block mb-2" id="inputtext" value={value1} onChange={(e) => setValue1(e.target.value)} />
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td colSpan={8}>
      <Divider align="center">
      <span className="p-tag bg-success">Inspection</span>
      </Divider>
      </td>
      </tr>
      <tr>
          <th colSpan={2}>Quality checks /measurement done</th>
          <th colSpan={2}>Umeme Requirement</th>
          <th colSpan={2}>Observation</th>
          <th colSpan={2}>Comment (Pass/Fail)</th>


</tr>

<tr>
  <td className='text-center' colSpan="2">
    <h6>Material</h6>
  </td>
  <td colSpan={2} className='text-center'><label>Select an option:</label>
   <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select an Item" />
  </td>
  <td colSpan={2} className='text-center'>
    <InputText value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="observation" />
  </td>
  <td colSpan={2} className='text-center'> <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></td>
</tr>
<tr>
  <td className='text-center' colSpan="2">
    <h6>Diameter of Pole Cap</h6>
  </td>
  <td colSpan={2} className='text-center'><label>Select an option:</label>
   <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select an Item" />
  </td>
  <td colSpan={2} className='text-center'>
    <InputText value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="observation" />
  </td>
  <td colSpan={2} className='text-center'> <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></td>
</tr>
<tr>
  <td className='text-center' colSpan="2">
    <h6>Thickness of Sheet</h6>
  </td>
  <td colSpan={2} className='text-center'><label>Select an option:</label>
   <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select an Item" />
  </td>
  <td colSpan={2} className='text-center'>
    <InputText value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="observation" />
  </td>
  <td colSpan={2} className='text-center'> <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></td>
</tr>
<tr>
  <td className='text-center' colSpan="2">
    <h6>Number of Holes </h6>
  </td>
  <td colSpan={2} className='text-center'><label>Select an option:</label>
   <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select an Item" />
  </td>
  <td colSpan={2} className='text-center'>
    <InputText value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="observation" />
  </td>
  <td colSpan={2} className='text-center'> <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></td>
</tr>
<tr>
  <td className='text-center' colSpan="2">
    <h6>Diameter of Holes</h6>
  </td>
  <td colSpan={2} className='text-center'><label>Select an option:</label>
   <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select an Item" />
  </td>
  <td colSpan={2} className='text-center'>
    <InputText value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="observation" />
  </td>
  <td colSpan={2} className='text-center'> <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></td>
</tr>
<tr>
  <td className='text-center' colSpan="2">
    <h6>Surface Finish of Pole Cap</h6>
  </td>
  <td colSpan={2} className='text-center'><label>Select an option:</label>
   <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select an Item" />
  </td>
  <td colSpan={2} className='text-center'>
    <InputText value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="observation" />
  </td>
  <td colSpan={2} className='text-center'> <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></td>
</tr>
<tr>
  <td className='text-center' colSpan="2">
    <h6>Material</h6>
  </td>
  <td colSpan={2} className='text-center'><label>Select an option:</label>
   <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select an Item" />
  </td>
  <td colSpan={2} className='text-center'>
    <InputText value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder="observation" />
  </td>
  <td colSpan={2} className='text-center'> <InputSwitch  checked={checked1} onChange={(e) => setChecked1(e.value)} /></td>
</tr>
   
   
  </tbody>
</table>
       <label> Selected Item: <span className='text-warning'>{selectedCity1 ? selectedCity1.name : 'none'}</span></label>  Switch value:  <span className='text-warning'> {checked1 ? 'pass' : 'fail'}</span> Observation:
 <span className='text-warning'>{textValue}</span>




 <div>
      <div className="card ">
          <h6>Remarks/Comments (Indicated the Total quantities passed/Failed)</h6>
          <Editor style={{ height: '150px' }} value={text1} onTextChange={(e) => setText1(e.htmlValue)}  />
      </div>
      {/* <div dangerouslySetInnerHTML={{__html: text1}} /> */}
 
      <div className='text-end m-3 '>
            <Button label="Submit" className="p-button-raised p-button-text" />
            <Button label="Cancel" className="p-button-raised p-button-danger p-button-text" />
        </div>
   </div>



   <div className="steps-demo m-5">
            <Toast ref={toast}></Toast>

            <div>
                 <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={true} />
            </div>
        </div>
    
    </>
  )
}

export default form