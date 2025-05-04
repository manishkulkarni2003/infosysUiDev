import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select an Option');

  const options = ['option 1', 'option 2', 'option 3'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleToggle = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        {selected}
      </button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option}>
              <button onClick={() => handleToggle(option)}>{option}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
