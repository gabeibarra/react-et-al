var React = require('react');
var ReactDOM = require('react-dom');
var TestComponent = require('./components/test_component.react');
var d3Test = require('./components/d3_component');
// var ReactDOMServer = require('react-dom/server');

var combined = React.createElement('div', 
	{className: 'container'},
	[TestComponent, d3Test]);

ReactDOM.render(combined,
  document.getElementById('react-renders-here'));
