import React from 'react';
import ReactDOM from 'react-dom';
//可以是 HashRouter  也可以是 BrowserRouter
import { HashRouter as Router,Route,Link } from './react-router-dom'
import  Com  from './components'
// Router 是路由的容器
ReactDOM.render(
  <Router>
    <>
    <nav>
      {/* <Link to="/">首页</Link>
      <Link to="/user">用户管理</Link>
      <Link to="/profile">个人中心</Link> */}
      <Link to={{pathname:'/',state:'首页'}}>首页</Link>
      <Link to={{pathname:'/user',state:'用户管理'}}>用户管理</Link>
      <Link to={{pathname:'/profile',state:'个人中心'}}>个人中心</Link>
    </nav>
    {/* exact 精确 */}
      <Route path="/" component={Com.Home} exact/>
      <Route path="/user" component={Com.User}/>
      <Route path="/profile" component={Com.Profile}/>
    </>
  </Router>,
  document.getElementById('root')
);

