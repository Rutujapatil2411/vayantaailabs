import { Outlet } from 'react-router-dom';
import React from 'react'
import KeyClients from '../components/More/KeyClients';

function More() {
  return (
    <>
    <div className="min-h-screen">
      <KeyClients />
      
    </div>
    </>
  )
}

export default More;