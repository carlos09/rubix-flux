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
            <h1><i className=""></i><span className="vert-middle">Dashboard</span></h1>
          </Col>
          <Col sm={6} className="text-right">
            <h2 className="h1-class">Balance: $XXXXX</h2>
          </Col>
        </Row>

        <Row>
          <Col sm={4} className="account-stats text-center">
            <div className="buckets">
              <h2 className=""><i className="material-icons md-48"></i><span className="vert-middle">####</span></h2>
            </div>
          </Col>
          <Col sm={4} className="account-stats text-center">
            <div className="buckets">
              <h2 className=""><i className="material-icons md-48"></i><span className="vert-middle">####</span></h2>
            </div>
          </Col>
          <Col sm={4} className="account-stats text-center">
            <div className="buckets">
              <h2 className=""><i className="material-icons md-48"></i><span className="vert-middle">####</span></h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <p className="ast-info">* Metrics updated at 12am PST daily</p>
          </Col>
        </Row>

        <ManageAct />
      </Grid>
    );
  }
});

module.exports = Dashboard;
