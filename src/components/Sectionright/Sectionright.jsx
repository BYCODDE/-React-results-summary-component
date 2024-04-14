export default Sectionright;
import "./sectionright.css";
import Skill from "./Skills/Skills";
import Button from "./Button/Button";
function Sectionright() {
  return (
    <section className="Sectionright">
      <h3 className="Summary">Summary</h3>
      <Skill></Skill>
      <Button></Button>
    </section>
  );
}
