import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NumberConversion = () => {
  const [numberToWordsResult, setNumberToWordsResult] = useState('');
  const [numberToDollarsResult, setNumberToDollarsResult] = useState('');

  const numberToWords = async num => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:NumberToWords>
            <web:ubiNum>${num}</web:ubiNum>
          </web:NumberToWords>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const res = await axios.post('https://www.dataaccess.com/webservicesserver/numberconversion.wso', xml, {
      headers: { 'Content-Type': 'text/xml' }
    });

    const { data } = res.data;
    const result = data['soap:Envelope']['soap:Body'].NumberToWordsResponse.NumberToWordsResult;
    setNumberToWordsResult(result);
  };

  const numberToDollars = async num => {
    const xml = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
        <soapenv:Header/>
        <soapenv:Body>
          <web:NumberToDollars>
            <web:dNum>${num}</web:dNum>
          </web:NumberToDollars>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const res = await axios.post('https://www.dataaccess.com/webservicesserver/numberconversion.wso', xml, {
      headers: { 'Content-Type': 'text/xml' }
    });

    const { data } = res.data;
    const result = data['soap:Envelope']['soap:Body'].NumberToDollarsResponse.NumberToDollarsResult;
    setNumberToDollarsResult(result);
  };

  useEffect(() => {
    numberToWords(123);
    numberToDollars(456);
  }, []);

  return (
    <div>
      <p>Number to Words Result: {numberToWordsResult}</p>
      <p>Number to Dollars Result: {numberToDollarsResult}</p>
    </div>
  );
};

export default NumberConversion;
