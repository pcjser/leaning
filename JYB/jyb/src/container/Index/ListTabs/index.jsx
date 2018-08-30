import React, {Component} from "react";
import {Tabs} from 'antd-mobile';
// import {StickyContainer, Sticky} from 'react-sticky';
import './list-tabs.scss';

const tabs = [
  {
    title: '高端全职'
  }, {
    title: '热门兼职'
  }
];


class ListTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

      return (
        <div>
          <Tabs
            tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => {
            console.log('onChange', index, tab);
          }}
            onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab);
          }}>
            <div
              style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '1050px',
              backgroundColor: '#fff'
            }}>
              Content of one tab
            </div>
            <div
              style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '1050px',
              backgroundColor: '#fff'
            }}>
              Content of second tab
            </div>
          </Tabs>
        </div>
      )
    }
  }

export default ListTabs