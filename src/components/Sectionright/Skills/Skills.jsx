export default Skill;
import "./skill.css";
import redIcon from "./red.svg";

function Skill() {
  return (
    <div className="skills_div">
      <div className="Reaction">
        <div className="reaction_underdiv">
          <img src={redIcon} alt="redIcon" />
          <span>Reaction</span>
        </div>
        <div className="reaction_underdiv2">
          80 <span>/ 100</span>
        </div>
      </div>
      <div className="Memory"></div>
      <div className="Verbal"></div>
      <div className="Visual"></div>
    </div>
  );
}
