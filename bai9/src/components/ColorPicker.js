import React, { Component } from 'react';

export class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'green', 'blue', 'yellow'],
    };
  }
  changeColor(color) {
    return {
      backgroundColor: color,
    };
  }

  onSetColor = (color) => {
    this.props.receiveColor(color);
  };

  render() {
    var colorElement = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.changeColor(color)}
          className={this.props.color === color ? 'active' : ''}
          onClick={() => this.onSetColor(color)}
        ></span>
      );
    });

    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
            {colorElement}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
