import React, { useState } from 'react';
import Select from 'react-select';

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const generateColors = amount => {
  let data = [];

  for (let i = 0; i <= amount; i++) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    data.push({ label: randomColor, value: randomColor });
  }

  return data;
};

const colourStyles = {
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.value) }),
  option: (styles, { data }) => ({ ...styles, ...dot(data.value) }),
};

const InfinityScroll = () => {
  const [options, setOptions] = useState(generateColors(10));

  return (
    <Select
      options={options}
      onMenuScrollToBottom={() => {
        setOptions(colors => [...colors, ...generateColors(10)]);
      }}
      styles={colourStyles}
    />
  );
};

export default InfinityScroll;
