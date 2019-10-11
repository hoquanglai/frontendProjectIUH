import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./create-post.css";

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
        this.setState({loadFile: []});
    }


    render() {
        const { loadFile } = this.state;
        return (
            <div className="content">  
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