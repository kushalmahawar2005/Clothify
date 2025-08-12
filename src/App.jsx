import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Cart/Layout';
import VideoSec from './Video/VideoSec';
import VideoCardCon from './VideoCard/VideoCardCon';
import Footer from './Footer/Footer';
import ProductPage from './ProductPage/ProductPage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
                <section>
                  <VideoSec />
                  <VideoCardCon />
                </section>
                <br />
                <Footer />
              </>
            }
          />
          <Route path="/product" element={<ProductPage/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
