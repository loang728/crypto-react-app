import './About.css';
import { useState } from 'react';

const AboutComponent = () => {
  const [currentColor, setcurrentColor] = useState("red")

  return (
    <h2 >
    This is just an example to show how Router works
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
