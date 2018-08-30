import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class ScrollRestoration extends Component {
  componentDidMount(prevProps) {
    window.history.scrollRestoration = 'manual'
  }

  render() {
    return null
  }
}

export default withRouter(ScrollRestoration)
// export default ScrollRestoration