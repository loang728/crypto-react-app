import './Carousel.css';

function Carousel() {
  return (
    <div className="carousel_wrapper">
    <h3>Event Gallery</h3>
    <div className="carousel">
       <div className="scroll-arrow" id="scroll-left">
          .
       </div>
       <ul id="imgList">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
       </ul>
       <div className="scroll-arrow" id="scroll-right" onclick="scrollRight()">
          .
       </div>
    </div>
 </div>
  );
}

export default Carousel;
