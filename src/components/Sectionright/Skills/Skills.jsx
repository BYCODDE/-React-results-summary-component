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
          92 <span>/ 100</span>
        </div>
      </div>
      <div className="Verbal">
      <div className="verbal_underdiv">
          <img src={greenIcon} alt="greenIcon" />
          <span>Verbal</span>
        </div>
        <div className="verbal_underdiv2">
          61 <span>/ 100</span>
        </div>
      </div>
      <div className="Visual">
      <div className="visual_underdiv">
          <img src={blueIcon} alt="blueIcon" />
          <span>Visual</span>
        </div>
        <div className="visual_underdiv2">
          73 <span>/ 100</span>
        </div>


      </div>





    </div>
  );
}
