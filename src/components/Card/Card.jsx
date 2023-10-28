import "./Card.scss";

const Card = ({ className, imageUrl, paragraph }) => (
  <div className="card">
    <img src={imageUrl} alt="" className="card__background" />
    <div className="card__content">
      <div className="card__content--container">
        <h2 className="card__title">{className}</h2>
        <p className="card__description">{paragraph}</p>
      </div>
      <button className="card__button">Schedule</button>
    </div>
  </div>
);

export default Card;
