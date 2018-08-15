import React, {Component} from 'react';
import './App.css';
import Toolbar from "./toolbar/Toolbar";
import Field from "./field/Field";


class App extends Component {
  render() {
    return (
      <div className="app">
          <Toolbar/>
          <Field/>
      </div>
    );
  }
}

export default App;
