import "../css/patrolStatus.css";
const PatrolStatusBox = (props) => {
  const { patrolList, hide, handleGuardChoice, choiceGuard } = props;
  const {
    id,
    group_name,
    keeper_name,
    // phone,
    // start_lat,
    // start_lon,
    start_point,
    // end_lat,
    // end_lon,
    end_point,
    belong,
    token,
    member_num,
  } = patrolList;
  return (
    <div
      className="patrol-status-box"
      style={{
        opacity: hide ? 1 : 0,
        border: choiceGuard === id.toString() ? "2px solid #5932EA" : "",
      }}
      id={id}
      onClick={handleGuardChoice}
    >
      <div className="patrol-status-top">
        <div className="top-left">
          <div className="course">순찰코스</div>
          <h3>{group_name}</h3>
          <div className="member">멤버 {member_num}명</div>
        </div>
        <div className="top-right">
          <h3>예상 Reword</h3>
          <div className="token">{token} PTK</div>
        </div>
      </div>
      <div className="patrol-status-mid">
        <div className="mid-left">
          <div className="start-icon">
            <span
              className="material-symbols-outlined"
              style={{ color: "#0EBC93" }}
            >
              flag
            </span>
          </div>
          <div className="v-line-container">
            <div className="v-left"></div>
            <div className="v-line"></div>
          </div>
          <div className="arrival-icon">
            <span
              className="material-symbols-outlined"
              style={{ color: "#5932EA" }}
            >
              location_on
            </span>
          </div>
        </div>
        <div className="mid-right">
          <div className="start-status">
            <h4>{start_point}</h4>
            <div className="start-region">부산광역시 금정구 금정동</div>
          </div>
          <div className="arrival-status">
            <h4>{end_point}</h4>
            <div className="arrival-region">부산광역시 금정구 금정동</div>
          </div>
        </div>
      </div>
      <div className="patrol-stauts-bottom">
        <div className="keeper">
          <div className="keeper-icon-container">
            <div className="keeper-icon">
              <span
                className="material-symbols-outlined"
                style={{ color: "#fff" }}
              >
                person
              </span>
            </div>
          </div>
          <div className="keeper-status">
            <div className="role">Keeper</div>
            <h3>{keeper_name}</h3>
            <div className="police">{belong}</div>
          </div>
        </div>
        <div className="call-icon">
          <div className="call">
            <span
              className="material-symbols-outlined"
              style={{ color: "#5932EA" }}
            >
              phone_in_talk
            </span>
          </div>
          <div className="sms">
            <span
              className="material-symbols-outlined"
              style={{ color: "#5932EA" }}
            >
              sms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatrolStatusBox;
