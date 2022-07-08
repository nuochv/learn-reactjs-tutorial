import React from 'react';

export default function Reset(props) {
  const handleReset = () => {
    props.handleReset(true);
  };
  return (
    <button type="button" onClick={handleReset} className="btn btn-primary">
      Reset
    </button>
  );
}
