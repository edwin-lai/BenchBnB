var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('./components/index.jsx');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var routes = (
  <Route path="/" component={Index}/>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById('root')
  );
});
