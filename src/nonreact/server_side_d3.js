/* While jsdom is interesting, this method is bad for React.
   The best output you get is a string or html document, and that isn't
   taking advantage of the benefits of React.
*/

var fs = require('fs'),
  d3 = require('d3'), 
  jsdom = require('jsdom'),
  data = [{'x':1, 'y':4},
    {'x':2, 'y':5},
    {'x':3, 'y':6},
    {'x':4, 'y':6},
    {'x':5, 'y':5},
    {'x':6, 'y':4},
    {'x':7, 'y':3},
    {'x':8, 'y':2},
    {'x':9, 'y':2},
    {'x':10, 'y':3}];


function RenderGraph() {
  // jsdom syntax:
  /* var env = jsdom.env({html: '',
    features: { QuerySelector: true },
    done: function(errors, window){
      window.d3 = d3.select(window.document);
      
      var svg = window.d3.select("body")
        // This div's children will get written to identical div in html
        .append('div').attr('id', 'react-renders-here')
        .append("svg");

      // window.document.querySelector('#react-renders-here');
      return window.document.documentElement.innerHTML;
    }
  });*/
  var document = jsdom.jsdom('',
    {features: { QuerySelector: true }})
  var window = document.defaultView;
  window.d3 = d3.select(window.document);

  // Custom d3 function here:
  var margin = {top: 30, right: 30, bottom: 30, left: 30},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  // Adds the svg canvas
  var svg = window.d3.select("body")
    // This div will get written as identical div in html
    .append('div')
    .attr('id', 'react-renders-here')
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");
 
  // Get the data
  data.forEach(function(d) {
    d.x = d.x;
    d.y = d.y;
  });

  // Set the ranges
  var x = d3.scale.linear().range([0, width]);
  var y = d3.scale.linear().range([height, 0]);

  // Define the axes
  var xAxis = d3.svg.axis().scale(x)
    .orient("bottom");
  var yAxis = d3.svg.axis().scale(y)
    .orient("left");

  // Scale the range of the data
  x.domain([0, d3.max(data, function(d) { return d.x; })]);
  y.domain([0, d3.max(data, function(d) { return d.y; })]);

  // Add the X Axis
  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  // Add the Y Axis
  svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

  // Define the line
  var valueline = d3.svg.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });
  svg.append("path")
    .attr("class", "line")
    .attr("d", valueline(data));
  console.log(typeof(document.querySelector('body').innerHTML));
  return document.querySelector('body').innerHTML;
}
module.exports = RenderGraph;