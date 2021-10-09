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

  let months = {
      1: "янв",
      2: "фев",
      3: "мар",
      4: "апр",
      5: "мая",
      6: "июн",
      7: "июл",
      8: "авг",
      9: "сен",
      10: "окт",
      11: "ноя",
      12: "дек",
  }

  return (
    <div className="commit-card">
      <img src={styleObj.icon[commitObj.result]} alt={commitObj.result} />
       <div className="card-info">
        <div className="commit-info">
          <div className="build-info">
              <h3 style={styleObj.color[commitObj.result]} className="commit-number">
              #{commitObj.commitNumber}
              </h3>
              <p className="commit-message">{commitObj.commitMessage}</p>
          </div>
          <div className="branch-info">
              <img className="is-transparent" src={commitIcon} alt="" />
              <p>{commitObj.branchName}</p>
              <p className="is-transparent">{commitObj.commitHash}</p>
              <p><img className="is-transparent" src={userIcon} alt="" />{commitObj.authorName}</p>
          </div>
        </div>
        <div className="time-info is-transparent">
            <div className="date">
                <img src={calendarIcon} alt="" />
                <p> {commitObj.buildDay} {months[commitObj.buildMonth]}, {commitObj.buildTimestamp}</p>
            </div>
            <div className="build-time">
                <img src={clockIcon} alt="" />
                <p>{commitObj.buildTimeH} ч {commitObj.buildTimeM} мин</p>
            </div>
        </div>
      </div>

    </div>
  );
}

export default CommitCard;
