import React, {Component} from 'react';
import {CacheLink} from 'react-keeper';
import {Icon, Input} from 'antd';
import {Menu, ActivityIndicator} from 'antd-mobile';

import './head.scss';

const Search = Input.Search;

const data = [
  {
    value: '1',
    label: 'Food',
    children: [
      {
        label: 'All Foods',
        value: '1',
        disabled: false
      }, {
        label: 'Chinese Food',
        value: '2'
      }, {
        label: 'Hot Pot',
        value: '3'
      }, {
        label: 'Buffet',
        value: '4'
      }, {
        label: 'Fast Food',
        value: '5'
      }, {
        label: 'Snack',
        value: '6'
      }, {
        label: 'Bread',
        value: '7'
      }, {
        label: 'Fruit',
        value: '8'
      }, {
        label: 'Noodle',
        value: '9'
      }, {
        label: 'Leisure Food',
        value: '10'
      }, {
        label: 'Leisure Food',
        value: '11'
      }, {
        label: 'Leisure Food',
        value: '12'
      }, {
        label: 'Leisure Food',
        value: '13'
      }
    ]
  }, {
    value: '2',
    label: 'Supermarket',
    children: [
      {
        label: 'All Supermarkets',
        value: '1'
      }, {
        label: 'Supermarket',
        value: '2',
        disabled: true
      }, {
        label: 'C-Store',
        value: '3'
      }, {
        label: 'Personal Care',
        value: '4'
      }
    ]
  }, {
    value: '3',
    label: 'Extra',
    isLeaf: true,
    children: [
      {
        label: 'you can not see',
        value: '1'
      }
    ]
  }
];

class Head extends Component {
  constructor() {
    super();
    this.state = {
      position: '南京',
      cityDatas: null,
      defaultValue: [
        '1', '3'
      ],
      show: false
    }
  }
  onChange = value => {
    let label = '';
    data.forEach((dataItem) => {
      if (dataItem.value === value[0]) {
        // label = dataItem.label;
        if (dataItem.children && value[1]) {
          dataItem
            .children
            .forEach((cItem) => {
              if (cItem.value === value[1]) {
                label = `${cItem.label}`;
              }
            });
        }
      }
    });
    this.setState({defaultValue: value, show: false, position: label})
    console.log(label);
  }

  handlePositionClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show
    });
    // mock for async data loading
    if (!this.state.cityDatas) {
      setTimeout(() => {
        this.setState({cityDatas: data});
      }, 500);
    }
  }

  onClose = key => () => {
    this.setState({[key]: false});
  }
  handleTouchMove = e => {
    console.log(e.target)
  }
  render() {
    const {cityDatas, show, defaultValue} = this.state;
    const menuEl = (<Menu data={cityDatas} value={defaultValue} onChange={this.onChange}/>);
    const loadingEl = (
      <div className="position-loading">
        <ActivityIndicator size="large"/>
      </div>
    );
    const showPosition = (show
      ? <div className="position-mask" onTouchMove={this.handleTouchMove}>
          <div className="menu-active">
            {cityDatas
              ? menuEl
              : loadingEl}
          </div>
        </div>
      : '')
    return (
      <div className="index-header">
        <div className="head-position" onClick={this.handlePositionClick}>
          <span>{this.state.position}</span>
          <Icon type="caret-down"></Icon>
        </div>
        <CacheLink className="head-search" to='/search'>
          <Search placeholder="搜职位" readOnly/>
        </CacheLink>
        {showPosition}
      </div>
    )
  }
}

export default Head