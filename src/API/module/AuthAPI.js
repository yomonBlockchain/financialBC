import { APIManager } from '../../utils';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const AuthAPI = {
  /**
   * 회원가입 요청
   * --
   * @param {*} userInfo
   * @returns
   */
  requestSignup: async (userInfo) => {
    try {
      const url = APIConstant.REQUEST_SIGNUP;
      const result = await $http.post(url, userInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      throw e;
    }
  },
  /**
   * ID와 PW로 로그인 요청
   * --
   * @param {*} userInfo
   * @returns
   */
  requestSignin: async (userInfo) => {
    try {
      const url = APIConstant.REQUEST_SIGNIN;
      const result = await $http.post(url, userInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      return false;
    }
  },

  /**
   * 메타마스크 주소로 로그인 요청
   * --
   * @param {*} userInfo
   * @returns
   */
  requestSigninMM: async (userInfo) => {
    try {
      const url = APIConstant.REQUEST_SIGNINMM;
      const result = await $http.post(url, userInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      return false;
    }
  },
};

export default AuthAPI;
