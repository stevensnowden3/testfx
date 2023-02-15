import React, { useState, useEffect } from 'react';

const Checklist = ({ id }) => {
  const [checklist, setChecklist] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/checklists/1`);
        const data = await response.json();
        setChecklist(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {checklist ? (
        <>
          <h1>Checklist</h1>
          <p>ID: {checklist.id}</p>
          <p>Name: {checklist.name}</p>
          <p>Description: {checklist.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Checklist;
