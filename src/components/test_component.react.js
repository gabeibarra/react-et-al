var React = require('react');

var TestComponent = React.createElement(
  'h1',
  { key: 'app_ele', 
  	className: 'header' },
  'Hello World! - React test works.'
);

module.exports = TestComponent;