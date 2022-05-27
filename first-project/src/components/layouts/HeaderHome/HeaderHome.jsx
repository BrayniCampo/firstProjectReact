import React from 'react';
import { Logo } from '../../UI/Logo/Logo';
import { NavHome } from '../../UI/NavHome/NavHome';
import { TittlePage } from '../../UI/TittlePage/TittlePage';
import { Ancla } from '../../UI/Ancla/Ancla'
import { Footer } from '../Footer/Footer';
import { ButtonColorPage } from '../../UI/ButtonColorPage/ButtonColorPage';


export const HeaderHome = () => {
  return (

    /*
       <div className='divLogoAndTitle'>
        <Logo/>
        <TittlePage
          style="title"
          textTittle='Mi primer página'
        />
        </div>
    */
    <>
    
      <header className='headerHome'>
      <div className='divLogoAndTitle'>
        
        <Logo/>
        <TittlePage
          style="title"
          textTittle='Mi primer página'
        />
        </div>
        <Ancla/>
        <ButtonColorPage/>
      </header>
    </>
   
  )
}
