import React, {Component} from "react";
import {Card} from "antd";
import {
    // BrowserRouter as Router, Route,
    Link
} from "react-router-dom";

export default class PCNewsImageBlock extends Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        var myFetchoptions = {
            method: 'GET'
        };
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, myFetchoptions)
            .then(res => res.json())
            .then(json => this.setState({news: json}));
    }

    render() {
        const {news} = this.state;
        const styleImage = {
            display: 'block',
            width: this.props.imageWidth,
            height: '90px'
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <div key={index} className="imageblock">
                    <Link to={`/details/${newsItem.uniquekey}`} target="_blank">
                        <div className="custom-image">
                            <img src={newsItem.thumbnail_pic_s} style={styleImage} alt=""/>
                        </div>
                        <div className="custom-card">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.anchor_name}</p>
                        </div>
                    </Link>
                </div>
            ))
            : '没有加载到任何新闻';
        return (
            <div className="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width: this.props.width}}>
                    {newsList}
                </Card>
            </div>
        );
    };
}