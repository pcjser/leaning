import React, { Component } from "react";
import { Row, Col, BackTop } from "antd";
import PCHeader from '../components/pc_header';
import PCFooter from '../components/pc_footer';
import PCNewsImageBlock from "../components/pc_news_image_block";
import CommonComments from "../components/common_comments";
export default class PCNewsDetails extends Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        };
    };
    componentDidMount() {
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`, myFetchOptions).then(res => res.json()).then(json => {
            this.setState({
                newsItem: json
            })
            document.title = `${this.state.newsItem.title} - React News | React 驱动的新闻平台`; 
        })
    }
    createMarkup() {
        return {
            __html: this.state.newsItem.pagecontent
        }
    }

    render() {
        return (                        
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <CommonComments uniquekey={this.props.match.params.uniquekey}></CommonComments>
                    </Col>
                    <Col span={6}>
                    <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <BackTop></BackTop>
                <PCFooter></PCFooter>
            </div>
        )
    }
}