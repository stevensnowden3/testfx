import React, { useRef } from 'react';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';

const MyComponent = () => {
  const divRef = useRef(null);

  return (
    <>
      <div ref={divRef}>
        <h1>My Div Content</h1>
        <p>This is the content that will be exported to the PDF</p>
      </div>
      <PDFDownloadLink document={<MyPdfDocument divRef={divRef} />} fileName="document.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </>
  );
};

const MyPdfDocument = ({ divRef }) => (
  <Document>
    <Page>
      <View>
        <Text>{divRef.current.innerHTML}</Text>
      </View>
    </Page>
  </Document>
);

export default MyComponent;
