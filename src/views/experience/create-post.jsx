import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./create-post.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadFile: [],
        }
        // this.addFile = this.addFile.bind(this);
    }

    componentDidMount() {
        console.log("DIDMOUNT");
    }

    changImage = (e) => {
        console.log(e.currentTarget.files[0]);
        const fileImage = e.currentTarget.files[0];
        let fileReader = new FileReader();
        fileReader.onload = () => {
            console.log("Upload");

            const file = {
                // size: fileImage.size,
                // type: fileImage.type,
                data: fileReader.result,
                isUploading: false
            }
            this.addFile(file);
            // e.target.value = '';
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


    render() {
        const { loadFile } = this.state;
        return (
            <div className="content">

                <Row className="input-padding">
                    <Col lg={3} sm={3}>
                        <span>Tiêu Đề bài viết</span>
                    </Col>
                    <Col lg={6} sm={6}>
                        <input type="text" placeholder="Tiêu đề" className="form-control" />
                    </Col>
                </Row>
                <Row className="input-padding">
                    <Col lg={3} sm={3}>
                        <span>Giới thiệu</span>
                    </Col>
                    <Col lg={6} sm={6}>
                        <textarea type="text" placeholder="Giới Thiệu" className="form-control" />
                    </Col>
                </Row>

                <Row className="input-padding">
                    <Col lg={3} sm={3}>
                        <i class="fa fa-calendar"></i>
                        <DatePicker
                            className="form-control"
                            selected={new Date()}
                            // onChange={date => setStartDate(date)}
                            isClearable={true}
                            placeholderText="I have been cleared!"
                        />
                    </Col>
                    <Col lg={3} sm={3}>
                        <i class="fa fa-dollar"></i>
                        <input type="text" placeholder="Tiền" className="form-control width-input" />
                    </Col>
                    <Col lg={3} sm={3}>
                        <i class="fa fa-hourglass-start"></i>
                        <input type="text" placeholder="Số Ngày" className="form-control width-input" />
                    </Col>
                </Row>

                <Row>
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
            </div>

        );
    }
}

export default CreatePost;