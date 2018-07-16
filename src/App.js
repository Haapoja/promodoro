import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Timer from "./Timer/Components/Timer"

class App extends Component {
  render() {
    return (
      <div className="panel panel-default app-content center-block">
        <div className="panel-body">
         <Timer />

        </div>
      </div>
    );
  }
}

export default App;
