
import React, { useState } from 'react';
import { Editor } from 'primereact/editor';
                              
 
const EditorDemo = () => {
    
    const [text1, setText1] = useState('<div>!</div>');
  

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    }

    // eslint-disable-next-line no-unused-vars
    const header = renderHeader();

    return (
        <div>
            <div className="card w-75">
                <h5>Default</h5>
                <Editor style={{ height: '200px' }} value={text1} onTextChange={(e) => setText1(e.htmlValue)}  />
            </div>
            <div dangerouslySetInnerHTML={{__html: text1}} />
        </div>
    );
}
                 
export default EditorDemo;