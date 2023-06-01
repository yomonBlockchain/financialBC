/* eslint-disable react-hooks/rules-of-hooks */
import { useContractRead } from "wagmi";
import { tokenAbi } from "../Abi/tokenAbi";

const contractInfo = {
  address: "0x80dBe94a426600721fb0190DFbC4b43A72BD7d81",
  abi: tokenAbi,
  chainId: 11155111,
};

const contractCall = {
  getNftInfo: (tokenId) => {
    const { data } = useContractRead({
      ...contractInfo,
      functionName: "getTokenInfo",
      args: [tokenId],
    });

    return data;
  },
  getTotalMintCount: () => {
    const { data } = useContractRead({
      ...contractInfo,
      functionName: "getTotalMintCount",
    });
    return data;
  },
  loadNFT: () => {
    let nftTotalSuffly = contractCall.getTotalMintCount();
    const nftList = [...new Array(Number(nftTotalSuffly))].map((_, idx) => {
      const nftInfo = contractCall.getNftInfo(idx);
      return nftInfo;
    });
    return nftList;
  },
};

export default contractCall;
