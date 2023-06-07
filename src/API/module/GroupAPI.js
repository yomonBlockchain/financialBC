import { APIManager } from '../../utils';
import APIConstant from '../APIConstant';
const $http = new APIManager();

const GroupAPI = {
  /**
   * 유저 상세정보 조회
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
};

export default GroupAPI;
