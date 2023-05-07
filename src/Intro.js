import './Intro.css';

function Intro() {
  return (
    <div className="intro-holder">
      <div className="intro-aligner">
        <h1>
          <span>trade with</span>
          <strong>Zero Swaps</strong> on All CRYPTO Ultra Low Accounts for more than 25
          instruments!
        </h1>
        <p>
          Enjoy spreads as low as 0.6 pips and leverage up to 1000:1 on instruments
          like <strong>EURUSD</strong>, <strong>USDJPY</strong>,{" "}
          <strong>EURJPY</strong>, <strong>GBPUSD</strong>, and <strong>Gold</strong>.
        </p>
        <a className="cta open-account"> open account </a>
        <p className="note">New to trading? Try a Demo account.</p>
        <p className="tc">
          Terms and Conditions apply<span className="highlight">*</span>. To read the
          full T&amp;Cs, <a className="highlight underline">click here</a>.
        </p>
      </div>
    </div>
  );
}

export default Intro;
