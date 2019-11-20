import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { HashRouter } from 'react-router-dom';
import Admin from "layouts/Admin.jsx";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { connect } from 'react-redux';
import { actLogInUserRequest } from './../redux/action/user';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pwd: "",
      addPost: false,
      register: false,
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  onHandleChange = (event) => {
    var target = event.target
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      pwd: this.state.pwd,
    }
    var _self = this;
    this.props.onLoginUser(user, function (result) {
      console.log(result);
      
      const cookies = new Cookies();
      cookies.set('auth-token', result.data.token, { path: '/' });
      const newPost = _self.state.addPost;
      _self.setState({ addPost: !newPost });
    })
  }
  register = () => {
    const currentRegister = this.state.register;
    this.setState({
      register: !currentRegister
    })
  }
  render() {
    if (this.state.addPost) {
      return <Redirect to="/dashboard/post" />
    }

    if (this.state.register) {
      return <Redirect to="/register" />
    }

    return (
      // <div className="Login">
      //   <form onSubmit={this.handleSubmit}>
      //     <FormGroup controlId="email" bsSize="large">
      //       <ControlLabel>Email</ControlLabel>
      //       <FormControl
      //         autoFocus
      //         type="email"
      //         value={this.state.email}
      //         onChange={this.handleChange}
      //       />
      //     </FormGroup>
      //     <FormGroup controlId="password" bsSize="large">
      //       <ControlLabel>Password</ControlLabel>
      //       <FormControl
      //         value={this.state.password}
      //         onChange={this.handleChange}
      //         type="password"
      //       />
      //     </FormGroup>
      //     <Button 
      //       block
      //       bsSize="large"
      //       disabled={!this.validateForm()}
      //       type="submit"
      //     >
      //       Login
      //     </Button>
      //   </form>
      // </div>
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <MDBCardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong>Sign in</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label="Your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email"
                    onChange={this.onHandleChange}
                  />
                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                    name="pwd"
                    onChange={this.onHandleChange}
                  />
                  <p className="font-small blue-text d-flex justify-content-end pb-3">
                    Forgot
                <a href="#!" className="blue-text ml-1">
                      Password?
                </a>
                  </p>
                  <div className="text-center mb-3">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                    or Sign in with:
              </p>
                  <div className="row my-3 d-flex justify-content-center">
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                    >
                      <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="mr-md-3 z-depth-1a"
                    >
                      {/* <MDBIcon fab icon="twitter" className="blue-text" /> */}
                      <i className="fa fa-facebook-square"></i>
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className="z-depth-1a"
                    >
                      <MDBIcon fab icon="google-plus-g" className="blue-text" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
                <MDBModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Not a member?
                    <button type="button" className="btn btn-primary" onClick={this.register}>Đăng Ký</button>

                  </p>
                </MDBModalFooter>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </form>

      </div>

    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLoginUser: (user, cb) => {
      dispatch(actLogInUserRequest(user, cb));
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
