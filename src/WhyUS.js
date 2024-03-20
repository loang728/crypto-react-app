import './WhyUS.css';

const WhyUsTitle = () => {
  return (
    <>
      <h2 className="green-underline"> Why <strong>Trade</strong> with CRYPTO?</h2>
      <p className="why"> We have been providing traders around the world with the same <strong>premium experience</strong> for over a decade. As an <strong>industry-leader</strong>, we know what the modern trader needs to be <strong>successful</strong> in the markets. </p>
    </>)
}

const AdvantageItem = (props) => {
  return (
    <li className={props.cssClass}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

const AdvantagesList = () => {
  return (
    <ul className="advantages">
      <AdvantageItem cssClass="fast-execusion" title="Superior Trade Execution" description="99% of trades are executed in less than a second, with no requotes or rejections." />
      <AdvantageItem cssClass="competitive-pricing" title="Competitive Pricing" description="We offer some of the lowest spreads and we don’t charge commissions." />
      <AdvantageItem cssClass="tech" title="Advanced Technology" description="Trade on MT4 or MT5, with expert tools, across desktop, web and mobile." />
      <AdvantageItem cssClass="dollar" title="Start with $5" description="Start trading your preferred instruments with as little as a $5 minimum deposit." />
    </ul>
  )
}

const WhyUs = (props) => {
  return (
    <div className="advantages_wrapper">
      <WhyUsTitle />
      <AdvantagesList />
    </div>
  );
}

export default WhyUs;
