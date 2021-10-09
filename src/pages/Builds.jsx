import "../styles/builds.css";

import YandexButton from "../components/YandexButton";
import CommitCard from "../components/CommitCard";
import triangle from "../static/images/triangle-right.svg";
import cog from "../static/images/cog.svg";

import commitsArray from "../mock/commits"; // должно прийти пропсом из редакса

// Два состояния = зафетчили и не зафетчили
// Component-connect - 
// map dispatch to props

function Builds() {
  return (
    <div>
      <div className="builds-header">
        <h2>philip1967/my-awesome-repo</h2> {/* // change to username later */}
        <div className="builds-buttons">
          <YandexButton label={"Run build"} icon={triangle} isGray={true} />
          <YandexButton label={""} icon={cog} isGray={true} />
        </div>
      </div>
      <div className="commits">
        {commitsArray.map((commit) => (
          <CommitCard commitObj={commit} />
        ))}
      </div>
      <YandexButton defaultClass="show-more" isGray={true} label={"Show more"} />
    </div>
  );
}

export default Builds;
