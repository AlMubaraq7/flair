import "./navbar.scss";
import logo from "../../assets/Home/logo.svg";
import { motion, useScroll, useSpring } from "framer-motion";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div className="nav">
      <img src={logo} className="nav-logo" />
      <div className="nav-links">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Gallery
        </a>
        <a href="#" className="nav-link">
          Classes
        </a>
        <a href="#" className="nav-link">
          Pricing
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
      </div>
      <div className="nav-cta">sign up</div>
      <motion.div
        className="progress-bar"
        style={{
          scaleX: scaleX,
        }}
      ></motion.div>
    </motion.div>
  );
}
export default Navbar;
