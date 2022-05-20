import React from 'react'
import { Button } from '../../UI/Button/Button'

export const ButtonColorPage = () => {

    const changeColor = () => {
        const body =document.body;
        body.classList.toggle("dark")
      }
  return (
        <Button
            style="btnColor"
            event={changeColor}
            textButton="DAR AND WHITE"
        />
  )
}
