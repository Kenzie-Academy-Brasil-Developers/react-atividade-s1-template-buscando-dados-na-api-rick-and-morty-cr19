import React from 'react'
import { StyledCharacter } from './style'
import style from './style.module.css'


export const CharCard = ({charInfo}) => {

  console.log(charInfo)
  return (
            <StyledCharacter status={charInfo.status}>
              <p> <strong> {charInfo.name} </strong> </p>
              <p> Origin: {charInfo.origin.name}</p>
              <p> Species: {charInfo.species}</p>
              <img src={charInfo.image} alt=""/>
              {
              charInfo.status == 'Alive' && <span>Alive</span>
              }
              {
              charInfo.status == 'Dead' && <span>Dead</span>
              }
              {
              charInfo.status == 'unknown' && <span>Unknown</span>
              }
            </StyledCharacter>
            
        
    
  )
}

