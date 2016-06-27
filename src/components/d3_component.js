var d3 = require('d3'),
  React = require('react');
/*var data = [{'x':1, 'y':4},{'x':2, 'y':5},
    {'x':3, 'y':6},
    {'x':4, 'y':6},
    {'x':5, 'y':5},
    {'x':6, 'y':4},
    {'x':7, 'y':3},
    {'x':8, 'y':2},
    {'x':9, 'y':2},
    {'x':10, 'y':3}];*/

var data = [4, 8, 15, 16, 23, 42];

var BarChart1 = React.createClass({
  data: data,
  render: function() {
    // d3 scaling
    var x = d3.scale.linear()
      .domain([0, d3.max(data)]) //this.props.data)])
      .range([0, 420]);
    var bars = data.map( function(n) {
      return React.createElement('div',
        { className: 'bar',
          style: {width: x(n)+'px' }},
        n);
    });

    // Parent chart div. More advanced version coming soon.
    return React.createElement('div',
      { className: 'chart' },
      bars);
  }
});
module.exports = React.createElement(BarChart1);