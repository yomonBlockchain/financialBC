import React from "react";
import MypagePresenter from "./MypagePresenter";
import { getCookie } from "utils";
import { useEffect } from "react";
import { useState } from "react";
import { GroupAPI } from "API";
import { erc20TokenAbi } from "Abi/erc20TokenAbi";
import { useContractRead } from "wagmi";

const contractInfo = {
  address: "0x82e3BE8c5Bc45c10A97199C24Fca4cbC5c6e53BD",
  abi: erc20TokenAbi,
  chainId: 11155111,
};

const MypageContainer = () => {
  /* Router */
  /* State */
  const [groupInfo, setGroupInfo] = useState([]);
  const [guardInfo, setGuardInfo] = useState();
  const [erc20, setErc20] = useState(0);
  const userInfo = JSON.parse(getCookie("ISGUARD_USER"));
  const getGuardInfo = async () => {
    const result = await GroupAPI.getGuardDetail(userInfo.guard_id);
    setGuardInfo(result);
  };
  /* Functions */
  const getGroupInfo = async () => {
    const response = await GroupAPI.getGroupByGuard(userInfo.guard_id);
    setGroupInfo(response);
  };
  /* Hooks */
  const { data } = useContractRead({
    ...contractInfo,
    functionName: "balanceOf",
    args: [userInfo.guard_ether_address],
  });

  useEffect(() => {
    getGroupInfo();
    getGuardInfo();
    setErc20(Number(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Render */
  return (
    <MypagePresenter
      guardInfo={guardInfo}
      userInfo={userInfo}
      groupInfo={groupInfo}
      setGroupInfo={getGroupInfo}
      getGuardInfo={getGuardInfo}
      erc20={erc20}
    />
  );
};
export default MypageContainer;
