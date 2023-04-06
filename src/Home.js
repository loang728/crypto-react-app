import './App.css';
import Navigation from './Navigation';
import Intro from './Intro';
import Crypto from './Crypto';
import Register from './Register';
import WhyUs from './WhyUS';
import Form from './Form';
import Carousel from './Carousel';
import StaticImageSet from './StaticImageSet';
import { useMediaQuery } from 'react-responsive';

function Home() {
  return (
    <>
      <div className="gray-bg">
        <div className="base-layer">
          <div className="gradient">.</div>
        </div>
        <div className="content">
        <Intro />
        <Crypto />
        <WhyUs />
        <Register />
        <Form />
        <Carousel />
        {/*
        
        <Registration/>
        <Confirm/>
        <EventGallery/>
        <Moto/> 
  */}
  </div>
      </div>



 </>
  );
}

export default Home;
