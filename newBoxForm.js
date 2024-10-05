import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData({ width: '', height: '', backgroundColor: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
      />
      <input
        type="number"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
      />
      <input
        type="text"
        name="backgroundColor"
        placeholder="Color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button type="submit">Add Box</button>
    </form>
  );
};

export default NewBoxForm;