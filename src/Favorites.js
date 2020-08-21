import React, { Component } from "react";
import BeyCard from './BeyCard';

export default class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.props.beys.map(bey => <BeyCard key={bey.id} {...bey}/>)}
      </div>
    );
  }
}
