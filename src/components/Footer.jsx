import Dribble from "../assets/dribble.png";
import Facebook from "../assets/fb.png";
import Google from "../assets/google+.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img src={Dribble} alt="" />
            </a>
            <a>
              <img src={Facebook} alt="" />
            </a>
            <a>
              <img src={Google} alt="" />
            </a>
            <a>
              <img src={Twitter} alt="" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
