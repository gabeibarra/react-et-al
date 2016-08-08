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
  render: function() {
    // d3 scaling
    var width = 420,
        barHeight = 20;
    var x = d3.scale.linear()
          .domain([0, d3.max(this.props.data)]) //this.props.data)])
          .range([0, width]);
    var bars = this.props.data.map( function(n, i) {
      return React.createElement('g',
        { key: i,
          transform: 'translate(0, ' + barHeight * i + ')'
        },
        [ React.createElement('rect',
          { className: 'bar',
            width: x(n),
            height: barHeight - 1
          }),
          React.createElement('text',
            { x: x(n) - 3,
              y: "9.5",
              dy: ".35em"
            }, n
          )]
       );
    /*  return React.createElement('div',                             
        { className: 'bar',
          style: {width: x(n)+'px' }},
        n);*/
    });
    console.log( bars );
    return React.createElement('svg',
      { className: 'chart',
        width: width,
        height: barHeight * data.length
      },
      bars
    );
    /*/ Parent chart div.
    return React.createElement('div',
      { className: 'chart' },
      bars);*/
    
  }
});
module.exports = React.createElement(BarChart1, {data: data});
