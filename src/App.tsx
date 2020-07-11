import React from 'react';
import "./styles/main.css";
import { Footer } from "./components/Footer/Footer";

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow" />
      <Footer />
    </div>
  );
}

export default App;
