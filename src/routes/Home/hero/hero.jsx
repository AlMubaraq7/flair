import CustomButton from "../../../components/CustomButton/CustomButton";
import "./hero.scss";
import hero from "../../../assets/Home/hero.png";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: "1",
      staggerChildren: 0.35,
      delayChildren: 0.4,
    },
  },
};
const Hero = () => (
  <>
    <section>
      <div className="hero">
        <motion.div
          className="hero-text"
          variants={variants}
          animate="animate"
          initial="initial"
        >
          <motion.h1 variants={variants}>Unleash your inner flair</motion.h1>
          <motion.span variants={variants}>
            We bring a unique blend of style and substance to your fitness
            journey.
          </motion.span>
          <motion.div className="hero-cta" variants={variants}>
            <CustomButton>Get Started</CustomButton>
          </motion.div>
        </motion.div>
        <motion.div>
          <img src={hero} alt="man posing" className="hero-image" />
        </motion.div>
      </div>
    </section>
  </>
);
export default Hero;
