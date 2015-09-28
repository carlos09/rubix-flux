/*
var Biff = require("../biff");
var _ = require("lodash");

var DashStore = Biff.createStore({

  _stations: [],

  loadStations: function(stations) {
    this._stations = stations;
  },
  getStation: function(_id){
    return _.find(this._stations, { _id: _id});
  },
  getStations: function() {
    return this._stations;
  }
}, function (payload) {
  if (payload.actionType === "STATIONS_LOAD") {
      this.loadStations(payload.data);
      this.emitChange();
  }
})
*/

var _state = {};

_state['stations'] = stations;

console.log('dash store');

var DashStore = Flux.createStore({
  fetchStations: function() {
    return _state['stations']
  },
  setStations: function() {
    _state['stations'] = stations;
  }, function(payload) {
    if (payload.actionType == "FETCH_STATIONS") {
      if (DashStore.fetchStations() != undefined ) {
        DashStore.emitChange();
      } else {
        DashStore.fetchStations();
      }
    }
  }
})

export default DashStore;
