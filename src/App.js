import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'


class App extends Component {
  state = {
    beys: []
  }
  
  componentDidMount(){
    fetch(`http://localhost:4000/beys`)
      .then(r => r.json())
      .then(beys => this.setState({ beys }))
  }

  render() {
    const { beys } = this.state

    return (
      <div className="container">
        <BeyContainer beys={beys}/>
        <Favorites beys={beys.filter(bey => bey.favorite)}/>
      </div>
    );
  }
};

export default App;
