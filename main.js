var $ = require('jquery')
window.jQuery = $
window.$ = $

 //window.ServerAddress = "192.168.0.100:8080"
 //window.ServerAddress = "100.64.79.183"
 window.ServerAddress = "localhost:8080"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './css/style.css'
import './css/c3.css'

require('bootstrap')
import React from 'react'
import ReactDOM from 'react-dom'
import HomeView from './app/HomeView/HomeView.jsx'
import MainView from './app/MainView.jsx'
import { Router, Route, Link, hashHistory, IndexRedirect} from 'react-router'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainView}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={HomeView}/>
    </Route>
  </Router>
), document.getElementById('app-container'))
