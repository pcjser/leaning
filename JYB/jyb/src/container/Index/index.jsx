import React, { Component } from "react";
import { WhiteSpace, Carousel } from "antd-mobile";

import events from "../../utils/events"
import './index.scss';

//component
import Head from './Head';
import LinkMap from './Link';
import Top from './Top';
import ListTabs from './ListTabs';

const list = ['banner01.jpg', 'banner02.jpg', 'banner03.jpg'];

class Index extends Component {
  componentDidMount() {
    events.emit("navStatusEvent", true)    
  }
  componentDidUpdate() {
    events.emit("navStatusEvent", true)
  }
  render() {
    return (
      <div className="index-page">
        <Head />
        <div className="banner">
          <Carousel autoplay infinite speed={200} selectedIndex={0}>
            {list.map((src, index) => (
                <a key={index} href="">
                  <img src={require(`./images/${src}`)} alt=""/>
                </a>
              ))
            }
          </Carousel>
        </div>
        <LinkMap />
        <WhiteSpace size="lg"/>
        <Top />
        <WhiteSpace size="lg"/>
        <ListTabs />
      </div> 
    )
  }
}

export default Index