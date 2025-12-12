import React, { useState, useEffect } from 'react';
import './App.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import SocialLinks from './components/SocialLinks';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <Features />
        <ComingSoon />
        <CallToAction />
        <SocialLinks />
      </div>
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;

