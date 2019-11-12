import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { actAddUserRequest } from './../../redux/action/user';
import './register.css'
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: '',
            repwd: 0,
            email: '',
        };
    }

    onHandleChange = (event) => {
        var target = event.target
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onAddUser(this.state);
    }

    render() {
        return (
            <div className="container backgroud-register">

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="register-form">
                            <h3 class="name">Đăng ký</h3>
                            <form onSubmit={this.onHandleSubmit}>
                                <Row className="input-padding">
                                    <Col lg={4} sm={4}>
                                        <span>Họ Tên</span>
                                    </Col>
                                    <Col lg={8} sm={8}>
                                        <input type="text" name="name" placeholder="Họ Tên" className="form-control" onChange={this.onHandleChange} />
                                    </Col>
                                </Row>
                                <Row className="input-padding">
                                    <Col lg={4} sm={4}>
                                        <span>Email</span>
                                    </Col>
                                    <Col lg={8} sm={8}>
                                        <input type="text" name="email" placeholder="Email" className="form-control" onChange={this.onHandleChange} />
                                    </Col>
                                </Row>
                                <Row className="input-padding">
                                    <Col lg={4} sm={4}>
                                        <span>Mật Khẩu</span>
                                    </Col>
                                    <Col lg={8} sm={8}>
                                        <input type="text" name="pwd" placeholder="Mật Khẩu" className="form-control" onChange={this.onHandleChange} />
                                    </Col>
                                </Row>
                                <Row className="input-padding">
                                    <Col lg={4} sm={4}>
                                        <span>Nhập Lại Mật Khẩu</span>
                                    </Col>
                                    <Col lg={8} sm={8}>
                                        <input type="text" name="repwd" placeholder="Mật Khẩu" className="form-control" onChange={this.onHandleChange} />
                                    </Col>
                                </Row>
                                <Row className="input-padding">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </Row>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (user) => {
            dispatch(actAddUserRequest(user));
        }
    }
}

export default connect(null, mapDispatchToProps)(Register);