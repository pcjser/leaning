import React, { Component } from 'react';
import { Row, Col, Menu, Icon, Tabs, message, Modal, Form, Input, Button } from 'antd';
import {
    Link
} from 'react-router-dom';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class MobileHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        }
    }

    setModalVisible(bool) {
        this.setState({
            modalVisible: bool
        })
    };

    handleClick(e) {
        console.log(e)
        if (e.key === "register") {
            this.setState({
                current: 'register'
            })
            this.setModalVisible(true)
        } else {
            this.setState({
                current: e.key
            })
        }
    }

    login() {
        this.setModalVisible(true);
    }

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        this.props.form.validateFieldsAndScroll((err, formData) => {
            if (!err) {
                fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=${formData.r_userName}&r_password=${formData.r_password}&r_confirmPassword=${formData.r_confirmPassword}`, myFetchOptions)
                    .then(res => res.json()).then(json => {
                        this.setState({
                            userNickName: json.NickUserName,
                            userId: json.UserId
                        });
                    });
                message.success("请求成功！");
                this.setModalVisible(false);
                // console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type="inbox" />
            </Link>
            :
            <Icon type="setting" onClick={() => this.login()} />
        return (
            <div id="mobileheader">
                <header>
                    <img src={require('../images/logo.png')} alt="logo" />
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form horizontal="true" onSubmit={(e) => this.handleSubmit(e)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName')(
                                        <Input placeholder="请输入您的账号" />
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password')(
                                        <Input placeholder="请输入您的密码" />
                                    )}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword')(
                                        <Input placeholder="请再次输入您的密码" />
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader)