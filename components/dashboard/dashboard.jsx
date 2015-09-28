var React = require('react');
var Login = require('../auth/app-login');
var AuthStore = require('../../stores/app-auth.js');
var AuthenticationMixin = require('../../mixins/AuthenticationMixin.js');

import ManageAct from './manageAct';

var Dashboard = React.createClass({
  mixins: [ AuthenticationMixin ],
  render: function () {
    var token = AuthStore.authGetToken();
    return (
      <Grid id="dash-view">
        <Row className="page-heading">
          <Col sm={6} className="text-left">
            <h1><i className="material-icons md-36">dashboard</i><span className="vert-middle">Dashboard</span></h1>
          </Col>
          <Col sm={6} className="text-right">
            <h2 className="h1-class">Balance: $XXXXX</h2>
          </Col>
        </Row>

        <Row>
          <Col sm={4} className="account-stats text-center">
            <div className="buckets">
              <h2 className=""><i className="material-icons md-48">visibility</i><span className="vert-middle">####</span></h2>
              <p>Unique Content Views*</p>
            </div>
          </Col>
          <Col sm={4} className="account-stats text-center">
            <div className="buckets">
              <h2 className=""><i className="material-icons md-48">local_atm</i><span className="vert-middle">####</span></h2>
              <p>Generated Revenue*</p>
            </div>
          </Col>
          <Col sm={4} className="account-stats text-center">
            <div className="buckets">
              <h2 className=""><i className="material-icons md-48">wifi_tethering</i><span className="vert-middle">####</span></h2>
              <p>Managed Stations*</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <p className="ast-info">* Metrics updated at 12am PST daily</p>
          </Col>
        </Row>
        <Row>
        <ManageAct />
        </Row>
      </Grid>
    );
  }
});

module.exports = Dashboard;
