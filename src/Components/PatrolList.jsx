import { useState } from "react";
import "../css/patrolList.css";
import PatrolStatusBox from "./PatrolStatusBox";

const PatrolList = (props) => {
  /* Router */
  /* State */
  const {
    patrolList,
    hide,
    setHide,
    setSearch,
    handleGuardChoice,
    choiceGuard,
  } = props;
  const [address, setAddress] = useState("");
  const [mouse, setMouse] = useState(false);
  /* Hooks */
  /* Functions */
  const handleMouseOver = () => {
    setMouse(true);
  };
  const handleMouseLeave = () => {
    setMouse(false);
  };
  const handleSearch = (e) => {
    setAddress(e.target.value);
    console.log(e.target.value);
  };
  const handleSearchSubmit = () => {
    setSearch(address);
  };
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };
  /* Render */
  return (
    <div
      className="patrol-list-container"
      style={{
        opacity: hide ? 1 : 0,
        width: hide ? "450px" : "0px",
      }}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="mouse-over-event"
        style={{ opacity: mouse ? 1 : 0 }}
        onClick={() => setHide(false)}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: 32, color: "#b9b9b9" }}
        >
          keyboard_double_arrow_left
        </span>
      </div>
      <div
        style={{
          height: "10%",
          display: hide ? "block" : "none",
        }}
      >
        <div className="search-container">
          <input
            type="search"
            id="search"
            placeholder="Search..."
            value={address}
            onChange={handleSearch}
            onKeyPress={handleOnKeyPress}
          />
          <button className="search-btn" onClick={handleSearchSubmit}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 25, marginTop: 4, color: "#e3e3e3" }}
            >
              search
            </span>
          </button>
        </div>
        <h2 style={{ marginLeft: 20 }}>Patrol Status</h2>
      </div>
      <div
        className="patrol-content"
        style={{
          display: hide ? "block" : "none",
        }}
      >
        <div className="patrol-status-container">
          {patrolList.map((item) => {
            return (
              <PatrolStatusBox
                key={item.id}
                patrolList={item}
                hide={hide}
                handleGuardChoice={handleGuardChoice}
                choiceGuard={choiceGuard}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PatrolList;
