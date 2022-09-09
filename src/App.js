import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';

import './App.css';

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
<NavBar />
<About />
<Projects />
<Skills />
<Testimonials />
<Contact />

    </main>
  );
}


