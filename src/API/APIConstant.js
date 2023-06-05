import { BASE_URL } from '../utils';

const AUTH_API = {
  /**
   * @method GET
   * @param {string}signup_id
   */
  GET_SIGNUP: `${BASE_URL}/auth/guard/signin`,
  /**
   * @method POST
   * @param
   */
  REQUEST_SIGNUP: `${BASE_URL}/auth/guard/signup`,
  /**
   * @method POST
   * @param
   */
  REQUEST_SIGNIN: `${BASE_URL}/auth/guard/signIn`,
};

const USER_API = {
  /**
   * @method GET
   * @param { string } user_id
   */
  GET_USERINFO: `${BASE_URL}/user/:user_id`,
};

const APIConstant = {
  ...AUTH_API,
  ...USER_API,
};

export default APIConstant;
