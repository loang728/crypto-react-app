import './Carousel.css';

const CarouselElement = (props) => {
   return (
     <li key={props.id} >
       {props.numberDisplay}
     </li>
   );
 }

function Carousel() {
   const numbers = [1, 2, 3, 4, 5];
   const listItems = numbers.map((number) =>
    <CarouselElement key={number} numberDisplay={number}  />
 );

  return (
    <div className="carousel_wrapper">
    <h3>Event Gallery</h3>
    <div className="carousel">
       <div className="scroll-arrow" id="scroll-left">
          .
       </div>
       <ul id="imgList">
       {listItems}
       </ul>
       <div className="scroll-arrow" id="scroll-right" onclick="scrollRight()">
          .
       </div>
    </div>
 </div>
  );
}

export default Carousel;

import './Carousel.css';

const CarouselElement = (props) => {
   return (
     <li key={props.id} >
       {props.numberDisplay}
     </li>
   );
 }

function Carousel() {
   const numbers = [1, 2, 3, 4, 5];
   const listItems = numbers.map((number) =>
    <CarouselElement key={number} numberDisplay={number}  />
 );

  return (
    <div className="carousel_wrapper">
    <h3>Event Gallery</h3>
    <div className="carousel">
       <div className="scroll-arrow" id="scroll-left">
          .
       </div>
       <ul id="imgList">
       {listItems}
       </ul>
       <div className="scroll-arrow" id="scroll-right" onclick="scrollRight()">
          .
       </div>
    </div>
 </div>
  );
}

export default Carousel;
