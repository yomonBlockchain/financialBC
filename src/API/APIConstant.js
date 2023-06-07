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
  /**
   * @method POST
   * @param
   */
  REQUEST_SIGNINMM: `${BASE_URL}/auth/guard/signInmm`,
};

const GROUP_API = {
  /**
   * @method GET
   */
  GET_GROUPINFO: `${BASE_URL}/group`,
  /**
   * @method GET
   * @param { string } group_id
   */
  GET_GROUPDETAIL: `${BASE_URL}/group/:group_id`,
  /**
   * @method PUT
   * @param
   */
  JOIN_GROUP: `${BASE_URL}/group/join`,
};

const APIConstant = {
  ...AUTH_API,
  ...GROUP_API,
};

export default APIConstant;
