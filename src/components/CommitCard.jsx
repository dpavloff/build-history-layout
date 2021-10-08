import successIcon from "../static/images/success.svg";
import failureIcon from "../static/images/failure.svg";
import pendingIcon from "../static/images/pending.svg";
import commitIcon from "../static/images/commit.svg";
import calendarIcon from "../static/images/calendar.svg";
import clockIcon from "../static/images/clock.svg";
import userIcon from "../static/images/user.svg";

import "../styles/commit-card.css";

function CommitCard({ commitObj, ...props }) {
  let styleObj = {
    icon: {
      success: successIcon,
      failure: failureIcon,
      pending: pendingIcon,
    },
    color: {
      success: {
        color: "#00B341",
      },
      failure: {
        color: "#FF3333",
      },
      pending: {
        color: "#FF9A00",
      },
    },
  };

  return (
    <div className="commit-card">
      <img src={styleObj.icon[commitObj.result]} alt={commitObj.result} />
      <div className="commit-info">
        <p style={styleObj.color[commitObj.result]} className="commit-number">
          {commitObj.commitNumber}
        </p>
      </div>
    </div>
  );
}

export default CommitCard;
