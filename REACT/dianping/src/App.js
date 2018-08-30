import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initDone: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        initDone: true
      })
    }, 2000);
  }
  render() {
    return (
      <div>
      <p>hello word!</p>
      {
        this.state.initDone ?
        this.props.children 
        : <div>加载中...</div>
      }
      </div>
    );
  }
}

export default App;
