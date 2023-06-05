import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/SideBar";
import "../../css/main.css";

const MainLayout = () => {
  /* Router */
  /* State */
  const [hide, setHide] = useState(true);
  const [menuIcon, setMenuIcon] = useState("");
  const pathString = window.location.pathname;
  const path = pathString.split("/");
  /* Hooks */
  useEffect(() => {
    if (path[1] === "") {
      setMenuIcon("home");
    } else {
      setMenuIcon(path[1]);
    }
    // const session = getCookie("ISGuard_token");
    // if (!session) navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Functions */
  /* Render */
  return (
    <div className="main-container">
      <SideBar
        menuIcon={menuIcon}
        setMenuIcon={setMenuIcon}
        hide={hide}
        setHide={setHide}
      />
      <Outlet context={{ hide, setHide }} />
    </div>
  );
};

export default MainLayout;
