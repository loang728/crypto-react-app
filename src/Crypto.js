import './Crypto.css';
import Records from './CryptoData.json';
import StaticImageSet from './StaticImageSet.js';

const CryptoElement = (props) => {
  return (
    <li key={props.id} >
      <div className="title"> <span className={"ico " + props.abr.toLowerCase()}>.</span> {props.abr} <span className="type">{props.name}</span> </div>
      <div className="amount"> {props.amount}</div>
      <div className="precentage up">{props.precentage}</div>
    </li>
  );
}

const itemsToDiplay = ["BTC", "ETH", "XRP", "LTC", "BCH"];

function Crypto() {

  const listItems = Records.data.map((element) =>
    (itemsToDiplay.includes(element.symbol)) ? <CryptoElement key={element.id} id={element.id} abr={element.symbol} name={element.name} amount={element.price_usd} precentage={element.percent_change_24h} />
      : null
  );

  return (
    <div className="crypto-holder">
      <StaticImageSet />
      <ul className="crypto">

        {listItems}
      </ul>
    </div>
  );
}





export default Crypto;
