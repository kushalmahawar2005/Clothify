import { useState } from 'react'
import './index.css'
import Header from './Header/Header';
import Layout from './Cart/Layout';
import Productjs from './Products/Productjs';
import VideoSec from './Video/VideoSec';
import VideoCardCon from './VideoCard/VideoCardCon';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
     
      <Layout />
      
      <section className='mt-5'>
      <h3 className='ml-15 text-sm tracking-wide font-semibold hover:underline cursor-pointer'>PRODUCTS</h3>
      <br></br>
      <hr className='border border-[#b1aeae]'></hr>
      <br/>
      <Productjs />
      
      <div className='flex justify-center data1'>
       <button className='border h-[30px] w-[100px] cursor-pointer'>VIEW MORE</button>
       </div>
      </section>

    <section>
      <VideoSec />
      <VideoCardCon />
      </section>
      <br/>
      <Footer/>
      
    </>
  )
}

export default App
