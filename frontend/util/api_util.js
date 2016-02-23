var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchBenches: function (bounds) {
    $.get('api/benches?' + jQuery.param(bounds), function (data) {
      ApiActions.receiveAll(data);
    });
  }
};

module.exports = ApiUtil;
