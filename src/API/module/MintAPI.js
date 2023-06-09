import APIConstant from "../APIConstant";
// eslint-disable-next-line import/first
import axios from "axios";

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
};

export default MintAPI;
