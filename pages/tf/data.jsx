import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mongoose from 'mongoose';

const connect = () => {
  useEffect(() => {
    const connectDb = async () => {
      const url = 'mongodb+srv://dev:itWorks101@cluster0.qxvc3y2.mongodb.net/?retryWrites=true&w=majority';
      try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Successfully connected to the database');
        console.log('failed');
        console.log('in connectfail');
      } catch (err) {
        console.log(err);
        console.log('failed');
      }
    };
    console.log('in connect');
  }, []);
  return (
    <div className="next-steps my-5" data-testid="content">
      <h2 className="my-5 text-center" data-testid="content-title">
        Welcome to Umeme's Warehouse Inspection Checklist System
      </h2>
    </div>
  );
};

export default connect;
