import { APIManager } from "utils";
import APIConstant from "../APIConstant";
// eslint-disable-next-line import/first
import axios from "axios";
const $http = new APIManager();
const API_KEY = process.env.REACT_APP_API_KEY;

const MintAPI = {
  /**
   * NFT 민팅
   * --
   * @param {string} joinInfo
   * @returns
   */
  sendIpfs: async (ifpsInfo) => {
    try {
      const url = APIConstant.REQUEST_MINT;
      const result = await axios.post(url, ifpsInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEI3OWI4M2U0ZDEyNTRGNTNCRWQzOEJlOTdBREI0OTIwN0YwNGVBMDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDM5MjA0MzczOCwibmFtZSI6ImhhY2thdGhvbiJ9.aAuLooEIRIqcCtAr9yw3uhKv8MRiveO9JBaC_rmXFgQ",
        },
      });
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },

  mintNFT: async (mintInfo) => {
    try {
      const url = APIConstant.PATROL_MINT;
      const result = await $http.post(url, mintInfo);
      const { status, message } = result;
      if (status === 200) {
        return status;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },

  mintToken: async (mintInfo) => {
    try {
      const url = APIConstant.MINT_TOKEN;
      const result = await $http.post(url, mintInfo);
      const { status, message, data } = result;
      if (status === 200) {
        return data;
      }
      throw message;
    } catch (e) {
      console.log(e);
      return false;
    }
  },

  getTxByAddress: async (address) => {
    try {
      const response = await axios.get(
        `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&tag=latest&apikey=${API_KEY}`
      );
      const result = response.data.result;
      return result;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};

export default MintAPI;
