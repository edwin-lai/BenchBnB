var Store = require('flux/utils').Store;
var BenchConstants = require('../constants/bench_constants');
var AppDispatcher = require('../dispatcher.js');
var _benches = [];
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return _benches.slice(0);
};

var resetBenches = function (benches) {
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
  }
};

module.exports = BenchStore;
