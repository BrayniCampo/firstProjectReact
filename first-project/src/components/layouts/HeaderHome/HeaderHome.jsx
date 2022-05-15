import React from 'react';
import { Logo } from '../../UI/Logo/Logo';
import { NavHome } from '../../UI/NavHome/NavHome';
import { TittlePage } from '../../UI/TittlePage/TittlePage';

export const HeaderHome = () => {
  return (
    <>
      <header className='headerHome'>
        <div className='divLogoAndTitle'>
        <Logo/>
        <TittlePage
          style="title"
          textTittle='Mi primer página'
        />
        </div>
        <NavHome/>
      </header>
    </>
   
  )
}

