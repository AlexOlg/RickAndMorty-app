import React from 'react'

const Characters = ({characters}) => {
  return (
    <div className='row'>
        {
          characters.map((item,index) => (
            <div key={index} className='col mb-4' style={{maxWidth:"280px", alignItems:"center"}}>
              <div className='card'>
                <img src={item.image} alt='personaje'/>
                <h3 className='text-center'>{item.name}</h3>
                <hr/>
                <ul>
                  <li>Specie: {item.species}</li>
                  <li>Genero: {item.gender}</li> 
                </ul>
              </div>
            </div>
          ))
        }     
    </div>
  )
}

export default Characters