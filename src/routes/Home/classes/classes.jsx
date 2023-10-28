import { Component } from "react";
import Card from "../../../components/Card/Card";
import classesArray from "../../../components/classes";
import "./classes.scss";

class Classes extends Component {
  constructor() {
    super();
    this.state = {
      classesList: classesArray,
    };
  }
  render() {
    const { classesList } = this.state;
    return (
      <section className="c-group">
        <div
          className="title"
          style={{
            marginLeft: "auto",
            marginRight: "0",
          }}
        >
          <h1>Our Classes</h1>
        </div>
        <div className="classes">
          <div className="classes__container">
            {classesList.map(({ id, ...otherProps }) => (
              <Card key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Classes;
