var React = require('react');
var ReactDOM = require('react-dom');
var TestComponent = require('./components/test_component.react');
var bar_one = require('./components/d3_bar_chart'),
	bar_two = require('./components/d3_line_graph');
// var ReactDOMServer = require('react-dom/server');

var combined = React.createElement('div', 
	{className: 'container'},
	[TestComponent, bar_one, bar_two]);

ReactDOM.render(combined,
  document.getElementById('react-renders-here'));
