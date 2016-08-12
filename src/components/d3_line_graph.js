var React = require('react'),
    d3 = require('d3'),
    axis_component = require('./axis_component.js');

var data = [1,4,5,5.5,5.6,5,4,3,3.5,3.6,4.1,4];

var LineGraph = React.createClass({
  render: function() {
    var margin = [ 20, 20, 30, 50 ],
        width = 900,
        height = 300,
        multiplied = 50;

    /* var x = d3.scale.linear()
            .range( [0, width] );
    var y = d3.scale.linear()
            .range( [height, 0] ); */

    var axis_origin = [ margin[3], height + margin[0] ],
        x_axis = React.createElement(axis_component,
          { axis_type: 'x',
            axis_origin: axis_origin,
            axis_length: width,
            key: 'x_axis'
          }),
        y_axis = React.createElement(axis_component,
          { axis_type: 'y',
            axis_origin: axis_origin,
            axis_length: height,
            key: 'y_axis'
          });

    
    // Parent SVG element
    return React.createElement('svg',
      { className: 'chart',
        width: width + margin[1] + margin[3],
        height: height + margin[0] + margin[2]
      },
      [x_axis, y_axis]
    );
  }
});

module.exports = React.createElement(LineGraph,
  {key: 'line_graph', data: data}
);
