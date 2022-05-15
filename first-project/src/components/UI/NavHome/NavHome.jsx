import React from 'react';
import { Ancla } from '../Ancla/Ancla';

export const NavHome = () => {
  return (
    <>
      <nav className='navHome'>
        
        <Ancla 
          style="ancla" 
          references="https://google.com" 
          textAncla="AboutUS"
        />

        <Ancla 
          style="ancla" 
          references="https://google.com" 
          textAncla="Home"
        />

        <Ancla 
          style="ancla" 
          references="https://google.com" 
          textAncla="ContactUS"
        />
      </nav>
    </>

  )
}
