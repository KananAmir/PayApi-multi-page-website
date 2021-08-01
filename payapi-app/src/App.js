import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home/Home';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import MyHeader from '../src/components/MyHeader'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <MyHeader/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
