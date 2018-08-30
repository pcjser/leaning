import React, {Component} from 'react';
import {Control} from 'react-keeper';
import styled from "styled-components";

const AdBanner = styled.div `
  background: url(/static/media/ad_banner.d17f449d.jpg) no-repeat;
  background-size: 100% 100%;
  width: 10rem;
  height: 100vh;
  position: relative;
`
const CloseTimer = styled.div `
  width: 1.333333rem /* 100/75 */;
  height: .613333rem /* 46/75 */;
  border: 1px solid #727ea8;
  color: #a49f94;
  font-size: .293333rem /* 22/75 */;
  text-align: center;
  line-height: .613333rem /* 46/75 */;
  position: absolute;
  right: 0.24rem;
  top: 0.24rem;
`

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      timer: null,
      times: 5
    }
  }
  componentDidMount() {
    this.setState({timer: setInterval(() => {
        this.setState({
          times: this.state.times - 1
        })
        if (this.state.times === 0) {
          clearInterval(this.state.timer)
          this.setState({timer: null})
          Control.replace('/index')
        }
      }, 1000)})
  }

  closeAd() {
    clearInterval(this.state.timer)
    this.setState({timer: null})
    Control.replace('/index')
  }

  render() {
    return (
      <AdBanner>
        <CloseTimer onClick={this.closeAd.bind(this)}>{this.state.times}s 关闭</CloseTimer>
      </AdBanner>
    )
  }
}

export default Welcome