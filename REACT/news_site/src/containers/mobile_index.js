import React, {Component} from 'react';
import MobileHeader from '../components/mobile_header';
import MobileFooter from '../components/mobile_footer';
import MobileList from '../components/mobile_list';

import {Tabs, Carousel} from 'antd';

const TabPane = Tabs.TabPane;

export default class MobileIndex extends Component {
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
                <MobileHeader></MobileHeader>                
                <Tabs>
                    <TabPane tab="头条" key="1">
                    <div className="carousel">
                        <Carousel {...settings}>
                            <div><img src={require('../images/carousel_1.jpg')} alt=""/></div>
                            <div><img src={require('../images/carousel_2.jpg')} alt=""/></div>
                            <div><img src={require('../images/carousel_3.jpg')} alt=""/></div>
                            <div><img src={require('../images/carousel_4.jpg')} alt=""/></div>
                        </Carousel>
                    </div>
                        <MobileList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList count={20} type="guonei"/>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count={20} type="guoji"/>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList count={20} type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}