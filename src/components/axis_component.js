// Reusable axis that will work for both X and Y
// 2016-08-11 Need to add tick marks

var React = require('react')
    // ,d3 = require('d3')
    ;

module.exports = React.createClass({
  render: function() {
    /*  Takes properties:
      * axis_type
      * axis_origin
      * axis_length 
      */

    // Graph uses 'axis_type' to determine if this is X or Y:
    var axis_type = this.props.axis_type,
        line_attrs = {
          className: 'axis',
          x1: this.props.axis_origin[0],
          y1: this.props.axis_origin[1]
        },
        axis_length = this.props.axis_length;
    if ( axis_type === 'x' ) {
      line_attrs.x2 = line_attrs.x1 + axis_length;
      line_attrs.y2 = line_attrs.y1;
    } else if ( axis_type === 'y' ) {
      line_attrs.x2 = line_attrs.x1;
      line_attrs.y2 = line_attrs.y1 - axis_length;
    }
    return React.createElement('line', line_attrs);
  }
});
