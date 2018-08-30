import React, { Component } from "react";

export default class Index extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            initDone: true
        }
    }
    /**
     * 公共父组件
     */
    componentDidMount() {
        //从local中获取城市
        let cityName = window.STORE.getItem('CITYNAME');
        if(cityName == null) {
            cityName = '北京'
        }
        //将城市信息存到redux中
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ?
                    this.props.children
                    :
                    <div>加载中...</div>
                }
            </div>
        )
    }
}