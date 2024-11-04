import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footerOuter'>
      <div className='footerInner'>
        <div className='footerContainer'>
        <div className='footerHeadImageMain'>
            <img src='/images/footer-logo.svg'/>
        </div>
        <div className='footercontainerbox'>
            <div className='footerbox1'>
               <p>  Livespire Pvt Ltd, Office No. 505-506, 5th <br/> Floor, FlexifyMe Physiotherapy Kharadi <br/> center, The Space, opp. Gera Bunglows, <br/> Rajaram Patil Nagar, Vitthal Nagar, Kharadi, <br/> Pune, Maharashtra 411014
                   <br/> +91 7447440796
                   <br/>  info@flexifyme.com</p>
            </div>
            <div className='footerbox2'>
                <p>1165 club circle, N207, Brookfield WI 53005. <br/> USA
               <br/>  +1 (512) 3948579
                <br/> info@flexifyme.com</p>
            </div>
            <div className='footerbox3'>
              <p>Jumeirah Beach Residences. Al Sayorah <br/> Street, 34CJ+X8V Dubai, UAE
              <br/>  +1 (512) 3948579
              <br/> info@flexifyme.com</p>
            </div>
        </div>
        <div className='footerlistouter'>
            <ul className='footerlistinner'>
                <li>Online Yoga Classes</li>
                <li>How it Works</li>
                <li>Experts</li>
                <li>Blogs</li>
                <li>privacy policy</li>
                <li>Features</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>
        <div className='footericonouter'>
            <div className='footericoninner'>
                <img src='/images/Twitter_white.png'/>
                <img src='/images/Facebook_white.png'/>
                <img src='/images/Instagram_white.png'/>
                <img className='linkedin' src='/images/linkedin2.png'/>
            </div>
        </div>
        <div className='rightscontainer'>
            <p>©2024 Livespire Pvt Ltd. All Right Reserved</p>
        </div>
       </div>
      </div>
    </div>
  )
}
