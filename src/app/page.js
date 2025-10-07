import React from 'react';
import MyCars from '../components/MyCars'; 

export default function page() {
  
  return (
    <div className='page' style={{border: '2px solid red', margin: '20px', padding: '20px'}}>
      <MyCars />
    </div>
  )
}
