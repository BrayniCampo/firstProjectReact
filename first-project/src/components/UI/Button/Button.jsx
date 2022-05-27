import React from 'react'

export const Button = ({style, event,textButton="AAA"}) => {
  return (    
    <button onClick={event} className={style}>{textButton}</button>
  )
}
