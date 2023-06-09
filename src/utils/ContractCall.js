/* eslint-disable react-hooks/rules-of-hooks */
import { useContractRead } from "wagmi";
import { tokenAbi } from "../Abi/tokenAbi";

const contractInfo = {
  address: "0x63EdC5550575C819DDFFc506687E9fE7827741FB",
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
  getTotalSupply: () => {
    const { data } = useContractRead({
      ...contractInfo,
      functionName: "getTotalMintCount",
    });
    return data;
  },
  loadNFT: () => {
    let nftTotalSuffly = contractCall.getTotalSupply();
    const nftList =
      nftTotalSuffly &&
      [...new Array(Number(nftTotalSuffly))].map((_, idx) => {
        const nftInfo = contractCall.getNftInfo(idx);
        return nftInfo;
      });
    return nftList;
  },
  loadNFTbyAddress: (address) => {
    try {
      let tokenIds = [];
      const { data } = useContractRead({
        ...contractInfo,
        functionName: "getTotalMintCount",
      });
      // 현재 로그인된 계정이 소유한 tokenId 저장
      // eslint-disable-next-line
      [...new Array(Number(data))].map((_, idx) => {
        const addr = contractCall.getOwnerOf(idx);
        if (addr === address) {
          tokenIds.push(idx);
        }
      });
      if (tokenIds.length > 0) {
        const result = tokenIds.map((i) => contractCall.getNftInfo(i));
        return result;
      } else {
        return;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  getOwnerOf: (tokenId) => {
    const { data } = useContractRead({
      ...contractInfo,
      functionName: "ownerOf",
      args: [tokenId],
    });
    return data;
  },
  // safeMint: (mintInfo) => {
  //   const { to, name, description, uri } = mintInfo;
  //   const { config } = usePrepareContractWrite({
  //     ...contractInfo,
  //     functionName: "safeMint",
  //     args: [to, uri, name, description],
  //   });
  //   const { data, write } = useContractWrite(config);
  //   write?.();
  //   return data;
  // },
};

export default contractCall;
