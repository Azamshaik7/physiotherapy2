import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className=''>
      <div className='headerSection'>
        <div>
            <img className='img1' src='./images/headerBgimg.webp'/>
        </div>
        <div className='headercontainer'>
            <h1>Online Physiotherapy</h1>
            <h2>Live a healthy and happy life</h2>
            <h3>free from pain!</h3>
            <p className='para1'>Combining physiotherapy with latest research and</p> 
            <p className='para2'>technology to deliver life long results</p>
            <div>
                <button className='btn1'>Say Goodbye To Pain Today</button>
            </div>
            <div className='headerImages'>
                <img src='./images/hipaa.webp'/>
                <img src='./images/gdpr.webp'/>
                <img src='./images/iso.webp'/>
            </div>
            <li className='forhidden'>
            <Link to="/book-appointment">
              <button className="btn22">Book an Appointment</button>
            </Link> 
          </li>
        </div>
      </div>
    </div>
  )
}
