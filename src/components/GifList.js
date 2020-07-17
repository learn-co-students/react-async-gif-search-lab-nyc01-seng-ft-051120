
import React from 'react'
import { render } from 'react-dom'

const GifList = (props) =>  { 
        return (
      
                <ul>
                    {props.gifs.map(gif =>
                        <li><img src={gif} /></li>
                    )}
                </ul>
     
        )
    

}


export default GifList
