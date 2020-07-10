import React from 'react';
import "./styles/main.css";
import { Footer } from "./components/Footer/Footer";

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;
