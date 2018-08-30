import React, {Component} from "react";
import {
    Row,
    Form,
    Col,
    Input,
    Button,
    Card
} from "antd";

// import { Router } from "react-router-dom";

const FormItem = Form.Item;

class CommonComments extends Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    }

    componentDidMount() {
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${this.props.uniquekey}`, myFetchOptions)
            .then(res => res.json())
            .then(json => {
                this.setState({comments: json})
            })
    };

    handleSubmit(e) {
        e.preventDefault();
        let myFetchOptions = {
            methods: 'GET'
        }
        this.props.form.validateFieldsAndScroll((err, formData) => {
            if (!err) {
                fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${localStorage.userid}&uniquekey=${this.props.uniquekey}&comment=${formData.remark}`, myFetchOptions)
                    .then(res => res.json())
                    .then(json => {
                        this.componentDidMount()
                    });
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length
            ? comments.map((comment, index) => (
                <Card key={index} title={comment.UserName} extra={<a href="#"> 发布于 {comment.datetime} </a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            : '未加载到任何评论';
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <FormItem label="您的评论">
                                <Input
                                    type="textarea"
                                    placeholder="随便写"
                                    {...getFieldDecorator('remark', {initialValue: ''})}/>
                                <Button type="primary">submit</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
};
export default CommonComments = Form.create({})(CommonComments)