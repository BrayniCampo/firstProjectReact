import React from 'react'
import { Link } from 'react-router-dom'


export const  Ancla = ({style, references, textAncla}) =>{
  return (
      //<a className={style} href="{references}">{textAncla}</a>
      <>
        <nav className='navHome'>
          <Link className='ancla' to="/">HOME</Link>
          <Link className='ancla' to="/aboutUS">ABOUT</Link>
          <Link className='ancla' to="/contactUS">CONTACT</Link>
          <Link className='ancla' to="/counterNumbers">USE STATE</Link>
        </nav>
      
      </>
     
        
      
  )
}
