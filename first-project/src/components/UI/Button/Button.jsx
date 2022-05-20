import React from 'react'

export const Button = ({style, event,textButton}) => {
  return (    
    <button onClick={event} className={style}>{textButton}</button>
  )
}
