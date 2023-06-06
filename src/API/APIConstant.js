import { BASE_URL } from '../utils';

const AUTH_API = {
  /**
   * @method GET
   * @param {string}signup_id
   */
  GET_SIGNUP: `${BASE_URL}/auth/guard/signin`,

  /**
   * @method GET
   * @param {string}signup_id
   */
  GET_ADMIN_SIGNUP: `${BASE_URL}/auth/guard/signin`,
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

const GROUP_API = {
  /**
   * @method GET
   */
  GET_GROUPINFO: `${BASE_URL}/group`,
};

const APIConstant = {
  ...AUTH_API,
  ...GROUP_API,
};

export default APIConstant;
