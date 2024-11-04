import React from 'react'
import './treatment.css'

export default function Treatment() {
  return (
    <div className='treatmentOuter'>
      <div className='treatmentContainer'>
        <div className='treatment1'>
            <h1>What we Treat</h1>
            <p>Where does it hurt? Our tailored exercise</p>
            <p>program targets the specific areas where</p>
            <p>you feel pain</p>
        </div>
        <div className='treatment2'>
             <div className='treatment2Image'>
                <img src='./images/WhatWeTreat.webp'/>
             </div>
             <div className='painsection'>
                <div>
                  <h1 className='selected'>Neck</h1>
                </div>
                <div>
                  <p>Overcome Cervical, chronic <br/> neck pain, stiffness and <br/>others <span>Know more</span> </p>
                </div>
                <div>
                   <h1>Lower Back</h1>
                </div>
                <div>
                  <h1>Wrist</h1>
                </div>
                <div><h1>Hand</h1></div>
                <div><h1>Knee</h1></div>
                <div><h1>Ankle</h1></div>
             </div>
        </div>
      </div>
    </div>
  )
}
