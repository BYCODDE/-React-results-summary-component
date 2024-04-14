export default Skill;
import "./skill.css";
import redIcon from "./red.svg";
import yellowIcon from "./yellow.svg";
import greenIcon from "./green.svg";
import blueIcon from "./blue.svg";
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
      <div className="Memory">
        <div className="memory_underdiv">
          <img src={yellowIcon} alt="yellowIcon" />
          <span>Memory</span>
        </div>
        <div className="memory_underdiv2">
          80 <span>/ 100</span>
        </div>
      </div>
      <div className="Verbal"></div>
      <div className="Visual"></div>
    </div>
  );
}
