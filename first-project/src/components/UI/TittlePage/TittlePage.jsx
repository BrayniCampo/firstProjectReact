import React from 'react'

export const TittlePage = ({style, textTittle="Mi primera página"}) => {
//export const TittlePage = ({style, textTittle}) => {
  return (
    <div className='divTitle'>
      <h1 className={style}>{textTittle}</h1>
    </div>
  )
}
