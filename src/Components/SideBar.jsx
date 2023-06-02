import "../css/sidebar.css";
// import Logo from "../Assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBar = (props) => {
  /* Router */
  /* State */
  const { menuIcon, setMenuIcon, hide, setHide } = props;
  console.log(hide);
  const [mouseOver, setMouseOver] = useState(false);
  let navigate = useNavigate();
  /* Hooks */
  /* Functions */
  /**
   * 메뉴 선택시 css 변경
   * @param e
   */
  const changeIconColor = (e) => {
    navigate(`/${e.target.id}`);
    setMenuIcon(e.target.id);
  };

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  /**
   * 회원 로그아웃 핸들러
   * --
   */
  // const handleLogOut = () => {
  //   deleteCookie("ISGuard_token", { path: "/", domain: "" });
  //   navigate("/login");
  // };
  /* Render */
  return (
    <div
      className="sidebar-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="mouse-over-event"
        style={{ opacity: mouseOver && !hide ? 1 : 0 }}
        onClick={() => setHide(true)}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontSize: 32, color: "#b9b9b9" }}
        >
          keyboard_double_arrow_right
        </span>
      </div>

      <div className="sidebar-logo">
        {/* <img src={Logo} alt="logo" style={{ width: 45 }} /> */}
        <h3>ISLab</h3>
        <h3>ISGuard</h3>
      </div>
      <div className="menu-container">
        <div>
          <div
            id="dashboard"
            className={
              menuIcon === "dashboard"
                ? "menu-icon menu-icon-click"
                : "menu-icon"
            }
            onClick={changeIconColor}
          >
            <span
              id="dashboard"
              className="material-symbols-outlined"
              style={
                menuIcon === "dashboard"
                  ? { fontSize: 30, color: "#fff" }
                  : { fontSize: 30 }
              }
            >
              dashboard
            </span>
          </div>
          <div
            id="patrol"
            className={
              menuIcon === "patrol" ? "menu-icon menu-icon-click" : "menu-icon"
            }
            onClick={changeIconColor}
          >
            <span
              id="patrol"
              className="material-symbols-outlined"
              style={
                menuIcon === "patrol"
                  ? { fontSize: 30, color: "#fff" }
                  : { fontSize: 30 }
              }
            >
              diversity_1
            </span>
          </div>
          <div
            id="chat"
            className={
              menuIcon === "chat" ? "menu-icon menu-icon-click" : "menu-icon"
            }
            onClick={changeIconColor}
          >
            <span
              id="chat"
              className="material-symbols-outlined"
              style={
                menuIcon === "chat"
                  ? { fontSize: 30, color: "#fff" }
                  : { fontSize: 30 }
              }
            >
              chat
            </span>
          </div>
          <div
            id="calendar"
            className={
              menuIcon === "calendar"
                ? "menu-icon menu-icon-click"
                : "menu-icon"
            }
            onClick={changeIconColor}
          >
            <span
              id="calendar"
              className="material-symbols-outlined"
              style={
                menuIcon === "calendar"
                  ? { fontSize: 30, color: "#fff" }
                  : { fontSize: 30 }
              }
            >
              calendar_month
            </span>
          </div>
        </div>
        <div>
          <div
            id="profile"
            className={
              menuIcon === "profile" ? "menu-icon menu-icon-click" : "menu-icon"
            }
            onClick={changeIconColor}
          >
            <span
              id="profile"
              className="material-symbols-outlined"
              style={
                menuIcon === "profile"
                  ? { fontSize: 30, color: "#fff" }
                  : { fontSize: 30 }
              }
            >
              person_filled
            </span>
          </div>
          <div
            id="setting"
            className={
              menuIcon === "setting" ? "menu-icon menu-icon-click" : "menu-icon"
            }
            onClick={changeIconColor}
          >
            <span
              id="setting"
              className="material-symbols-outlined"
              style={
                menuIcon === "setting"
                  ? { fontSize: 30, color: "#fff" }
                  : { fontSize: 30 }
              }
            >
              settings_applications
            </span>
          </div>
          <div className="menu-icon">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 30 }}
            >
              logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
