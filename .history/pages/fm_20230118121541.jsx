import React,{ useState, useRef } from 'react'
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import Hero from '../components/params';
import paramData from '../components/paramData'
import moment from 'moment';

const form = () => {
    const [value1, setValue1] = useState('');
    const [selectedCity1, setSelectedCity1] = useState(null);
    const [checked1, setChecked1] = useState(false);
     const [textValue, setTextValue] = useState('');
      const [username, setUsername] = useState("");
  const [text1, setText1] = useState('<div></div>');
  const [value2, setValue2] = useState();
      const [value, setValue] = useState('');


const [selectedDate, setSelectedDate] = useState(null);
const [showCalendar, setShowCalendar] = useState(true);
const onDateSelect = (e) => {
  setSelectedDate(e.value);
  setShowCalendar(false);
  setShowCalendar(true);
}

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (!isNaN(inputValue) && inputValue !== '') {
            setValue(inputValue);
        }
    }

   const method1 = ["james", "kato","bua"];
   const method = [
        { name: 'Testing', code: 'a' },
        { name: 'Visual', code: 'b' },
        { name: 'Measurement', code: 'c' },
   ]

    const sample = [
        { name: 'hexing meter box', code: 'a' },
        { name: 'hammer stapler for pole saver fire protection fabric', code: 'b' },
        { name: 'ABC end cap', code: 'c' },
        { name: '1/2 Nylon Rope', code: 'd' },
        { name: '1 Way single phase empty box', code: 'e' },
        { name: '1" Nylon Rope', code: 'f' },
        { name: '5.7m multipurpose foldable ladders', code: 'g' },
        { name: '50m tape measure', code: 'h' },
        { name: 'ABC cable', code: 'i' },
        { name: 'ABC end cap', code: 'j' },
	  { name: 'ABC strain clamp 10-16mm', code: 'k' },
	{ name: 'ABC strain tension clamp', code: 'l' },
	{ name: 'ABC suspension clamp', code: 'm' },
	{ name: 'adjustable spanner', code: 'n' },
	{ name: 'air break switch disconnector', code: 'o' },
	{ name: 'auto recloser', code: 'p' },
	{ name: 'bolt and nuts', code: 'q' },
	{ name: 'bolt cutter', code: 'r' },
	{ name: 'bowsaw blade', code: 's' },
	{ name: 'cable brackets', code: 't' },
	{ name: 'cable saddle', code: 'u' },
	{ name: 'cable termination & jointing', code: 'v' },
	{ name: 'cable ties', code: 'w' },
	{ name: 'climbing irons', code: 'x' },
	{ name: 'comm cable connectors', code: 'y' },
	{ name: 'communication cable clips', code: 'z' },
	{ name: 'concrete poles and subs', code: 'aa' },
	{ name: 'conductors', code: 'ab' },
	{ name: 'cordless drilling machine', code: 'ac' },
	{ name: 'crimping tool', code: 'ad' },
	{ name: 'CT\'s', code: 'ae' },
	{ name: ' danger sign plate', code: 'af' },
	{ name: 'DIN rail', code: 'ag' },
	{ name: 'D-Iron', code: 'ah' },
	{ name: 'distribution transformer', code: 'ai' },
	{ name: 'drop out fuses', code: 'aj' },
	{ name: 'earth rod', code: 'ak' },
	{ name: 'electricians claw hammer', code: 'al' },
	{ name: 'eye bolt and nuts', code: 'am' },
	{ name: 'fabricated meter box', code: 'an' },
	{ name: 'fall restriction device', code: 'ao' },
	{ name: 'feeder pillar', code: 'ap' },
	{ name: 'ferrule', code: 'aq' },
	{ name: 'filla foam', code: 'ar' },
	{ name: 'flexible leather gloves', code: 'as' },
	{ name: 'guy grips', code: 'at' },
	{ name: 'hacksaw blade', code: 'au' },
	{ name: ' hand pallet truck', code: 'av' },
	{ name: 'hard hats', code: 'aw' },
	{ name: 'heavy pvc pipes', code: 'ax' },
	{ name: 'herbicide', code: 'ay' },
	{ name: 'hv gloves', code: 'az' },
	{ name: 'insulated electricians knife 2 blade', code: 'ba' },
	{ name: 'insulating tape', code: 'bb' },
	{ name: 'ipc connectors', code: 'bc' },
	{ name: 'landing brackets', code: 'bd' },
	{ name: 'lugs', code: 'be' },
	{ name: 'Lv cables 01', code: 'bf' },
	{ name: 'Lv reel insulator', code: 'bg' },
	{ name: 'MCBs', code: 'bh' },
	{ name: 'MCCBs', code: 'bi' },
	{ name: 'meter seals', code: 'bj' },
	{ name: 'metering units', code: 'bk' },
	{ name: 'mv cables', code: 'bl' },
	{ name: 'mv cross arms', code: 'bm' },
	{ name: 'nails', code: 'bn' },
	{ name: 'neutral blocks', code: 'bo' },
	{ name: 'open and ring spanner- 10mm', code: 'bp' },
	{ name: 'open, ring or combined ended spanners', code: 'bq' },
	{ name: 'optical fibre cable', code: 'br' },
	{ name: 'outrigger bracket', code: 'bs' },
	{ name: 'padlocks general', code: 'bt' },
	{ name: 'pcb safe sign', code: 'bu' },
	{ name: 'pg clamps', code: 'bv' },
	{ name: 'pig tail bolt and nuts', code: 'bw' },
	{ name: 'pig tail coach screw', code: 'bx' },
	{ name: 'pin insulator r90', code: 'by' },
	{ name: 'pole cap', code: 'bz' },
	{ name: 'pole saver', code: 'ca' },
	{ name: 'pole top make offs', code: 'cb' },
	{ name: 'post polymeric insulators', code: 'cc' },
	{ name: 'pre-formed dead ends', code: 'cd' },
	{ name: 'prepaid cross arms', code: 'ce' },
	{ name: 'rain coats', code: 'cf' },
	{ name: 'ready board', code: 'cg' },
	{ name: 'safety shoes', code: 'ch' },
	{ name: 'screw drivers', code: 'ci' },
	{ name: 'self tapping screws', code: 'cj' },
	{ name: 'single phase prepayment meters inhemeter', code: 'ck' },
	{ name: 'socket thimble', code: 'cl' },
	{ name: 'solidal cable clips', code: 'cm' },
	{ name: 'spindle 800lbs', code: 'cn' },
	{ name: 'spindles', code: 'co' },
	{ name: 'splice', code: 'cp' },
	{ name: 'stay bracket', code: 'cq' },
	{ name: 'stay insulators', code: 'cr' },
	{ name: 'stay rods', code: 'cs' },
	{ name: 'strain polymeric insulators', code: 'ct' },
	{ name: 'struts', code: 'cu' },
	{ name: 'surge arresters', code: 'cv' },
	{ name: 'thinner white spirit', code: 'cw' },
	{ name: 'tower clips', code: 'cx' },
	{ name: 'transformer oil', code: 'cy' },
	{ name: 'type k fuse links', code: 'cz' },
	{ name: 'wall plugs', code: 'da' },
	{ name: 'washers', code: 'db' },
	{ name: 'earth resistance tester', code: 'dc' },
	{ name: '8 inch adjustable wrench', code: 'dd' },
	{ name: '12sqmm strapping', code: 'de' },
	{ name: 'auger bit ', code: 'df' },
	{ name: 'band it strapping tool', code: 'dg' },
	{ name: 'buckle straps', code: 'dh' },
	{ name: 'pole tags', code: 'di' },
	{ name: 'pole stubs wood poles', code: 'dj' },
	{ name: 'terminating straps', code: 'dk' },
	{ name: 'fabricated x-arms', code: 'dl' },

    ];

     const [selectedCountry, setSelectedCountry] = useState(null);
     const [selectedSample, setSelectedSample] = useState(null);
     const [selectedMethod, setSelectedMethod] = useState(null);
       const countries = [
        { name: 'Poles', code: 'pol' },
        { name: 'Safe', code: 'sf' },
        { name: 'Safe', code: 'sfa' },
        { name: 'Safe', code: 'sfb' },
        { name: 'Safe', code: 'sfb' },
        { name: 'Safe', code: 'sbf' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'james', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];
  
     const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }
    const onSampleChange = (e) => {
        setSelectedSample(e.value);
    }
    const onMethodChange = (e) => {
        setSelectedMethod(e.value);
    }

   

 const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef(null);
    const items = [
        {
            label: 'Inspection of Materials',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Reviewing Materials',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation of Materials',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: '3rd Step Confirmation of Materials', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation of Materials',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Confirmation of Materials', detail: event.item.label });
            }
        },
       
    ];


  return (
    <>
 <table className="table table-bordered">
  <thead className=''>
    <tr style={{background:'#b5bd36', color:'#fff'}}>
      <th className='text-center' colSpan="8"><h1> Material Quality Inspection Report</h1></th>
    </tr>
  </thead>
  <tbody>
      <tr>
       
       <td className='text-start' colSpan="6">
        <div className="col-12 md:col-4">
          <div >
              <label htmlFor="username" className='me-3'>Name Material:</label>
              <Dropdown value={selectedSample} options={sample} onChange={onSampleChange} optionLabel="name" filter showClear filterBy="name" placeholder="Select a Material"
                   />
            </div>
          
        </div>
        </td>

        <td className='text-start' colSpan="2">
          <div className="col-12 md:col-4">
            <div >
           <label htmlFor="username" className='me-3'>Delivery Date:</label>
      { showCalendar && <Calendar value={selectedDate} onChange={onDateSelect} showButtonBar={true} showTime={false} dateFormat="yy-mm-dd" /> }
            </div>
          </div>
          </td>
    
    </tr>
    <tr>
        <td className='text-start' colSpan="6">
            <div className="col-12 md:col-4">
            <div >
              <label htmlFor="username" className='me-3'>Supplier/Manufacturer:</label>
              <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            </div>
        </td>


       <td className='text-start' colSpan="2">
            <div className="col-12 md:col-4">
              <div >
               <label htmlFor="username" className='me-3'> Inspection Date:</label>
      { showCalendar && <Calendar value={selectedDate} onChange={onDateSelect} showButtonBar={true} showTime={false} dateFormat="yy-mm-dd" /> }

              </div>
            </div>
        </td>
    </tr>
    
    <tr>
        <td className='text-start' colSpan="6">
            <div className="col-12 md:col-4">
            <div >
              <label htmlFor="username" className='me-3'>Method of Inspection:</label>
                <Dropdown value={selectedMethod} options={method} onChange={onMethodChange} optionLabel="name" placeholder="Method of Inspection" />

            </div>

            </div>
        </td>

    
       <td className='text-start' colSpan="2">
          <div className="col-12 md:col-4">
            <div >
              <label htmlFor="username" className='me-3'>Delivery Note:</label>
              <InputText id="username" placeholder="delivery note" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
         </td>
    </tr>
     <tr>
     <td className='text-start' colSpan="6">
          <div className="col-12 md:col-4">
           <div >
              <label htmlFor="username" className='me-3'>Contract  No:</label>
               <InputNumber inputId="integeronly" value={value2} onValueChange={(e) => setValue2(e.value)} />

            </div>
          </div>
         </td>
      
      <td className='' colSpan="2">
      <div className="col-12 md:col-4">
        
        <div >
              <label htmlFor="username" className='me-3'>Invoice No:</label>
              <InputText id="username" placeholder="Invoice no" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
      </div>
        </td>
    </tr>
    <tr>
      <td className='text-center' colSpan="4">
      <div className="col-12 md:col-4">
          
           <div >
              <label htmlFor="username" className='me-3'>Total Inspected:</label>
               <InputNumber inputId="integeronly" value={value2} onValueChange={(e) => setValue2(e.value)} />

            </div>
            </div>
       
      </td>
      <td className='text-center' colSpan="2">
      
        <div >
              <label htmlFor="username" className='me-3'>Total Pass:</label>
               <InputNumber inputId="integeronly" value={value2} onValueChange={(e) => setValue2(e.value)} />

            </div>
      </td>
      <td className='' colSpan="2">
      
        <div >
              <label htmlFor="username" className='me-3'>Total Failuire:</label>
               <InputNumber inputId="integeronly" value={value2} onValueChange={(e) => setValue2(e.value)} />

            </div>
      </td>
    </tr>
    <tr>
      <td colSpan={8}>
      <Divider align="center">
      <span  style={{background:'#b5bd36', color:'#fff',borderRadius:'5px',}}>Inspection comment</span>
      </Divider>
      </td>

</tr>
 <tr>
  <td colSpan={4}>
<h5>Umeme Requirements</h5>
  </td>
<Hero selectedSample={selectedSample} param={paramData}/>
</tr>
<tr>
  <td colSpan={8}>
     <div>
      <div className="card ">
          <h6>Remarks/Comments (Indicated the Total quantities passed/Failed)</h6>
          <Editor style={{ height: '150px' }} value={text1} onTextChange={(e) => setText1(e.htmlValue)}  />
      </div>
      {/* <div dangerouslySetInnerHTML={{__html: text1}} /> */}
 
      <div className='text-end m-3 '>
            <Button label="Submit" className="p-button-raised p-button-text me-2"  style={{background:'#b5bd36', color:'#fff'}}/>
            <Button label="Cancel" className="p-button-raised p-button-danger p-button-text" />
        </div>
   </div>

  </td>

</tr>
   
   
  </tbody>
</table>






   

      <p>Field: {username} <span>{}</span></p>
             <label> Selected Item: <span className='text-warning'>{selectedCity1 ? selectedCity1.name : 'none'}</span></label>  Switch value:  <span className='text-warning'> {checked1 ? 'pass' : 'fail'}</span> Observation:
 <span className='text-warning m-2'>{textValue}</span>Selected Date: <span className='text-warning m-2'> {selectedDate ? moment(selectedDate).fromNow() : 'No date'}</span>
 

   <span className='me-2 text-warning'>{selectedCountry ? selectedCountry.name : 'none'}</span><span className='me-2 text-warning'>{selectedSample ? selectedSample.name : 'none'}</span> <span className='text-warning'>{value2 ? value2: 'none'}</span>
 <div dangerouslySetInnerHTML={{__html: text1}} />

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