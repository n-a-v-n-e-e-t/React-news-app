import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  c = "navneet";
  render() {
    return <div> 
      <Navbar />
      <News country="in" category="science" pageSize={9} />
    </div>;
  }
}
