import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Feedback from './components/Feedback';
import LastSection from './components/LastSection';
import Services from './components/Services';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Hero />
        <Services />
        <Expertise />
        <Feedback />
        <LastSection />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
