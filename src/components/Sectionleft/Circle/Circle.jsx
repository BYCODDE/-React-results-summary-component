import "./circle.css";
import circleSvg from "./circle.svg";

function circle() {
  return (
    <div className="circle_div">
      <img src={circleSvg} alt="circle" />
      <div className="score">
        <span className="main_score">76</span>
        <span className="under_score">of 100</span>
      </div>
    </div>
  );
}

export default circle;
