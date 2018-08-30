import React, {Component} from "react";
import {CacheLink} from "react-keeper";
import {Icon} from 'antd';

import './link.scss';

class LinkMap extends Component {
    constructor() {
        super()
        this.state = {
            linkList: [
                {
                    type: '人才攻略'
                }, {
                    type: '考研攻略'
                }, {
                    type: '公务员攻略'
                }, {
                    type: '高端人才库'
                }
            ]
        }
    }

    render() {
        return (
            <ul className="link-map">
                {this
                    .state
                    .linkList
                    .map(({
                        type,
                        link = '/',
                        icon = 'appstore-o'
                    }) => (
                        <li className="link-item" key={type}>
                            <CacheLink to={link}>
                                <Icon type={icon}></Icon>
                                <div>{type}</div>
                            </CacheLink>
                        </li>
                    ))
}
            </ul>
        )
    }
}

export default LinkMap