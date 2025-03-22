import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';
import NoteFound from './NoteFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user" element={<User />} />
      <Route path="notfound" element={<NoteFound />} /> {/* Add this route */}
      <Route path="*" element={<NoteFound />} /> {/* Catch-all for other unknown routes */}
    </Routes>
  );
}