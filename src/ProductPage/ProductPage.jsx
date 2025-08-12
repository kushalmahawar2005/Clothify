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

      <div>
       
        <div className='flex justify-center text-sm h-[44px] bg-stone-800' id = "Product">
          <ul className='flex gap-16 mt-3 text-white font-semibold cursor-pointer'>
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
            <li className={`hover:underline tracking-wide ${activeTab === 'Kids' ? 'underline' : ''}`}
              onClick={() => handleCategoryClick('Kids')}
            >
              KIDS
            </li>
          </ul>
        </div>

     
        <div className='flex justify-center'>
             <Slider />
       
        </div>

       
        <div ref={sectionRef} className='m-20'>
          <h2 className='hover:underline text-xl tracking-wide text-[#3b3b3b] text-center'>
            {activeTab.toUpperCase()}
          </h2>
        </div>
        <div>
          {activeTab === 'Men' && <Mancon />}
          {activeTab === 'Women' && <Womencon />}
          {activeTab === 'Kids' && <Childcon />}
        </div>

        <Footer showImages={false} />
      </div>
    </>
  );
}
