import { Editor } from 'primereact/editor';
import React, { useState } from 'react';

const MyComponent = () => {
  const [content, setContent] = useState('<table class="my-table"><thead>
    <tr>
      <th>#</th>
      <th>First</th>
      <th>Last</th>
      <th>Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>');

  return <Editor value={content} onTextChange={e => setContent(e.htmlValue)} />;
};

export default MyComponent;
