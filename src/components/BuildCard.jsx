import successIcon from "../static/images/success.svg";
import failureIcon from "../static/images/failure.svg";
import pendingIcon from "../static/images/pending.svg";
import commitIcon from "../static/images/commit.svg";
import calendarIcon from "../static/images/calendar.svg";
import clockIcon from "../static/images/clock.svg";
import userIcon from "../static/images/user.svg";

import "../styles/build-card.css";

function BuildCard({ buildObj, ...props }) {
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
    <div className="build-card">
      <img src={styleObj.icon[buildObj.result]} alt={buildObj.result} />
       <div className="card-info">
        <div className="commit-info">
          <div className="build-info">
              <h3 style={styleObj.color[buildObj.result]} className="commit-number">
              #{buildObj.commitNumber}
              </h3>
              <p className="commit-message">{buildObj.commitMessage}</p>
          </div>
          <div className="branch-info">
              <img className="is-transparent" src={commitIcon} alt="" />
              <p>{buildObj.branchName}</p>
              <p className="is-transparent">{buildObj.commitHash}</p>
              <p><img className="is-transparent" src={userIcon} alt="" />{buildObj.authorName}</p>
          </div>
        </div>
        <div className="time-info is-transparent">
            <div className="date">
                <img src={calendarIcon} alt="" />
                <p> {buildObj.buildDay} {months[buildObj.buildMonth]}, {buildObj.buildTimestamp}</p>
            </div>
            <div className="build-time">
                <img src={clockIcon} alt="" />
                <p>{buildObj.buildTimeH} ч {buildObj.buildTimeM} мин</p>
            </div>
        </div>
      </div>

    </div>
  );
}

export default BuildCard;
