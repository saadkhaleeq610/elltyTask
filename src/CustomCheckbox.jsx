import React, { useState, useRef } from 'react';

const CustomCheckbox = ({ page, checked, onChange }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [hoveredInput, setHoveredInput] = useState(null);
  const focusTimeout = useRef(null);

  const handleFocus = () => {
    setFocusedInput(page);
    if (focusTimeout.current) {
      clearTimeout(focusTimeout.current);
    }
  };

  const handleBlur = () => {
    focusTimeout.current = setTimeout(() => {
      if (focusedInput === page) {
        setFocusedInput(null);
      }
    }, 200);
  };

  const handleMouseEnter = () => {
    setHoveredInput(page);
  };

  const handleMouseLeave = () => {
    setHoveredInput(null);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(page)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-[23px] h-[23px] appearance-none rounded-[6px] cursor-pointer flex items-center justify-center border border-[#CDCDCD] transition-all relative
        hover:border-[#BDBDBD]
        checked:bg-[#2469F6] checked:border-none
        ${focusedInput === page ? 'focus:outline-none focus:ring-2 focus:ring-[#5087F8]/50' : ''}
        before:content-[''] before:absolute before:w-[13px] before:h-[8px] before:border-l-2 before:border-b-2 before:border-white before:rotate-[-45deg] before:left-[4px] before:top-[6px]
        checked:before:block checked:before:border-white checked:before:border-l-2 checked:before:border-b-2 checked:before:left-[4px] checked:before:top-[6px]
        before:hidden
        ${hoveredInput === page && !checked ? 'hover:before:block hover:before:border-[#E3E3E3] hover:before:left-[4px] hover:before:top-[6px]' : ''}
        ${hoveredInput === page && checked ? 'hover:before:block hover:before:border-white hover:before:left-[4px] hover:before:top-[6px]' : ''}
        ${hoveredInput === page && checked ? 'hover:bg-[#5087F8]' : ''}
        active:before:border-[#878787]
      `}
    />
  );
};

export default CustomCheckbox;
