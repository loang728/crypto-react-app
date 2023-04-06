import './StaticImageSet.css';




function StaticImageSet() {
  return (
<>
  <img
    className="static-bg-image greentint"
    src={require('./img/Intersect.png')}
    width="269"
    height="176"
    alt="Background"
  />
  <img
    className="static-bg-image redzero"
    src={require("./img/zero-mobile-bigger-tinted-1.png")}
    alt="Background"
  />
  <img
    className="static-bg-image greentintline"
    src={require("./img/green-titn-line-tablet.png")}
    alt="Background"
  />
  <img
    className="static-bg-image greentintline-big"
    src={require("./img/green-titn-line-desktop.png")}
    width="1067"
    height="1210"
    alt="Background"
  />
</>

    
  );
}

export default StaticImageSet;
