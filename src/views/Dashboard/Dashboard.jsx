
import React, { Component } from "react";
import { Row, Image } from "react-bootstrap";
// import Img from 'react-image'
import { Redirect } from 'react-router-dom';
import './Dashboard.css'
import 'font-awesome/css/font-awesome.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
import { actListPostRequest } from './../../redux/action/index';
import InfiniteScroll from 'react-infinite-scroll-component';


// var baiviets = [
//   {
//     image: 'https://media2.gody.vn/public/mytravelmap/images/2019/10/17/giahuy4210/ec208f0911b9a87848819b5143285c7c01b90bb4.jpg',
//     title: 'Tìm đường lên “Vách đá trắng” trên đỉnh núi Cô Tiên'
//   },
//   {
//     image: 'https://media2.gody.vn/public/mytravelmap/images/2018/6/1/quynhnhu/7ff85f8e9eb6f12931107b0b95f18b5cac046d48.jpg',
//     title: 'NƠI NÀO BÌNH YÊN BẰNG VIỆT NAM'
//   },
//   {
//     image: 'https://media2.gody.vn/public/mytravelmap/images/2019/4/5/hongthuy1604.sale953483/0ceb1fb6738b1b71f0626006cdd25e1d.jpg',
//     title: 'NƠI NÀO BÌNH YÊN BẰNG VIỆT NAM'
//   },
//   {
//     image: 'https://media2.gody.vn/public/mytravelmap/images/2019/8/12/thiensucuamotvisao2160/0828ef7ef7ce3661dc945982e656f33043538d60.png',
//     title: 'NƠI NÀO BÌNH YÊN BẰNG VIỆT NAM'
//   },
// ]

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      isAdd: false,
      start: 0,
      limit: 3,
      register: false
    };
  }

  componentDidMount() {
    this.props.fetchAllPost(this.state);
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

  loadData = () => {
    const { limit } = this.state;
    this.setState({ start: this.state.start + limit });
    this.props.fetchAllPost(this.state);
  }

  createHtml = (data) => {
    // console.log(data);

    const bodyHear = data.map((element, index) => {
      const image = "https://drive.google.com/uc?export=view&id=" + element.imageId;
      return (
        <div className="container" key={index}>
          <div className="row">
            <div className="col-sm-12 col-xs-12 rowPosts">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <Image className="Avatar" src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/69892514_987796234897639_209914993288675328_n.jpg?_nc_cat=100&_nc_oc=AQnPCzVNcJjF70yewkTJe5rhZVvjx_kItc6OEy71CVVhmsA_VQsIAQFes1AWkl8tj88&_nc_ht=scontent.fsgn2-2.fna&oh=9aff9960d7febc3b3804cc5bd33c2833&oe=5E16C79C" rounded />
                  <span>Ho Quang Lai</span>
                </div>
              </div>
              <a href="https://gody.vn/blog/giahuy4210/post/cam-nang-du-lich-bandung-indonesia-5535">

                <div className="row">
                  <div className="col-sm-9 col-xs-9">
                    <Image src={image} className="size-image" />
                  </div>
                </div>
                <div className="row title" >
                  <div className="col-sm-12 col-xs-12">
                    <span>{element.title}</span>
                  </div>
                </div>

              </a>

              <div className="row" >
                <div className="col-sm-1 col-xs-1">
                  <span className="fa fa-eye">122</span>
                </div>
                <div className="col-sm-1 col-xs-1">
                  <span className="fa fa-comments">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return <InfiniteScroll
      dataLength={data.length}
      next={this.loadData}
      hasMore={true}
      loader={<h4>Loading ...</h4>}
    >
      {bodyHear}
    </InfiniteScroll>

    // return bodyHear;
  }

  getRoutes = (routes) => {
    console.log(routes);

  }

  createPost = (e) => {
    // const current = this.state.isAdd;
    const register = this.state.register;

    if (register) {
      // this.setState({ isAdd: !current })
    } else {
      this.setState({ register: !register })
    }

  }

  render() {
    if (this.state.isAdd) {
      return <Redirect to="/dashboard/post" />
    }

    if (this.state.register) {
      return <Redirect to="/register" />
    }

    const postAll = this.props.postAll
    console.log(this.props.postAll);


    return (
      <div className="content">
        <Row>
          <div className="container">

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="d-flex flex-row-reverse bd-highlight">
                  <div className="p-2 bd-highlight">
                    <button type="button" className="btn btn-primary" onClick={this.createPost}>Tạo bài viết</button>
                  </div>
                  <div className="p-2 bd-highlight"></div>
                  <div className="p-2 bd-highlight"></div>
                </div>
              </div>
            </div>

          </div>
        </Row>


        <Row className="image">
          {this.createHtml(postAll)}
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

const mapStateToProps = state => {
  return {
    postAll: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPost: (state) => {
      dispatch(actListPostRequest(state));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
