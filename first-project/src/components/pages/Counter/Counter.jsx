import React, { useState } from 'react'
import{Button} from '../../UI/Button/Button'

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  
  const sumar = () => {
    setCounter(counter + 1 );
  }

  
  function restar() {
      setCounter(counter -1 );
  }

  function reset() {

      setCounter(0)
  }
  
  return (
   <>
      <hr />
      <h1 className='counterTitle'>COUNTER OF NUMBERS</h1>
      <hr />
      <br />
      <h1 className='number0' >{counter}</h1>
      <br />
      <div className='boxButtons'>

        <Button
          style="btnSuma"
          event={sumar}
          textButton="SUMA"
        />
        <Button
          style="btnRestar"
          event={restar}
          textButton="RESTAR"
        />
        <Button
          style="btnRestar"
          event={reset}
          textButton="RESET"
        />
      </div>
      
    </>
  )
}
