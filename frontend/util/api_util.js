var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchBenches: function () {
    $.get('api/benches', function (data) {
      ApiActions.receiveAll(data);
    });
  }
};

module.exports = ApiUtil;
