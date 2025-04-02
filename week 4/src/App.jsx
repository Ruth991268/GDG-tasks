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
      <Route path="notfound" element={<NoteFound />} />
      <Route path="*" element={<NoteFound />} />
    </Routes>
  );
}