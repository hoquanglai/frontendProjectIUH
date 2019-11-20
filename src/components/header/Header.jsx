import React, { Component } from "react";
import "./Header.css";
import { connect } from 'react-redux';
import { actGetUserRequest, actLogOutUserRequest } from './../../redux/action/user';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import { thisTypeAnnotation } from "@babel/types";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            experience: false
        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        const token = cookies.get('auth-token')
        this.props.getCurrentUser(token);
    }

    logOut = () => {
        const cookies = new Cookies();
        cookies.remove('auth-token')
        this.props.logOutUser();
        this.props.onReceviceLogout();
    }

    render() {
        var currentUser = '';
        if (this.props.userCurent) {
            currentUser = this.props.userCurent.name
        }

        return (
            <header className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            {currentUser ? <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 test">
                                <button onClick={this.logOut}><i className="fa fa-sign-out"></i></button> 
                            </div> : null}
                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 test">
                                <i className="fa fa-user"></i> {currentUser}
                            </div>

                            {/* <ul class="social-network">
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-user">asdasd</i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-pinterest"></i></a></li>
                                <li><a class="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
                            </ul> */}
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = userCurent => {
    return {
        userCurent: userCurent.user.user
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCurrentUser: (token) => {
            dispatch(actGetUserRequest(token));
        },
        logOutUser: () => {
            dispatch(actLogOutUserRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
