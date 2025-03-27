import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  return (
    <div className="flex justify-center pt-36 items-center">
      <CheckboxModal />
    </div>
  );
}

const CheckboxModal = () => {
  const [selectedPages, setSelectedPages] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const [focusedInput, setFocusedInput] = useState(null);
  const [hoveredInput, setHoveredInput] = useState(null);
  const focusTimeout = useRef(null);

  const handleCheckboxChange = (page) => {
    setSelectedPages((prev) => {
      if (page === 'allPages') {
        const newValue = !prev.allPages;
        return {
          allPages: newValue,
          page1: newValue,
          page2: newValue,
          page3: newValue,
          page4: newValue,
        };
      }
      return {
        ...prev,
        [page]: !prev[page],
        allPages: false,
      };
    });
  };

  const handleFocus = (page) => {
    setFocusedInput(page);
    if (focusTimeout.current) {
      clearTimeout(focusTimeout.current);
    }
  };

  const handleBlur = (page) => {
    focusTimeout.current = setTimeout(() => {
      if (focusedInput === page) {
        setFocusedInput(null);
      }
    }, 200);
  };

  const handleMouseEnter = (page) => {
    setHoveredInput(page);
  };

  const handleMouseLeave = () => {
    setHoveredInput(null);
  };

  return (
    <div className="bg-white items-center py-[10px] rounded-[6px] text-[#1F2128] text-[14px] border border-[#EEEEEE] w-[370px] font-montserrat flex flex-col justify-between shadow-[0px_8px_15px_0px_#1414141F,_0px_0px_4px_0px_#1414141A]">
      <div className="flex items-center w-full h-[42px] justify-between pt-[8px] pb-[8px] pl-[22px] pr-[15px]">
        <span>All pages</span>
        <div className="flex w-[35px] h-[35px] items-center justify-center">
          <input
            type="checkbox"
            checked={selectedPages.allPages}
            onChange={() => handleCheckboxChange('allPages')}
            onFocus={() => handleFocus('allPages')}
            onBlur={() => handleBlur('allPages')}
            onMouseEnter={() => handleMouseEnter('allPages')}
            onMouseLeave={handleMouseLeave}
            className={`w-[23px] h-[23px] appearance-none rounded-[6px] cursor-pointer flex items-center justify-center border border-[#CDCDCD] transition-all relative
              hover:border-[#BDBDBD]
              checked:bg-[#2469F6] checked:border-none
              ${focusedInput === 'allPages' ? 'focus:outline-none focus:ring-2 focus:ring-[#5087F8]/50' : ''}
              before:content-[''] before:absolute before:w-[13px] before:h-[8px] before:border-l-2 before:border-b-2 before:border-white before:rotate-[-45deg] before:left-[4px] before:top-[6px]
              checked:before:block checked:before:border-white checked:before:border-l-2 checked:before:border-b-2 checked:before:left-[4px] checked:before:top-[6px]
              before:hidden
              ${hoveredInput === 'allPages' && !selectedPages.allPages ? 'hover:before:block hover:before:border-[#E3E3E3] hover:before:left-[4px] hover:before:top-[6px]' : ''}
              ${hoveredInput === 'allPages' && selectedPages.allPages ? 'hover:before:block hover:before:border-white hover:before:left-[4px] hover:before:top-[6px]' : ''}
              ${hoveredInput === 'allPages' && selectedPages.allPages ? 'hover:bg-[#5087F8]' : ''}
              active:before:border-[#878787]
              `}
          />
        </div>
      </div>
      <div className="py-[10px] px-[15px]">
        <hr className="w-[340px] h-[0.7px] bg-[#CDCDCD] border-0" />
      </div>
      <div className="flex flex-col gap-0">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex items-center w-[370px] h-[42px] justify-between pt-[8px] pb-[8px] pl-[22px] pr-[22px]">
            <span>Page {num}</span>
            <input
              type="checkbox"
              checked={selectedPages[`page${num}`]}
              onChange={() => handleCheckboxChange(`page${num}`)}
              onFocus={() => handleFocus(`page${num}`)}
              onBlur={() => handleBlur(`page${num}`)}
              onMouseEnter={() => handleMouseEnter(`page${num}`)}
              onMouseLeave={handleMouseLeave}
              className={`w-[23px] h-[23px] appearance-none rounded-[6px] cursor-pointer flex items-center justify-center border border-[#CDCDCD] transition-all relative
                hover:border-[#BDBDBD]
                checked:bg-[#2469F6] checked:border-none
                ${focusedInput === `page${num}` ? 'focus:outline-none focus:ring-2 focus:ring-[#5087F8]/50' : ''}
                before:content-[''] before:absolute before:w-[13px] before:h-[8px] before:border-l-2 before:border-b-2 before:border-white before:rotate-[-45deg] before:left-[4px] before:top-[6px]
                checked:before:block checked:before:border-white checked:before:border-l-2 checked:before:border-b-2 checked:before:left-[4px] checked:before:top-[6px]
                before:hidden
                ${hoveredInput === `page${num}` && !selectedPages[`page${num}`] ? 'hover:before:block hover:before:border-[#E3E3E3] hover:before:left-[4px] hover:before:top-[6px]' : ''}
                ${hoveredInput === `page${num}` && selectedPages[`page${num}`] ? 'hover:before:block hover:before:border-white hover:before:left-[4px] hover:before:top-[6px]' : ''}
                ${hoveredInput === `page${num}` && selectedPages[`page${num}`] ? 'hover:bg-[#5087F8]' : ''}
                active:before:border-[#878787]
                `}
            />
          </div>
        ))}
      </div>
      <div className="py-[10px]">
        <hr className="w-[340px] h-[0.7px] bg-[#CDCDCD] border-0" />
      </div>
      <div className="py-[10px] px-[15px] mx-auto">
        <button className="w-[340px] h-[40px] bg-[#FFCE22] hover:bg-[#FFD84D] rounded-[4px] font-normal text-[14px] cursor-pointer">
          Done
        </button>
      </div>
    </div>
  );
};

export default App;