import './App.css';
import Intro from './Intro';
import Crypto from './Crypto';
import Register from './Register';
import WhyUs from './WhyUS';
import Form from './Form';
import CarouselContainer from './CarouselContainer';
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
          <CarouselContainer>
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
          </CarouselContainer>
        </div>
      </div>
      <Moto />
    </>
  );
}

export default Home;
