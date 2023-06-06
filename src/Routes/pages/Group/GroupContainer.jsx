import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthAPI } from '../../../API';
import { setCookie } from '../../../utils';
import GroupPresenter from './GroupPresenter';

const GroupContainer = () => {
  const navigate = useNavigate();
  const initialState = {
    user_id: '',
    user_pw: '',
    user_nm: '',
    user_addr: '',
  };
  const [userInfo, setUserInfo] = useState(initialState);

  /**
   * 유저 정보 입력
   * --
   * @param {*} e
   */
  const handleUserInfo = (e, c = null) => {
    if (c) {
      setUserInfo(c);
      return;
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  /**
   * 회원가입 요청
   * --
   * @returns
   */
  const handleGroup = async (userInfo) => {
    const GroupData = {
      guard_login_id: userInfo.user_id,
      guard_login_pw: userInfo.user_pw,
      guard_nm: userInfo.user_nm,
      guard_ether_address: userInfo.user_addr,
    };
    const GroupResult = await AuthAPI.requestGroup(GroupData);
    if (GroupResult) {
      console.log(GroupResult);
      const loginData = {
        guard_login_id: userInfo.user_id,
        guard_login_pw: userInfo.user_pw,
      };
      console.log(loginData);
      const loginResult = await AuthAPI.requestSignin(loginData);
      if (loginResult) {
        console.log(loginResult);
        navigate('/');
        return true;
      }
    }
    return false;
  };

  /* Hooks */
  useEffect(() => {}, [userInfo]);

  return (
    <GroupPresenter
      handleGroup={handleGroup}
      handleUserInfo={handleUserInfo}
      setUserInfo={setUserInfo}
      userInfo={userInfo}
    />
  );
};

export default GroupContainer;
