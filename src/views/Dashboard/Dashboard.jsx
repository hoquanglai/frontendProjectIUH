
import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
// import Img from 'react-image'
import { Redirect } from 'react-router-dom';
import './Dashboard.css'
import 'font-awesome/css/font-awesome.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

var baiviets = [
  {
  image : 'https://media2.gody.vn/public/mytravelmap/images/2019/10/17/giahuy4210/ec208f0911b9a87848819b5143285c7c01b90bb4.jpg',
  title : 'Tìm đường lên “Vách đá trắng” trên đỉnh núi Cô Tiên'
  },
  {
    image : 'https://media2.gody.vn/public/mytravelmap/images/2018/6/1/quynhnhu/7ff85f8e9eb6f12931107b0b95f18b5cac046d48.jpg',
    title : 'NƠI NÀO BÌNH YÊN BẰNG VIỆT NAM'
  },
  {
    image : 'https://media2.gody.vn/public/mytravelmap/images/2019/4/5/hongthuy1604.sale953483/0ceb1fb6738b1b71f0626006cdd25e1d.jpg',
    title : 'NƠI NÀO BÌNH YÊN BẰNG VIỆT NAM'
  },
  {
    image : 'https://media2.gody.vn/public/mytravelmap/images/2019/8/12/thiensucuamotvisao2160/0828ef7ef7ce3661dc945982e656f33043538d60.png',
    title : 'NƠI NÀO BÌNH YÊN BẰNG VIỆT NAM'
  },  
]

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
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-xs-12 rowPosts">
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                <Image className="Avatar"  src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/69892514_987796234897639_209914993288675328_n.jpg?_nc_cat=100&_nc_oc=AQnPCzVNcJjF70yewkTJe5rhZVvjx_kItc6OEy71CVVhmsA_VQsIAQFes1AWkl8tj88&_nc_ht=scontent.fsgn2-2.fna&oh=9aff9960d7febc3b3804cc5bd33c2833&oe=5E16C79C" rounded />
                <span>Ho Quang Lai</span>
              </div>
            </div>
            <a href="https://gody.vn/blog/giahuy4210/post/cam-nang-du-lich-bandung-indonesia-5535">

            <div class="row">
              <div class="col-sm-9 col-xs-9">
                <Image  src={element.image} rounded />
              </div>
            </div>
            <div class="row title" >
              <div class="col-sm-12 col-xs-12">
                <span>{element.title}</span>
              </div> 
            </div>

            </a>
            
            <div class="row" >
                <div class="col-sm-1 col-xs-1">
                  <span class="fa fa-eye">122</span>
                </div> 
                <div class="col-sm-1 col-xs-1">
                  <span class="fa fa-comments">0</span>
              </div> 
            </div>
          </div>
        </div>
      </div>
        )
    });
    return bodyHear;
  }

  getRoutes = (routes) => {
    console.log(routes);
    
  }

  createPost = (e) => {
    const current = this.state.isAdd;
    this.setState({ isAdd: !current })
    // return <Redirect to="/admin/dashboard/post" />
    // return <CreatePost {...this.props}/>
  }

  render() {
    const site = ['Hà Nội', 'Đà Nẵng', 'Hồ Chí Minh'];
    const add = ['Phú Yên', 'Hà Giang', 'Lâm Đồng', 'Singapore', 'Ninh Bình'];
    if (this.state.isAdd) {
      // <Route path="/post" component={CreatePost}></Route>

      return <Redirect to="/dashboard/post" />
    }
    return (
      <div className="content">
        <Row>
          <Col lg={3} sm={6}>
            {/* <button type="button" className="btn btn-primary" onClick={this.createPost}>Tạo bài viết</button>
            <Link to='/post' className="btn btn-info mb-10">Create Product</Link> */}
          </Col>

        </Row>
        <Row className="image">
          {this.createHtml(baiviets)}
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
