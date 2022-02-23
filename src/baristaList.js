import React from 'react'

export default function BaristaList(props){
    const { info } = props
    
//Form Questions: 
    // name: '',
    // favBrewMethod: '',
    // favCountryOfOrigin: '',
    // favDrink: '',
    // howWavy: '',

    return (
       <div className='barista-container'>
           <h2>Registered Collective Members:</h2>
           <h3>{info.name}</h3>
           <div className='more-info-wrapper'>
               <div className='drinks'>
                    <p>Preferred Brew Method: {info.favBrewMethod}</p>
                    <p>Favorite Drink: {info.favDrink}</p>
               </div>
               <div className='rand-info'>
                <p>Favorite Country of Origin: {info.favCountryOfOrigin}</p>
                <p>Prefers the: {info.howWavy}</p>
               </div>
           </div>
           

       </div> 
    );
}