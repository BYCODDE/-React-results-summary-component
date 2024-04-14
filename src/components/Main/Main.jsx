export default Main;
import "./main.css";
import "./fix.css";
import Sectionleft from "../Sectionleft/Sectionleft";
import Sectionright from "../Sectionright/Sectionright";
function Main() {
  return (
    <>
      <main>
        <Sectionleft> </Sectionleft>
        <Sectionright></Sectionright>
      </main>
    </>
  );
}
