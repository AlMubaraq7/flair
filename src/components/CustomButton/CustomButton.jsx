import "./CustomButton.scss";
const CustomButton = ({ children }) => (
  <div className="container">
    <button className="button">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{children}</span>
    </button>
  </div>
);
export default CustomButton;
