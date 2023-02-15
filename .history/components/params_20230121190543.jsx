import React, { useState } from 'react';

const Hero = ({ selectedSample, param }) => {
  const [dummyArray] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Sara', age: 40 }
  ]);

  return (
    <>
      <tr>
        <td>
          <span className="me-2 text-warning">
            {selectedSample && selectedSample.code == 'a' ? (
              <div>
                {param.a.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'b' ? (
              <div>
                {param.b.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'c' ? (
              <div>
                {param.c.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'd' ? (
              <div>
                {param.d.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'e' ? (
              <div>
                {param.e.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyArray.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </span>
        </td>
      </tr>
    </>
  );
};

export default Hero;
