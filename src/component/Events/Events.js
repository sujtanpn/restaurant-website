import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRipple className='bg-image' rippleTag='div' rippleColor='light'>
      <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <p className='text-white mb-0'>Can you see me?</p>
          </div>
        </div>
        <div className='hover-overlay'>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
        </div>
      </a>
    </MDBRipple>
  );
}