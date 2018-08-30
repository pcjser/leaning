import React, { Component } from "react";
// import { Route, Link } from 'react-router-dom';
import events from "../../utils/events"


class Personal extends Component {
  componentDidMount() {
    events.emit("navStatusEvent", true)
  }
  render() {
    return (
      <div>
        <h2>Personal</h2>        
      </div> 
    )
  }
}

export default Personal