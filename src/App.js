import React from 'react';
import {
  Footer,
  Header,
  Possibility,
  WhatGpt,
  Features,
  Blog
} from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <Brand />
        <WhatGpt />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
