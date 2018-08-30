import React, {Component} from "react";
import {Icon, Input} from 'antd';
import events from "../../utils/events";
import '../Index/Head/head.scss';
import './search.scss';

const Search = Input.Search;

class SearchPage extends Component {

  componentDidMount() {
    events.emit("navStatusEvent", false)
    this.refs.search.focus()
  }
  handleSearch(value) {
    alert(value)
  }

  render() {
    return (
      <div className="search-page">
      <div className="index-header">
        <div className="head-position">
          <Icon className="icon-back" type="left" onClick={() => window.history.go(-1)}></Icon>
        </div>
        <div className="head-search">
          <Search ref="search" placeholder="搜职位" onSearch={value => this.handleSearch(value)}/>
        </div>
      </div>
      </div>
    )
  }
}

export default SearchPage