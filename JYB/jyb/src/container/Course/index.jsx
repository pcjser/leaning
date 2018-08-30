import React, { Component } from 'react';
import {Carousel} from 'antd-mobile';
import events from '../../utils/events';
import './course.scss';

const list = ['banner01.jpg', 'banner02.jpg']

class Course extends Component {
  componentDidMount() {
    events.emit("navStatusEvent", true)
  }
  render() {
    return (
      <div className="course-page">
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
      </div> 
    )
  }
}

export default Course