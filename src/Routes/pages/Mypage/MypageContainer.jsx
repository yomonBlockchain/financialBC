import React from "react";
import MypagePresenter from "./MypagePresenter";
import { getCookie } from "utils";
import { useEffect } from "react";
import { useState } from "react";
import { GroupAPI } from "API";

const MypageContainer = () => {
  /* Router */
  /* State */
  const [groupInfo, setGroupInfo] = useState([]);
  const userInfo = JSON.parse(getCookie("ISGUARD_USER"));
  /* Functions */
  const getGroupInfo = async () => {
    const response = await GroupAPI.getGroupByGuard(userInfo.guard_id);
    setGroupInfo(response);
  };
  /* Hooks */
  useEffect(() => {
    getGroupInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Render */
  return (
    <MypagePresenter
      userInfo={userInfo}
      groupInfo={groupInfo}
      setGroupInfo={getGroupInfo}
    />
  );
};
export default MypageContainer;
