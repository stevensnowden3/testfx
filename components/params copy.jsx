import React from 'react';

import Logo from './Logo';

const Hero = ({selectedSample,param}) => (
    <>
 
  <td colSpan={4}>

<span className='me-2 text-warning'>
    {selectedSample && selectedSample.code == "a" ? (
        <div>
        {param.a.map((name) => (
        <span className='me-2'>{name},</span>
        ))}
        </div>
    ) : selectedSample && selectedSample.code === "b" ? (
        <div>
        {param.b.map((name) => (
        <span className='me-2'>{name},</span>
        ))}
        </div>
    ): selectedSample && selectedSample.code === "c" ? (
        <div>
        {param.c.map((name) => (
        <span className='me-2'>{name},</span>
        ))}
        </div>
    ) :  selectedSample && selectedSample.code === "d" ? (
        <div>
        {param.d.map((name) => (
        <span className='me-2'>{name},</span>
        ))}
        </div>
    ): selectedSample && selectedSample.code === "e" ? (
        <div>
        {param.e.map((name) => (
        <span className='me-2'>{name},</span>
        ))}
        </div>
    ) : 'none'}
</span>


  </td>

</>
);

export default Hero;
