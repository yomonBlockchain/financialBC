import Web3 from "web3";
import tokenAbi from "../Abi/MyToken.json";
const rpcEndpoint = `https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_APIKEY}`;
const web3 = new Web3(rpcEndpoint);
const tokenContractAddress = "0x73E748EE9d02ad00FE766dBe0117E466FfBc8feF";
const tokenContract = new web3.eth.Contract(tokenAbi, tokenContractAddress);

console.log(tokenContract);

const contractCall = {
  getNftInfo: async (tokenId) => {
    const tokenInfo = await tokenContract.methods.getTokenInfo(tokenId).call();
    return tokenInfo;
  },
};

export default contractCall;
