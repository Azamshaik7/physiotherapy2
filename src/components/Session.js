import React from 'react'
import './session.css'

export default function Session() {
    return (
        <div className='sessionOuter'>
            <div className='sessionContainer'>
                <div className='sessionhead'>
                    <h1>Book Free session</h1>
                </div>
                <form className='sessionform'>
                    <div className='sessioninputs'>
                    <select>
                            <option>Kukatpally</option>
                            <option>Gachibowli</option>
                            <option>Jubilee Hills</option>
                            <option>Kondapur</option>
                            <option> Dilsukhnagar</option>
                            <option> Madhapur</option>
                            <option>Other Cities</option>
                        </select>
                        <input type='date' placeholder='Enter Date' />
                        <select>
                            <option>Select Category</option>
                            <option>Lower Back Pain</option>
                            <option>Neck and Upper Back Pain</option>
                            <option>Knee Pain</option>
                            <option> Shoulder Pain</option>
                            <option> Wrist Pain</option>
                            <option>Other Chronic Pain</option>
                        </select>
                    </div>
                    <div className='sessionagree'>
                        <input type='checkbox' checked />
                        <p>I have read and agree to FlexifyMe's Terms of Use and Privacy Policy
                            I, hereby authorize FlexifyMe to contact me. It will override my registry on the NCPR.</p>
                    </div>
                    <div className='sessionbtn'>
                        <button>Book a Free Demo</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
