import CustomButton from "../../../components/CustomButton/CustomButton";
import "./whoweare.scss";
import { motion } from "framer-motion";
const WhoWeAre = () => {
  const variants = {
    initial: {
      y: 75,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="group-wwa">
      <div className="title">
        <h1>Who we are</h1>
      </div>
      <div className="wwa">
        <motion.div
          className="wwa-about"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="wwa-about-content" variants={variants}>
            <motion.h2>Flair Gym</motion.h2>
            <motion.p>
              Welcome to Flair Gym, where fitness is not just a routine, it’s a
              celebration of passion, dedication, and community. Flair Gym is
              not just a place to work out. It's a vibrant space where
              aspirations take flight, and goals become achievements.
            </motion.p>
          </motion.div>
          <motion.div className="wwa-about-content" variants={variants}>
            <motion.h2>Our Vision</motion.h2>
            <motion.p>
              At Flair Gym, our vision goes beyond sets and reps, it’s about
              empowering you to become the best version of yourself.<br></br>
              We are not just a gym, we are a family, a community united by the
              shared pursuit of wellness and self-discovery.
            </motion.p>
          </motion.div>
          <motion.div className="wwa-about-content" variants={variants}>
            <motion.h2>Our Commitment</motion.h2>
            <motion.p>
              Flair Gym is not just a place to break a sweat, it’s a commitment
              to your well-being. We are dedicated to providing an inclusive
              environment where everyone is welcome regardless of age,
              background, or fitness level.
            </motion.p>
          </motion.div>
          <motion.div className="wwa-about-content" variants={variants}>
            <motion.h2>Join Us Today</motion.h2>
            <motion.p>
              Embark on a fitness journey like never before. Whether you're a
              beginner taking your first steps or a seasoned athlete aiming for
              new achievements, Flair Gym is the place where your fitness story
              begins.
            </motion.p>
            <CustomButton>Take a Tour</CustomButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
