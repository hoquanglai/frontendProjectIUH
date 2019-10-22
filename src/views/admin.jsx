import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import Admin from "layouts/Admin.jsx";
import Login from "views/Login.jsx";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

class admin extends Component {
    
    
    render() {
        console.log("fffffffffffffffffffffffffffff");
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                <Switch>
                    {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} /> */}
                    {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} /> */}
                    {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} /> */}
                    {/* <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} /> */}
                    <Route path="/" render={props => <Admin {...props} />} />
                </Switch>
                </React.Suspense>
            </HashRouter>
        )
    }
}

export default admin;