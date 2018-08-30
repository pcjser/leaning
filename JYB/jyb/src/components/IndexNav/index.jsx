import React, {Component} from 'react';
import {CacheLink} from 'react-keeper';
import events from "../../utils/events"
import styled from "styled-components";
import rem from '../../utils/tools';
import { Icon } from 'antd';

//css

const NavWrap = styled.div `
  display: flex;
  flex-direction: row;
  align-content: center;
  position: fixed;
  bottom: 0;
  width: 10rem;
  height: ${rem('90px')};
  background-color: pink;
  z-index: 9;
`

const StyledNavLink = styled(CacheLink)`
    font-size: ${rem('22px')};
    flex-grow: 1;
    padding-top: ${rem('10px')};
    text-align: center;
`
const StyledIcon = styled(Icon)`
    font-size: ${rem('42px')};
`

const navList = [
    {
        tag: '首页',
        name: 'index',
        icon: 'home',
        to: '/index'
    }, {
        tag: '培训',
        name: 'course',
        icon: 'team',
        to: '/course'
    }, {
        tag: '发现',
        name: 'discovery',
        icon: 'eye-o',
        to: '/discovery'
    }, {
        tag: '校园',
        name: 'campus',
        icon: 'appstore-o',
        to: '/campus'
    }, {
        tag: '我',
        name: 'personal',
        icon: 'user',
        to: '/personal'
    }
]

class IndexNav extends Component {
    constructor() {
        super();
        this.state = {
            navStatus: false
        }
    }
    componentDidMount() {
        this.eventEmitter = events.addListener("navStatusEvent", bool => {
            this.setState({ navStatus: bool })
        });
    }
    componentWillUnmount() {
        events.removeListener(this.eventEmitter);
    }
    render() {
        const nav = this.state.navStatus ? 
        <NavWrap>
            {
                navList.map(({
                    tag,
                    icon,
                    ...args
                }) => (
                    <StyledNavLink {...args} key={tag} activeClassName="active">
                        <StyledIcon type={icon}></StyledIcon>
                        <div>{tag}</div>
                    </StyledNavLink>
                ))
            }
        </NavWrap>
        :
        <div></div>
        return nav        
    }
}

export default IndexNav