import './App.css';
import Intro from './Intro';
import Crypto from './Crypto';
import Register from './Register';
import WhyUs from './WhyUS';
import Form from './Form';
import Carousel from './Carousel';
import Moto from './Moto';

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
        </div>
      </div>
      <Moto />
    </>
  );
}

export default Home;
