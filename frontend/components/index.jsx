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

  render: function () {
    return <content></content>;
  }
});

module.exports = Index;
