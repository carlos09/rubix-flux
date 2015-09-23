var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var auth = require('../../stores/app-auth'); // TODO / USE DISPATCHER & ACTIONS
var Login = require('../auth/app-login');
var AppActions = require('../../actions/app-actions.js');
var AuthStore = require('../../stores/app-auth.js');
var Link = Router.Link;

var Sidebar = React.createClass({
  getInitialState: function () {
    return AuthStore.getState();
  },
  setStateOnAuth: function (loggedIn) {
    this.setState(AuthStore.getState());
  },
  componentWillMount: function () {
    AuthStore.authOnChangeHeader(this.setStateOnAuth);
  },
  render: function () {
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Log out</Link> :
      <Link to="login">Sign in</Link>;
    return (
      <div id="sidebar-wrapper">
        <a href="#" className="logo-link"><img src="/assets/img/station_sidebar_logo.png" className="logo img-responsive"/></a>
        <ul className="nav nav-tabs">
          <li>{loginOrOut}</li>
          <li><Link to="about">About</Link></li>
          <li><Link to="dashboard">Schedule Dashboard</Link></li>
        </ul>
        <br/>
      </div>
    );
  }
});




module.exports = Sidebar;
