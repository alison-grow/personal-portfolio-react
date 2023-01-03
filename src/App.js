import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route exact path='/' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } 
          />
          <Route path='/Projects' element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          } 
          />
          <Route path='/Contact' element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } 
          />
        </Routes>
      </HashRouter>
  );
}

export default App;
