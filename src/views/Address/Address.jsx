
import React, { Component } from "react";
// import ChartistGraph from "react-chartist";
import { Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import addressSevice from "sevice/address.sevice";
import './Address.css'

class Dashboard extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      isAdd: false,
      address: []
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
    // console.log(data);
    const bodyHear = data.map((element, index) => {
      return (
        <div className="col-sm-2 col-xs-2" key={index++}>
          {/* <span>{element}</span> */}
          <button type="button" className="btn btn-primary" onClick={this.createPost}>{element.name}</button>
        </div>
        
      )
    });
    return bodyHear;
  }

  getRoutes = (routes) => {
    // console.log(routes);
    
  }

  createPost = (e) => {
    const current = this.state.isAdd;
    this.setState({ isAdd: !current })
  }

  componentDidMount() {
    addressSevice.findAll().then(res =>  {
      this.setState({ address: res.data })
      console.log("data: " , this.state);
    })
  }

  render() {

    const add = ['Phú Yên', 'Hà Giang', 'Lâm Đồng', 'Singapore', 'Ninh Bình'];
    if (this.state.isAdd) {
      return <Redirect to="/dashboard/post" />
    }
    return (
      // <Router>
      <div className="content">

        {/* <Row>
          <Col lg={3} sm={6}>
            <button type="button" className="btn btn-primary" onClick={this.createPost}>Tạo bài viết</button>
          </Col>

        </Row> */}
        <Row>
          {this.createHtml(this.state.address)}
          {/* <div className="col-sm-3 col-xs-3">
            <button onClick={this.toggleMenu}>Xem thêm ...</button>
          </div>
          <div>
            {this.state.menu ? this.createHtml(add) : ''} */}
          {/* </div> */}

        </Row>

      </div>
    );
  }
}

export default Dashboard;
