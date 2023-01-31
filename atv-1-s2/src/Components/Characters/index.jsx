import React from 'react'
import { CharCard } from '../CharCard'
import style from './style.module.css'

export const Characters = ({charList}) => {
  return (
    <div>
        <ul>

            {
              charList.map((char)=>(
                <CharCard key={char.id} charInfo={char}/>
              ))
            }

        </ul>
    </div>
  )
}
