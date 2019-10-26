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
// import UserProfile from "views/UserProfile.jsx";
// import TableList from "views/TableList.jsx";
// import Typography from "views/Typography.jsx";
// import Icons from "views/Icons.jsx";
// import Maps from "views/Maps.jsx";
// import Notifications from "views/Notifications.jsx";
// import Upgrade from "views/Upgrade.jsx";
// import Login from "views/Login";
// import CreatePost from "views/experience/create-post.jsx";

// const dashboardRoutes = [
//   {
//     path: "/dashboard",
//     name: "Chia Sẽ Kinh Nghiệm",
//     icon: "pe-7s-display1",
//     component: Dashboard,
//     layout: "/admin"
//   },
//   {
//     path: "/user",
//     name: "User Profile",
//     icon: "pe-7s-user",
//     component: UserProfile,
//     layout: "/admin"
//   },
//   {
//     path: "/table",
//     name: "Du Lịch Quoanh Đây",
//     icon: "pe-7s-bicycle",
//     component: TableList,
//     layout: "/admin"
//   },
//   {
//     path: "/typography",
//     name: "Lịch Phượt",
//     icon: "pe-7s-date",
//     component: Typography,
//     layout: "/admin"
//   },
//   {
//     path: "/icons",
//     name: "Du Lịch Theo Túi Tiền",
//     icon: "pe-7s-science",
//     component: Icons,
//     layout: "/admin"
//   },
//   {
//     path: "/maps",
//     name: "Địa Điểm",
//     icon: "pe-7s-map-marker",
//     component: Maps,
//     layout: "/admin"
//   },
//   {
//     path: "/notifications",
//     name: "Notifications",
//     icon: "pe-7s-bell",
//     component: Notifications,
//     layout: "/admin"
//   },
//   {
//     upgrade: true,
//     path: "/upgrade",
//     name: "Upgrade to PRO",
//     icon: "pe-7s-rocket",
//     component: Upgrade,
//     layout: "/admin"
//   }
//   ,
//   {
//     upgrade: true,
//     path: "/login",
//     name: "Login",
//     icon: "pe-7s-rocket",
//     component: Login,
//     layout: "/admin"
//   },
//   {
//     path: "/post",
//     // name: "Địa Điểm",
//     // icon: "pe-7s-map-marker",
//     component: CreatePost,
//     layout: "/admin"
//   },
// {
//   path: "/dashboard",
//   name: "Dashboard",
//   icon: "pe-7s-graph",
//   component: Dashboard,
//   layout: "/admin"
// },
// {
//   path: "/user",
//   name: "User Profile",
//   icon: "pe-7s-user",
//   component: UserProfile,
//   layout: "/admin"
// },
// {
//   path: "/table",
//   name: "Table List",
//   icon: "pe-7s-note2",
//   component: TableList,
//   layout: "/admin"
// },
// {
//   path: "/typography",
//   name: "Typography",
//   icon: "pe-7s-news-paper",
//   component: Typography,
//   layout: "/admin"
// },
// {
//   path: "/icons",
//   name: "Icons",
//   icon: "pe-7s-science",
//   component: Icons,
//   layout: "/admin"
// },
// {
//   path: "/maps",
//   name: "Maps",
//   icon: "pe-7s-map-marker",
//   component: Maps,
//   layout: "/admin"
// },
// {
//   path: "/notifications",
//   name: "Notifications",
//   icon: "pe-7s-bell",
//   component: Notifications,
//   layout: "/admin"
// },
// {
//   upgrade: true,
//   path: "/upgrade",
//   name: "Upgrade to PRO",
//   icon: "pe-7s-rocket",
//   component: Upgrade,
//   layout: "/admin"
// }
// ,
// {
//   upgrade: true,
//   path: "/login",
//   name: "Login",
//   icon: "pe-7s-rocket",
//   component: Login,
//   layout: "/admin"
// }
// ];

// export default dashboardRoutes;
import React from 'react';
// import Dashboard from "views/Dashboard.jsx";


const UserProfile = React.lazy(() => import('./views/UserProfile'));

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const Address = React.lazy(() => import('./views/Address/Address'));
const CreatePost = React.lazy(() => import('./views/experience/create-post'));

const routes = [
  // { path: '/', exact: true },
  { path: '/dashboard', exact: true, name: "Chia Sẽ Kinh Nghiệm", icon: "pe-7s-display1", component: Dashboard },
  { path: "/user", exact: true, name: "User Profile", icon: "pe-7s-user",component: UserProfile},
  { path: '/address', exact: true, name: "Địa Điểm", icon: "pe-7s-display1", component: Address },
  { path: '/dashboard/post', component: CreatePost }

];
 export default routes;