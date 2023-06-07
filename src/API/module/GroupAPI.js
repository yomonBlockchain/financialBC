import { APIManager } from '../../utils';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const GroupAPI = {
  /**
   * 그룹 정보 조회
   * --
   * @returns
   */
  getGroupInfo: async () => {
    try {
      const url = APIConstant.GET_GROUPINFO;
      const result = await $http.get(url);
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
   * 그룹 상세정보 조회
   * --
   * @param {string} group_id
   * @returns
   */
  getGroupDetail: async (group_id) => {
    try {
      const url = APIConstant.GET_GROUPDETAIL.replace(':group_id', group_id);
      const result = await $http.get(url);
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
   * 그룹 참가
   * --
   * @param {string} joinInfo
   * @returns
   */
  joinGroup: async (joinInfo) => {
    try {
      const url = APIConstant.JOIN_GROUP;
      const result = await $http.put(url, joinInfo);
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

export default GroupAPI;
