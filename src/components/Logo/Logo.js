import React from 'react'
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo=()=>{
    return(
    <div className='ma4 mt0'>
        <Tilt className='Tilt br4 shadow-2' style={{width:100,height:100,}}>
            <div className='Tilt pa-1'>
                <h1><img style={{paddingTop:'5px'}} alt='brain' src={brain}/></h1>
            </div>
        </Tilt>
    </div>
    )
}

export default Logo;