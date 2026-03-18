import React from 'react'
import ServiceSection1 from '../components/service/ServiceSection1'
import ServiceSection2 from '../components/service/ServiceSection2'
import ServiceSection3 from '../components/service/ServiceSection3'
import ServiceSection4 from '../components/service/ServiceSection4'
import servBackground from '../assets/img/ser1.webp';

function Services() {
  return (
    <>
      <div className='min-h-screen'>
        <ServiceSection1 />

        
        <div 
          className="relative bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${servBackground})` }}
        >
         
          <div className="relative z-10">
            <ServiceSection2 />
            <ServiceSection3 />
            <ServiceSection4 />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services