import './About.css';
import { useState } from 'react';

const AboutComponent = () => {
  const [currentColor, setcurrentColor] = useState("red")

  return (
    <h2 >
     Apples are {currentColor}
    </h2>
  );
}

const About = () => {
  return (
    <h2>
      About us page updated
      <AboutComponent/>
    </h2>
  );
}

export default About;
