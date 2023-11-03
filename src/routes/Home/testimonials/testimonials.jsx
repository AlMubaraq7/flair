import "./testimonials.scss";
import jane from "../../../assets/Home/jane.jpg";
import richard from "../../../assets/Home/richard.jpg";
import john from "../../../assets/Home/john.jpg";
const Testimonials = () => {
  return (
    <section className="testimonials">
      <div
        className="title"
        style={{
          marginRight: "0",
          marginLeft: "auto",
        }}
      >
        <h1>Testimonials</h1>
      </div>
      <h1>What our clients say</h1>

      <div className="testimonials__group">
        <div className="testimonials__container">
          <div className="testimonials__box">
            <div className="image-container">
              <img src={jane} className="image" />
            </div>
            <div className="quotes">&#10076;&#10076;</div>
            <div className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus excepturi quaerat placeat, veniam aliqui.
            </div>
            <h3>Jane Roe</h3>
          </div>
          <div className="testimonials__box">
            <div className="image-container">
              <img src={john} className="image" />
            </div>
            <div className="quotes">&#10076;&#10076;</div>
            <div className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus excepturi quaerat placeat, veniam aliqui.
            </div>
            <h3>John Doe</h3>
          </div>
          <div className="testimonials__box">
            {" "}
            <div className="image-container">
              <img src={richard} className="image" />
            </div>
            <div className="quotes">&#10076;&#10076;</div>
            <div className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus excepturi quaerat placeat, veniam aliqui.
            </div>
            <h3>Richard Reo</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
