import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box, index) => index !== id));
  };

  return (
    <div>
      {boxes.map((box, index) => (
        <Box key={index} {...box} removeBox={() => removeBox(index)} />
      ))}
      <NewBoxForm addBox={addBox} />
    </div>
  );
};

export default BoxList;