import "../styles/builds.css";

import YandexButton from "../components/YandexButton";
import CommitCard from "../components/CommitCard";
import triangle from "../static/images/triangle-right.svg";
import cog from "../static/images/cog.svg";

import commitsArray from "../mock/commits";

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
    </div>
  );
}

export default Builds;
