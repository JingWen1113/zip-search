import React, { Component } from "react";
import "./App.css";
import ZipContainer from './components/ZipContainer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        Allplaces:[],
        Zip: ""
    }
}
  render(){
  return (
    <div className="App">
        <h1>Zip Code Search</h1>
          <ZipContainer/>
    </div>
  );
  }
}

export default App;
