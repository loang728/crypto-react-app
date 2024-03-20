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

function Moto() {


   return (
      <div className="bfh_wrapper">
         <div className="bfh_description">
            <h2 className="bfh">Be<i>.</i> Fair<i>.</i> Human<i>.</i></h2>
            <p>Learn why over 5 million clients choose CRYPTO as their trusted online broker.</p>
         </div>
         <ul className="big-fair-human">
            <MotoElement cssClass="authorised" title="Authorised" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
            <MotoElement cssClass="fair" title="Fair" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
            <MotoElement cssClass="award" title="Award" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
            <MotoElement cssClass="available" title="Available" description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " />
         </ul>
      </div>
   );
}

export default Moto;
