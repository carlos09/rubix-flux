import React from 'react';
import Login from '../auth/app-login';
import AuthStore from '../../stores/app-auth.js';
import AuthenticationMixin from '../../mixins/AuthenticationMixin.js';
//import DashActions from '../../actions/app-actions';
import DashActions from '../../actions/dash-action';

var manageAct = React.createClass({
  mixins: [ AuthenticationMixin ],
  getData: function() {
    console.log('test1');
    //DashActions.getEntityData();
  },
  getInitialState: function(){
     this.dataChanged = this.dataChanged.bind(this);
     return {
       open: false,
       class: "account-container",
       stationPrivacy: false
     }
  },
 handleClick: function(){
   if(this.state.open) {
     this.setState({
       open: false,
       class: "account-container",
     });
   }else{
     this.setState({
       open: true,
       class: "account-container open"
     });
   }
 },
 dataChanged: function(data) {
   data = { staton: "New text comes here" }
 },
  render: function () {
    var token = AuthStore.authGetToken();
    return (
      <div>
        <Col sm={12}>
          <h2 className="h1-class">Manage Accounts</h2>
          <div onClick={this.getData()}>Get info:</div> {this.props.getData}
        </Col>

      </div>
    );
  }
});

module.exports = manageAct;
