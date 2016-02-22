/*global google*/

var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util.js');

var Map = React.createClass({
  markers: {},

  componentDidMount: function(){
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', ApiUtil.fetchBenches);
    var that = this;

    this.listener = BenchStore.addListener(function () {
      var benches = BenchStore.all();
      var latLng;
      var bench;
      for (var i = 0; i < benches.length; i++) {
        bench = benches[i].bench;
        that.markers[bench] = new google.maps.Marker({
          position: {
            lat: bench.lat,
            lng: bench.lng
          },
          map: that.map,
          title: bench.description
        });
      }
    });
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  render: function () {
    return <div className="map" ref="map">random text</div>;
  }
});

module.exports = Map;
