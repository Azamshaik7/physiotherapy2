import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
      <div className="navbar">
        {/* Logo and Title on the Left */}
        <div className="logomain">
          <img className="logo" src="./images/logo1.jpg" alt="Physio Works Logo" />
          <p>Physio Works</p>
        </div>

        {/* Right-Aligned Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navigation Links and Book Button (inside dropdown on mobile) */}
        <ul className="ulList">
          <li><Link to="/">Home</Link></li> 
          <li>Online Yoga</li>
          <li>Services</li>
          <li>Healing Stories</li>
          <li>Sign in</li>
          <li>
            <Link to="/book-appointment">
              <button className="btn22">Book an Appointment</button>
            </Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
}




























































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
//       <div className="navbar">
//         {/* Hamburger icon for mobile */}
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>

//         <div className="logomain">
//           <img className="logo" src="./images/logo1.jpg" alt="Physio Works Logo" />
//           <p>Physio Works</p>
//         </div>

//         {/* Navigation Links */}
//         <ul className="ulList">
//           <li><Link to="/">Home</Link></li> 
//           <li>Online Yoga</li>
//           <li>Services</li>
//           <li>Healing Stories</li>
//           <li>Sign in</li>
//         </ul>

//         {/* Book an Appointment Button */}
//         <div className="btnmain1">
//           <Link to="/book-appointment">
//             <button className="btn22">Book an Appointment</button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }







































































// import React from 'react';
// import { Link } from 'react-router-dom';
// import * as ReactDOM from 'react-dom';
// import './navbar.css';

// export default function Navbar() {
//   return (
//     <nav className="navbarMain">
//       <div className="navbar">
//         <div className="logomain">
//           <img className="logo" src="./images/logo1.jpg" alt="Physio Works Logo" />
//           <p>Physio Works</p>
//         </div>
//         <ul className="ulList">
//           <li><Link to="/">Home</Link></li> 
//           <li>Online Yoga</li>
//           <li>Services</li>
//           <li>Healing Stories</li>
//           <li>Sign in</li>
//         </ul>
//         <div className="btnmain1">
//           <Link to="/book-appointment">
//             <button className="btn22">Book an Appointment</button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }







































