import React, {useState, useEffect} from 'react'

const URL ='https://rickandmortyapi.com/api/character/?name=';
const card = document.getElementById("card");
const text = document.getElementById("text");


export const ApiDeRick = () => {

  window.addEventListener('load', getCharacters())

  function getCharacters() {
    fetch(URL)
    .then(response => response.json())
    .then(data =>{
      data.results.forEach(element => {
        recorrer(element.image,element.name);
      });
    });
  }

  useEffect

  function recorrer(image, name){
    while(true){
      const container = document.createElement("div");
      let imageCard=document.createElement("img");
      imageCard.setAttribute('src', image);

      card.appendChild(imageCard);
      const nameCard=document.createElement("h1");                                                                
      nameCard.textContent = name;

      card.appendChild(nameCard);
      break
    }
  }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          



  return (

    <>
      <h1>INGRESE EL NOMBRE DEL PERSONAJE QUE BUSCA</h1>
      <input type="text" placeholder='Search Character' />
    
       <div id="card" className='card' onLoad={getCharacters()}></div>
    </>
   
  
  )
}
