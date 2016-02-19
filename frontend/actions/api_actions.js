var AppDispatcher = require('../dispatcher.js');
var BenchConstants = require('../constants/bench_constants.js');

var ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ApiActions;
