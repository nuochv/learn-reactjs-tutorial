import React from 'react';

export default function SettingSize(props) {
  const onSetFontSize = (value) => {
    props.onSetFontSize(value);
  };

  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">Size: {props.fontSize}</h3>
      </div>
      <div className="panel-body">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => onSetFontSize(2)}
          disabled={props.fontSize >= 36}
        >
          Tăng
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-success"
          onClick={() => onSetFontSize(-2)}
          disabled={props.fontSize <= 8}
        >
          Giảm
        </button>
      </div>
    </div>
  );
}
