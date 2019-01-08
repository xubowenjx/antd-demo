import React, { Component } from 'react';
import {Button} from 'antd';
import './App.css';

class App extends Component {
  clickMe(value){
    alert(value)
  }
  render() {
    return (
      <div className="App">
        <Button onClick={this.clickMe.bind(this,'haha')} type="primary">button</Button>
      </div>
    );
  }
}

export default App;
