import React from 'react';

export default function Result(props) {
  const setStyle = () => {
    return {
      color: props.color,
      borderColor: props.color,
      fontSize: props.fontSize,
    };
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p>
        Color - {props.color} - Fontsize: {props.fontSize}
      </p>
      <div id="content" style={setStyle()}>
        <span>Nội dung content</span>
      </div>
    </div>
  );
}
