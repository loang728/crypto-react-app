import './Moto.css';

const MotoElement = (props) => {
   return (
      <li>
         <span className={props.cssClass}>.</span>
         <h3>{props.title}</h3>
         <p>{props.description}</p>
      </li>
   );
}

function Carousel() {


   return (
      <div className="bfh_wrapper">
         <div class="bfh_description">
            <h2 class="bfh">Big<i>.</i> Fair<i>.</i> Human<i>.</i></h2>
            <p>Learn why over 5 million clients choose CRYPTO as their trusted online broker.</p>
         </div>
         <ul class="big-fair-human">
            <MotoElement cssClass="authorised" title="lorem" description="Ipsum" />
            <MotoElement cssClass="fair" title="lorem" description="Ipsum" />
            <MotoElement cssClass="award" title="lorem" description="Ipsum" />
            <MotoElement cssClass="available" title="lorem" description="Ipsum" />
         </ul>
      </div>
   );
}

export default Carousel;
