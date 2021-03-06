import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Signin from './components/Signin';


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />    
        <Route path="/profile" component={Profile} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
      </div>  
        <Footer/>
    </div>
  );
}

export default App;
