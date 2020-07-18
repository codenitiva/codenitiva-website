import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from "react-helmet";

import "./styles/main.css";

import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import About from './pages/About/About';

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Helmet titleTemplate="Codenitiva | %s" defaultTitle="Codenitiva">
        <meta name="description" content="Codenitiva, Platform for Developers to sharing knowledge" />
      </Helmet>
      <NavBar />
      <BrowserRouter>
        <Switch>
          {/* TODO: Bind components to each route */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
