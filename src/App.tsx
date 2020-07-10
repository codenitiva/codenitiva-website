import React from 'react';
import "./styles/main.css";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow" />
      <Footer />
    </div>
  )
}

export default App;
