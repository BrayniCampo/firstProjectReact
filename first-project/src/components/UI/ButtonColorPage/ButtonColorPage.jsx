import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button'

export const ButtonColorPage = () => {

    const [modeDark, setModeDark] = useState(false);
    const [title, setTitle] = useState('Dark mode');

    const handleOn = () => {
        setModeDark(!modeDark);
    }

    useEffect(() => {

        if(modeDark) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            setTitle('Light Mode')
        }
        else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }, [modeDark])


    return (

        <div className='container-dark'>
            <h2>Button</h2>
            <Button
                event={handleOn}
                style="buttonDark"
                textButton="on"
            />                     
            
        </div>
    )
}
