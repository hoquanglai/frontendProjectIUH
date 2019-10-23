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
// import React from "react";
// import ReactDOM from "react-dom";

// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
// import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
// import "./assets/css/demo.css";
// import "./assets/css/pe-icon-7-stroke.css";
// // import Dashboard from "views/Dashboard";

// import AdminLayout from "layouts/Admin.jsx";
// import Login from "views/Login";
// import Dashboard from "views/Dashboard";

// ReactDOM.render(

//   <BrowserRouter>
//     <Switch>
//       {/* <Route path="/admin" render={props => <AdminLayout {...props} />} /> */}
//       {/* <Redirect from="/" to="/admin/dashboard" /> */} */}
//       {/* <Route path="/login" exact component={Login} /> */}
//       {/* <Redirect from="/" to="/login" /> */}


//       <Route exact path="/" render={props => <AdminLayout {...props} />} />
//       {/* <Route exact path="/" component={AdminLayout} />} /> */}

//       {/* <Redirect from="/" to="/admin/dashboard" /> */}
//       {/* <Route path="/dashboard" component={Dashboard} />} /> */}

//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

import App from './App';
import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
const app = <App />

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();



