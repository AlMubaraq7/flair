import "./TrainerCard.scss";
import splash from "../../assets/Home/trainer-card.png";
import stroke from "../../assets/trainers/stroke.png";
const TrainerCard = ({ name, imageUrl, specialty }) => (
  <div className="tc-group">
    <div className="tc-group__image">
      <img src={splash} className="image-bg" />
      <img src={imageUrl} className="image-main" />
    </div>
    <div className="tc-group__info">
      <img src={stroke} className="tc-group__info__stroke" />
      <img
        src={stroke}
        className="tc-group__info__stroke tc-group__info__stroke--specialty "
      />
      <h2>{name}</h2>
      <h3>{specialty}</h3>
    </div>
  </div>
);
export default TrainerCard;
