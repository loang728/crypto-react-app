import './Footer.css';


function Footer() {
  return (
    <footer>
    <div className="container partner">
       <div className="footer-partners__wrapper hidden-xs hidden-sm">
         
          <div className="footer-partners__social">
             <div className="social-icons">
                <span>Follow us:</span>
                <a href="/" rel="nofollow noopener noreferrer" target="_blank">
                <i className="fa fa-facebook"></i>
                </a>
                <a href="/" rel="nofollow noopener noreferrer" target="_blank">
                <i className="fa fa-twitter"></i>
                </a>
                <a href="/" rel="nofollow noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-play"></i>
                </a>
                <a href="/" rel="nofollow noopener noreferrer" target="_blank">
                <i className="fa fa-instagram"></i>
                </a>
                <a href="/" rel="nofollow noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin"></i>
                </a>
             </div>
          </div>
       </div>
    </div>
    <div className="container-privacy">
       <div className="privacy-aligner">
          <ul className="privacy">
             <li>Privacy Policy</li>
             <li>Cookie Policy</li>
             <li>Terms and Conditions</li>
          </ul>
          <img  src={require('./img/trading-point.png')}  alt="Trading Point" width="182" height="60"/>
       </div>
    </div>
 </footer>
  );
}

export default Footer;
