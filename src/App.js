import React, { Component } from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import ZipContainer from './components/ZipContainer';

class App extends Component{
  render(){
  return (
    <div className="App">
        <h1>Zip Code Search</h1>
          {console.log(ZipContainer)}
          <ZipContainer/>
    </div>
  );
  }
}

export default App;
