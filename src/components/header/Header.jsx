import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <header class="topbar">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">

                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 test">
                                <i class="fa fa-user"></i> asdasds
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

export default Header;
