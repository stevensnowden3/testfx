import { Editor } from 'primereact/editor';

const MyComponent = () => {
  const [content, setContent] = useState('<table></table>');

  const addRandomValues = () => {
    let tableRows = '';
    for (let i = 0; i < 5; i++) {
      let rowData = '';
      for (let j = 0; j < 5; j++) {
        rowData += '<td>' + Math.floor(Math.random() * 100) + '</td>';
      }
      tableRows += '<tr>' + rowData + '</tr>';
    }
    setContent('<table>' + tableRows + '</table>');
  };

  return (
    <>
      <Editor value={content} onTextChange={e => setContent(e.htmlValue)} />
      <button onClick={addRandomValues}>Add Random Values</button>
    </>
  );
};
export default MyComponent;
