import React from 'react';
import App from '../../../App';
import { AboutUS } from '../../pages/About/AboutUS';
import { ContactUS } from '../../pages/Contact/ContactUS';
import { Home } from '../../pages/Home/Home';
import { Ancla } from '../Ancla/Ancla';


export const NavHome = () => {
  return (
    <>
      <nav className='navHome'>
        <Ancla 
          style="ancla" 
          references="/" 
          textAncla="HOM 3"
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
