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
// import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { Redirect, Link } from 'react-router-dom';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreatePost from "../views/experience/create-post.jsx";
// import ReactDOM from "react-dom";

// import { Card } from "components/Card/Card.jsx";
// import { StatsCard } from "components/StatsCard/StatsCard.jsx";
// import { Tasks } from "components/Tasks/Tasks.jsx";
// import {
//   dataPie,
//   legendPie,
//   dataSales,
//   optionsSales,
//   responsiveSales,
//   legendSales,
//   dataBar,
//   optionsBar,
//   responsiveBar,
//   legendBar
// } from "variables/Variables.jsx";

class Dashboard extends Component {


  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      isAdd: false
    };
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu })
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  createHtml = (data) => {
    console.log(data);
    const bodyHear = data.map((element, index) => {
      return (
        <div className="col-sm-3 col-xs-3" key={index++}>
          <a>{element}</a>
        </div>
      )
    });
    return bodyHear;
  }

  createPost = (e) => {
    // const current = this.state.isAdd;
    // this.setState({ isAdd: !current })
    // return <Redirect to="/admin/dashboard/post" />
    return <CreatePost {...this.props}/>
  }

  render() {
    const site = ['Hà Nội', 'Đà Nẵng', 'Hồ Chí Minh'];
    const add = ['Phú Yên', 'Hà Giang', 'Lâm Đồng', 'Singapore', 'Ninh Bình'];
    if (this.state.isAdd) {

      // ReactDOM.render(
      //   <BrowserRouter>
      //     <Switch>
      //       <Route path="/admin/dashboard" render={props => <CreatePost {...props} />} />
      // <Redirect from="/admin/dashboard" to="/admin/dashboard/post" />
      //       {/* <Route path="/login" exact component={Login} />
      //       <Redirect from="/" to="/login" /> */} */}

      //     </Switch>
      //   </BrowserRouter>,
      //   document.getElementById("root")
      // );
      // return <Redirect from="/" to="/admin/dashboard/post" />
      return <Redirect to="/admin/dashboard/post" />
      // return <Redirect to={{ pathname: '/admin/dashboard/post' }} />;
    }
    return (
      <div className="content">

        <Row>
          <Col lg={3} sm={6}>
            <button type="button" className="btn btn-primary" onClick={this.createPost}>Tạo bài viết</button>
            {/* <Link to='/admin/dashboard/post' className="btn btn-info mb-10">Create Product</Link> */}
          </Col>

        </Row>
        <Row>
          {this.createHtml(site)}
          <div className="col-sm-3 col-xs-3">
            <a onClick={this.toggleMenu}>Xem thêm ...</a>
          </div>
          <div>
            {this.state.menu ? this.createHtml(add) : ''}
          </div>

        </Row>



        {/* <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid> */}
      </div>
    );
  }
}

export default Dashboard;
