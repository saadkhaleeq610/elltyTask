import React, { useState } from 'react';
import './App.css';
import CustomCheckbox from './CustomCheckbox';

function App() {
  return (
    <div className="flex flex-col gap-40 justify-center pt-36 items-center">
      <CheckboxModal />
      <p className='text-sm font-montserrat text-[#a1a1a1]'>Created by Saad Khaleeq</p>
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

  return (
    <div className="bg-white text-[#1F2128] border-[#EEEEEE] items-center py-[10px] rounded-[6px] text-[14px] border w-[370px] font-montserrat flex flex-col justify-between shadow-[0px_8px_15px_0px_#1414141F,_0px_0px_4px_0px_#1414141A]">
      <div className="flex items-center w-full h-[42px] justify-between pt-[8px] pb-[8px] pl-[22px] pr-[15px]">
        <span>All pages</span>
        <div className="flex w-[35px] h-[35px] items-center justify-center">
          <CustomCheckbox page="allPages" checked={selectedPages.allPages} onChange={handleCheckboxChange} />
        </div>
      </div>
      <div className="py-[10px] px-[15px]">
        <hr className="w-[340px] h-[0.7px] border-0 bg-[#CDCDCD]" />
      </div>
      <div className="flex flex-col gap-0">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex items-center w-[370px] h-[42px] justify-between pt-[8px] pb-[8px] pl-[22px] pr-[22px]">
            <span>Page {num}</span>
            <CustomCheckbox page={`page${num}`} checked={selectedPages[`page${num}`]} onChange={handleCheckboxChange} />
          </div>
        ))}
      </div>
      <div className="py-[10px]">
        <hr className="w-[340px] h-[0.7px] border-0 bg-[#CDCDCD]" />
      </div>
      <div className="py-[10px] px-[15px] mx-auto">
        <button className="w-[340px] h-[40px] rounded-[4px] font-normal text-[14px] cursor-pointer bg-[#FFCE22] text-black hover:bg-[#FFD84D]">
          Done
        </button>
      </div>
    </div>
  );
};

export default App;