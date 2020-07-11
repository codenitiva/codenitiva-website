import React from 'react';
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./styles/main.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <BrowserRouter>
        <Switch>
          {/* TODO: Bind components to each route */}
          <Route path="/" />
          <Route path="/about" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
