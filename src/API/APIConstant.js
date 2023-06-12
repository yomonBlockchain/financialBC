import { BASE_URL } from "../utils";

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
   * @method POST
   * @param
   */
  CREATE_GROUP: `${BASE_URL}/group`,
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
   * @method GET
   * @param { string } guard_id
   */
  GET_GROUPBYGUARD: `${BASE_URL}/group/guard/:guard_id`,
  /**
   * @method GET
   * @param { string } guard_id
   */
  GET_GUARDDETAIL: `${BASE_URL}/guard/:guard_id`,
  /**
   * @method PUT
   * @param
   */
  JOIN_GROUP: `${BASE_URL}/group/join`,
  /**
   * @method PUT
   * @param
   */
  GROUP_PATROL_STATUS: `${BASE_URL}/group/patrol`,
  /**
   * @method PUT
   * @param
   */
  COUNT_GROUP: `${BASE_URL}/group/count`,
  /**
   * @method PUT
   * @param
   */
  COUNT_GUARD: `${BASE_URL}/guard/groupcount`,
};

const MINT_API = {
  /**
   * @method GET
   */
  REQUEST_MINT: "https://api.nft.storage/upload",

  PATROL_MINT: `${BASE_URL}/web3/mint`,

  MINT_TOKEN: `${BASE_URL}/web3/token`,
};

const APIConstant = {
  ...AUTH_API,
  ...GROUP_API,
  ...MINT_API,
};

export default APIConstant;
