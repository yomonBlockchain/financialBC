import { APIManager } from '../../utils';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const GroupAPI = {
  /**
   * 그룹 생성
   * --
   * @param {string} groupInfo
   * @returns
   */
  createGroup: async (groupInfo) => {
    try {
      const url = APIConstant.CREATE_GROUP;
      const result = await $http.post(url, groupInfo);
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
   * 가드로 그룹 정보 조회
   * --
   * @param {string} guard_id
   * @returns
   */
  getGroupByGuard: async (guard_id) => {
    try {
      const url = APIConstant.GET_GROUPBYGUARD.replace(':guard_id', guard_id);
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
   * 가드 상세정보 조회
   * --
   * @param {string} guard_id
   * @returns
   */
  getGuardDetail: async (guard_id) => {
    try {
      const url = APIConstant.GET_GUARDDETAIL.replace(':guard_id', guard_id);
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

  /**
   * 그룹 순찰 상태
   * --
   * @param {string} groupInfo
   * @returns
   */
  changePatrolStatus: async (groupInfo) => {
    try {
      const url = APIConstant.GROUP_PATROL_STATUS;
      const result = await $http.put(url, groupInfo);
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
   * 그룹 카운트
   * --
   * @param {string} groupInfo
   * @returns
   */
  countGroup: async (groupInfo) => {
    try {
      const url = APIConstant.COUNT_GROUP;
      const result = await $http.put(url, groupInfo);
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
   * 가드 카운트
   * --
   * @param {string} guardInfo
   * @returns
   */
  countGroupGuards: async (guardInfo) => {
    try {
      const url = APIConstant.COUNT_GUARD;
      const result = await $http.put(url, guardInfo);
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
