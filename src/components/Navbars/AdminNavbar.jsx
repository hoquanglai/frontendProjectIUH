/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom';

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false,
      isAdd: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }

  createPost = (e) => {
    const current = this.state.isAdd;
    this.setState({ isAdd: !current })
    // return <Redirect to="/admin/dashboard/post" />
    // return <CreatePost {...this.props}/>
    console.log(this.state.isAdd);
    
    // if (this.state.isAdd) {
    //   // <Route path="/post" component={CreatePost}></Route>

    //   return <Redirect to="/dashboard/post" />
    // }
  }

  render() {
    // if (this.state.isAdd) {
    //   // <Route path="/post" component={CreatePost}></Route>

    //   return <Redirect to="/dashboard/post" />
    // }
    return (
      <div>

        {/* <div className="d-flex flex-row-reverse bd-highlight">
          <div className="p-2 bd-highlight">
            <button type="button" className="btn btn-primary" onClick={this.createPost}>Tạo bài viết</button>
          </div>
          <div className="p-2 bd-highlight"></div>
          <div className="p-2 bd-highlight"></div>
        </div> */}

        {/* <Row className="input-padding">
          <Col lg={3} sm={3}>
            <span>Tiêu Đề bài viết</span>
          </Col>
          <Col lg={3} sm={3}>
            <input type="text" name="topic" placeholder="Tiêu đề" className="form-control" onChange={this.onHandleChange} />
          </Col>
          <Col lg={3} sm={3}>
            <input type="text" name="topic" placeholder="Tiêu đề" className="form-control" onChange={this.onHandleChange} />
          </Col>
          <Col lg={3} sm={3}>
            <input type="text" name="topic" placeholder="Tiêu đề" className="form-control" onChange={this.onHandleChange} />
          </Col>
        </Row> */}
      </div>
      // <Navbar fluid>
      //   <Navbar.Header>
      //     <Navbar.Brand>
      //       <a href="#pablo">{this.props.brandText}</a>
      //       asdasdasd
      //     </Navbar.Brand>
      //     <Navbar.Toggle onClick={this.mobileSidebarToggle} />

      //   </Navbar.Header>
      //   <Navbar.Collapse>
      //     <AdminNavbarLinks />
      //     @@@@@@@@@@@@@@@@@@@@@@
      //   </Navbar.Collapse>
      // </Navbar>
    );
  }
}

export default Header;
