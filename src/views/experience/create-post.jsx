import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./create-post.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import { actAddPostRequest } from './../../redux/action/index';
import { connect } from 'react-redux';


class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadFile: [],
            startDate: new Date(),
            topic: '',
            description: '',
            money: '',
            numberOfDay: 0,
            file: new FormData(),
        }
        
    }

    componentDidMount() {
        console.log("DIDMOUNT");
    }

    changImage = (e) => {
        console.log(e.currentTarget.files[0]);
        const fileImage = e.currentTarget.files[0];
        if (fileImage) {
            this.setState({
                file: fileImage
            })
        }
        let fileReader = new FileReader();
        fileReader.onload = () => {
            const file = {
                data: fileReader.result,
                isUploading: false
            }
            this.addFile(file);
        }
        fileReader.onabort = () => {

        }
        fileReader.onerror = () => {

        }
        fileReader.readAsDataURL(fileImage);
    }

    addFile(file) {

        this.setState((preState) => ({ loadFile: [...preState.loadFile, file] }))
    }

    removeFile = (file) => {
        this.setState({ loadFile: [] });
    }

    handleStartDate = (date) => {
        console.log(date);
        this.setState({
            startDate: date,
        })
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
        this.props.onAddPost(this.state);
    }


    render() {
        const { loadFile, startDate } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Tạo bài viết</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onHandleSubmit}>
                                    <Row className="input-padding">
                                        <Col lg={3} sm={3}>
                                            <span>Tiêu Đề bài viết</span>
                                        </Col>
                                        <Col lg={6} sm={6}>
                                            <input type="text" name="topic" placeholder="Tiêu đề" className="form-control" onChange={this.onHandleChange} />
                                        </Col>
                                    </Row>
                                    <Row className="input-padding">
                                        <Col lg={3} sm={3}>
                                            <span>Giới thiệu</span>
                                        </Col>
                                        <Col lg={6} sm={6}>
                                            <textarea type="text" name="description" placeholder="Giới Thiệu" className="form-control" onChange={this.onHandleChange} />
                                        </Col>
                                    </Row>

                                    <Row className="input-padding">
                                        <Col lg={3} sm={3}>
                                            <i className="fa fa-calendar"></i>
                                            <DatePicker
                                                dateFormat="dd/MM/yyyy"
                                                className="form-control"
                                                selected={startDate}
                                                onChange={this.handleStartDate}
                                                isClearable={true}
                                                placeholderText="I have been cleared!"
                                            />
                                        </Col>
                                        <Col lg={3} sm={3}>
                                            <i className="fa fa-dollar"></i>
                                            <input type="text" placeholder="Tiền" name="money" className="form-control width-input" onChange={this.onHandleChange} />
                                        </Col>
                                        <Col lg={3} sm={3}>
                                            <i className="fa fa-hourglass-start"></i>
                                            <input type="text" placeholder="Số Ngày" name="numberOfDay" className="form-control width-input" onChange={this.onHandleChange} />
                                        </Col>
                                    </Row>

                                    <Row className="height-image">
                                        <Col lg={3} sm={3}>
                                            <div className="poster">
                                                <i className="fa fa-upload Icon"></i>
                                                <input type="file" onChange={this.changImage} onClick={(event) => event.target.value = ''} />
                                            </div>
                                        </Col>

                                        <Col lg={3} sm={3}>
                                            <div >
                                                {loadFile.map((file, idx) => {
                                                    return <div className="file" key={idx}>
                                                        <div className="container">
                                                            <span className="remove-btn" onClick={this.removeFile}>
                                                                <i className="fa fa-minus remove"></i>
                                                            </span>
                                                        </div>
                                                        <img className="image" src={file.data} />
                                                    </div>
                                                })}
                                            </div>
                                        </Col>
                                    </Row>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddPost: (post) => {
            dispatch(actAddPostRequest(post));
        }
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);