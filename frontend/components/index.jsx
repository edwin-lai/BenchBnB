var React = require('react');
var BenchStore = require('../stores/bench.js');

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    var that = this;
    this.listener = BenchStore.addListener(function () {
      that.setState({ benches: BenchStore.all() });
    });
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  benches: function () {
    return this.state.benches.map(function (obj) {
      return obj.bench.description;
    });
  },

  render: function () {
    return <ul>{this.state.benches.map(function (obj) {
      return <li>{obj.bench.description}</li>;
    })}</ul>;
  }
});

module.exports = Index;
