import React, { Component } from "react";
// import { Route, Link } from 'react-router-dom';
import events from "../../utils/events"


class Discovery extends Component {
  componentDidMount() {
    events.emit("navStatusEvent", true)
  }
  render() {
    return (
      <div>
        <h2>Discovery</h2>        
      </div> 
    )
  }
}

export default Discovery