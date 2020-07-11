import React from 'react';
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';
import Card from "./components/Card/Card";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./styles/main.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Card
        name="Andrew Ng"
        position="Founder"
        picture="https://pbs.twimg.com/profile_images/733174243714682880/oyG30NEH_400x400.jpg"
        iconType={['github', 'linkedin']}
        iconURL={['https://www.github.com', 'https://www.linkedin.com']}
      />
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
