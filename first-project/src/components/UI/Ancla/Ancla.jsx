import React from 'react'

export const  Ancla = ({style, references, textAncla}) =>{
  return (
      <>
       <a className={style} href="{references}">{textAncla}</a>
      </>    
  )
}
