import React from 'react'
import './solution.css'

export default function Solution() {
  return (
    <div className='solutionOuter'>
      <div className='solutionInner'>
         <div className='headContainer'>
            <h1>Our Solutions</h1>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner1'>
                <h1>Ai powerred scanning</h1>
                <p>Let science first understand the strength, <br/> weaknesses, and alignment issues in the body</p>
             </div>
             <div className='solutionInner2'>
                <img src='/images/aitrack.webp'/>
             </div>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner4'>
                <img src='/images/plan2.webp'/>
             </div>
             <div className='solutionInner3'>
                <h1>1-On-1 sessions with an <br/> Physiotherapist</h1>
                <p>Scanning results from the technology are analyzed <br/> deeply by the Physiotherapist to further understand <br/> the body better</p>

             </div>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner5'>
                <h1>A detailed assessment report</h1>
                <p>Data from technology and Physiotherapist are <br/> combined to build a customized plan for recovery</p>
             </div>
             <div className='solutionInner6'>
                <img src='/images/plan4.webp'/>
             </div>
         </div>
         <div className='solutionContainer1'>
             <div className='solutionInner8'>
                <img src='/images/plan5.webp'/>
             </div>
             <div className='solutionInner7'>
                <h1>Starting the program and <br/> constant progress monitoring</h1>
                <p>Start sessions in expert care and constant <br/> monitoring of progress to help you reach a pain-free <br/> life forever</p>
             </div>
         </div>
      </div>
    </div>
  )
}
