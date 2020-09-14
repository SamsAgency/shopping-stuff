import React from 'react';
import './App.css';
import NothingHere from './Components/404/NothingHere';
import Homepage from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar/Navbar';
import ShopItems from './Components/Shop/ShopItems';
import About from './Components/About/About';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={ShopItems} />
            <Route component={NothingHere} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
