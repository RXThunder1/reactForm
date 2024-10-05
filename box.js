import React from 'react';

const Box = ({ width, height, backgroundColor, removeBox }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
        margin: '10px',
      }}
    >
      <button onClick={removeBox}>X</button>
    </div>
  );
};

export default Box;