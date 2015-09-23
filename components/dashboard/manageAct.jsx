var React = require('react');
var Login = require('../auth/app-login');
var AuthStore = require('../../stores/app-auth.js');
var AuthenticationMixin = require('../../mixins/AuthenticationMixin.js');


var manageAct = React.createClass({
  mixins: [ AuthenticationMixin ],
  render: function () {
    var token = AuthStore.authGetToken();
    return (
      <Row>
        <Col sm={12}>
          <h2 className="h1-class">Manage Accounts</h2>
        </Col>
      </Row>
    );
  }
});

module.exports = manageAct;
