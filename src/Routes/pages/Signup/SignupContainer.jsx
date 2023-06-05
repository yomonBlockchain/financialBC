import { AuthAPI } from '../../../API';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setCookie } from '../../../utils';
import SignupPresenter from './SignupPresenter';

const SignupContainer = () => {
  const navigate = useNavigate();
  const { signup_id } = useParams();
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
   * 회원가입 정보 요청
   * --
   * @returns
   */
  const handleSignupInfo = useCallback(async () => {
    const postData = {
      admin_login_id: userInfo.user_id,
      admin_login_pw: userInfo.user_pw,
    };
    const result = await AuthAPI.requestSignup(postData);
    if (result) {
      const { signup_nm } = result;
      setUserInfo({
        ...userInfo,
        user_nm: signup_nm,
        signup_id,
      });
    }
  }, [signup_id, userInfo]);

  /**
   * 회원가입 요청
   * --
   * @returns
   */
  const handleSignup = async () => {
    if (signup_id) {
      if (
        !userInfo.team_id ||
        userInfo.team_id === '0' ||
        !userInfo.user_password
      ) {
        return false;
      }
      const postData = {
        user_email: userInfo.user_email,
        user_nm: userInfo.user_nm,
        team_id: userInfo.team_id,
        user_password: userInfo.user_password,
      };
      const result = await AuthAPI.requestSignup(postData);

      if (result) {
        const { access_token, ...user } = result;
        setCookie('ISGUARD', access_token);
        setCookie('ISGUARD_USER', JSON.stringify(user));
        navigate('/');
        return true;
      }
      return false;
    }
  };

  /* Hooks */
  useEffect(() => {
    if (signup_id) {
      handleSignupInfo();
    }
  }, [signup_id, handleSignupInfo]);

  return (
    <SignupPresenter
      handleSignup={handleSignup}
      handleUserInfo={handleUserInfo}
    />
  );
};

export default SignupContainer;
