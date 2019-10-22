import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
import { HashRouter } from 'react-router-dom';
import "./Login.css";
// import React from "react";
import ReactDOM from "react-dom";
import Admin from "layouts/Admin.jsx";
import axios from 'axios'

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "App";
import admin from "./admin.jsx";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      // loggedIn: true,
      // username: null
    };

    // this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
  componentDidMount() {
    // this.getUser()
  }

  // getUser() {
  //   axios.get('/getInfo/',
  //   {
  //     username: 'aa',
  //     password: 'this.state.password'
  //   }).then(response => {
  //     console.log('Get user response: ')
  //     console.log(response.data)
  //     if (response.data.username) {
  //       console.log('Get User: There is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         username: response.data.username
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: true,
  //         username: null
  //       })
  //     }
  //   })
  // }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    return (
      <HashRouter>
          {/* <React.Suspense fallback={loading()}> */}
          <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} /> */}
              {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} /> */}
              {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} /> */}
              {/* <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
              <Route path="/" render={props => <Admin {...props} />} />
          </Switch>
          {/* </React.Suspense> */}
      </HashRouter>
  )
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button 
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}