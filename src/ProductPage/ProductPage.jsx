import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Mancon from './Man/Mancon';
import Womencon from './Women/WomenCon';
import Childcon from './Child/ChildCon'
import Slider from "./Slider";



export default function ProductPage({ showImages }) {
  const [activeTab, setActiveTab] = useState("Men");
  const sectionRef = useRef(null); 

  const handleCategoryClick = (category) => {
    setActiveTab(category);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header showImages={false} />

      <div className="w-full">
        <div className="flex justify-center items-center text-xs sm:text-sm h-[36px] sm:h-[44px] bg-stone-800" id="Product">
          <ul className="flex gap-6 sm:gap-16 mt-2 sm:mt-3 text-white font-semibold cursor-pointer">
            <li
              className={`hover:underline tracking-wide ${activeTab === 'Men' ? 'underline' : ''}`}
              onClick={() => handleCategoryClick('Men')}
            >
              MEN
            </li>
            <li
              className={`hover:underline tracking-wide ${activeTab === 'Women' ? 'underline' : ''}`}
              onClick={() => handleCategoryClick('Women')}
            >
              WOMEN
            </li>
            <li
              className={`hover:underline tracking-wide ${activeTab === 'Kids' ? 'underline' : ''}`}
              onClick={() => handleCategoryClick('Kids')}
            >
              KIDS
            </li>
          </ul>
        </div>
        <div className="flex justify-center w-full px-2 sm:px-0">
          <Slider />
        </div>
        <div ref={sectionRef} className="my-8 sm:my-20 px-2 sm:px-0">
          <h2 className="hover:underline text-lg sm:text-xl tracking-wide text-[#3b3b3b] text-center">
            {activeTab.toUpperCase()}
          </h2>
        </div>
        <div className="w-full">
          {activeTab === 'Men' && <Mancon />}
          {activeTab === 'Women' && <Womencon />}
          {activeTab === 'Kids' && <Childcon />}
        </div>
        <Footer showImages={false} />
      </div>
    </>
  );
}
