import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookAppointment from './pages/BookAppointment';
import Home from './pages/Home';

export default function Approuter() {
  return (
    <Router basename="/physiotherapy2"> {/* Added basename here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}
