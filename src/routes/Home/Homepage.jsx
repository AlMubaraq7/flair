import "./Homepage.scss";
import Hero from "./hero/hero";
import WhoWeAre from "./whoweare/whoweare";
import Classes from "./classes/classes";
import Trainers from "./trainers/trainers";
function Homepage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Classes />
      <Trainers />
    </>
  );
}
export default Homepage;
