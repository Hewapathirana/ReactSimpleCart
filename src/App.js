import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
<div className="App">

 <NavBar/>
 <main className="container">
     <Counters/>
 </main>

</div>

    );
  }
}

export default App;
