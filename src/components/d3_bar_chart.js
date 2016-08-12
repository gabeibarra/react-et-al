// Bar Chart example. Not exactly reusable pieces.

var d3 = require('d3'),
  React = require('react');

// Data passed when creating instance of class.
var data = [4, 8, 15, 16, 23, 42];

var BarChart1 = React.createClass({
  render: function() {
    var width = 420,
        barHeight = 20;

    // x becomes a scaling function which is used on each data point 
    // in width calculations below.
    var x = d3.scale.linear()
            .domain([0, d3.max(this.props.data)])
            .range([0, width]);

    // Create g elements for each data point with rectangle & text children
    var bars = this.props.data.map( function(d, i) {
      return React.createElement('g',
        { key: i,
          // d3-specific command which stacks the bars:
          transform: 'translate(0, ' + barHeight * i + ')'
        },
        // Add rectangle and text as children to g element:
        [ React.createElement('rect',
          { className: 'bar',
            width: x(d),
            // subtracting 1 creates small space b/ bars
            height: barHeight - 1,
            key: 'rect'
          }),
          React.createElement('text',
            { x: x(d) - 3,
              y: "9.5",
              dy: ".35em",
              key: 'text'
            }, d // Data point as text
          )]
       );
    });
    // Parent SVG element
    return React.createElement('svg',
      { className: 'chart',
        width: width,
        height: barHeight * data.length
      },
      bars
    );
  }
});

module.exports = React.createElement(BarChart1, 
  {key: 'bar_one', data: data}
);
