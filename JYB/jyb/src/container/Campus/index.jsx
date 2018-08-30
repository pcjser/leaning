import React, { Component } from "react";
// import { Route, Link } from 'react-router-dom';
import events from "../../utils/events"


class Campus extends Component {
  componentDidMount() {
    events.emit("navStatusEvent", true)
  }
  render() {
    return (
      <div>
        <h2>Campus</h2>        
      </div> 
    )
  }
}

export default Campus