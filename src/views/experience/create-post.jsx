import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";


class CreatePost extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(){
        console.log("DIDMOUNT");
    }

    render() {
        return (

            <div className="content">
                <Row>
                    <Col lg={3} sm={6}>
                        <button type="button" className="btn btn-primary" onClick={this.createPost}>Tạo bài viết</button>
                        {/* <Link to='/admin/dashboard/post' className="btn btn-info mb-10">Create Product</Link> */}
                    </Col>

                </Row>
            </div>

        );
    }
}

export default CreatePost;