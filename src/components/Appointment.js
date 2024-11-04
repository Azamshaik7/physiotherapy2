import React from 'react'
import './appointment.css'

export default function Appiontment() {
  return (
    <div className='appointmentouter'>
      <div className='appointmentinner'>
        <div className='appoinmentImgConta'>
          <img src='/images/senior_bp_check.webp' />
        </div>
        <div className='appointmentcontainer'>
          <div className='acontainer1'>
            <h1>Recover In the Comfort of <br/>Your Home</h1>
          </div>
          <div className='acontainer2'>
            <div className='acontainerinner'>
              <div className='appointmentHead'>
                <h5>Book an Appointment</h5>
              </div>
              <form className='appointmentForm'>
                
                <input type='text' placeholder='Enter First and Last Name'/>
                
                <input type='text' placeholder='Enter First and Last Name' />
                <select>
                  <option selected="">Select City</option>
                  <option >Hyderabad</option>
                  <option >Visakhapatnam</option>
                </select>
                <select>
                  <option _ngcontent-ng-c3230112090="" value="" selected="">Select Service</option>
                  <option>Nursing at Home</option>
                  <option >Physiotherapy at Home</option>
                  <option>Transition Care / Rehabilitation</option>
                </select>
                <div>
                  <button>Submit</button>
                </div>
              </form>
              <p className='terms'>By submitting the form, you agree to <br/> <span>T&C</span> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
