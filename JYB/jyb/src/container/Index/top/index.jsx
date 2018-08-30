import React, {Component} from "react";
import {Carousel} from 'antd-mobile';
import './top.scss';

class Top extends Component {
  constructor() {
    super()
    this.state = {
      topicList: [
        '一路一桥总关情 习近平指“路”脱贫攻坚',
        '彰显自觉自信、开放透明的政党形象	新时代',
        '一览无余，盘点2017宏观经济大事件	领航新征程',
        '我国首次发布绿色发展指数评价各地发展质量',
        '回首2017，十九大绘就伟大梦想蓝图	理上网来',
        '一碗爱心面温暖一座城	司机帮车祸男童脱险	暖新闻',
        '人民日报谈煤改气：让煤不再“英雄气短”',
        '港媒：北京治霾正取得成效 多了许多蓝天',
        '多国联军空袭也门一市场致40人死亡 数十人受伤'
      ]
    }
  }
  render() {
    return (
      <div className="top-wrap">
        <div className="top-pic">
          <img src={require('./pic.jpg')} alt=""/>
        </div>
        <div className="top-carousel">
          <Carousel
            className="my-carousel"
            vertical
            dots={false}
            dragging={false}
            swiping={false}
            autoplay
            infinite={true}
            speed={500}
            autoplayInterval={2000}>
            {this
              .state
              .topicList
              .map(topic => (
                <div className="topic-item" key={topic}>
                  <span className="topic-tag">最新</span>
                  <p className="topic-title">{topic}</p>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Top