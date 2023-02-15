import { Editor } from 'primereact/editor';
import React, { useState } from 'react';

const MyComponent = () => {
  const [content, setContent] = useState(
    '<table class="my-table"><thead>    <tr>      <th>#</th>      <th>First</th>    <th>Last</th>      <th>Handle</th>    </tr>  </thead> </tbody> </table>'
  );

  return <Editor value={content} onTextChange={e => setContent(e.htmlValue)} />;
};

export default MyComponent;
