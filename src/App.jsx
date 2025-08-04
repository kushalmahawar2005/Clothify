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
