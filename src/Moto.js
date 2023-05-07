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
            <MotoElement cssClass="authorised" title="lorem" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
            <MotoElement cssClass="fair" title="lorem" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
            <MotoElement cssClass="award" title="lorem" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
            <MotoElement cssClass="available" title="lorem" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
         </ul>
      </div>
   );
}

export default Carousel;
