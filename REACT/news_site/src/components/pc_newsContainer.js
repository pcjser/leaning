import React, {Component} from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import PCNewsBlock from "./pc_news_block";
import PCNewsImageBlock from "./pc_news_image_block";

const TabPane = Tabs.TabPane

export default class PCNewsContainer extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainerr">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={require('../images/carousel_1.jpg')} alt=""/></div>
                                    <div><img src={require('../images/carousel_2.jpg')} alt=""/></div>
                                    <div><img src={require('../images/carousel_3.jpg')} alt=""/></div>
                                    <div><img src={require('../images/carousel_4.jpg')} alt=""/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="480px" cardTitle="国际头条" imageWidth="112px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock type="top" count={22} width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count={22} width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}