import { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";

const useWeb3 = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  const getChainId = async () => {
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    return chainId;
  };

  const getRequestAccounts = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    return accounts;
  };

  const addNetwork = async (chainId) => {
    const netWork = {
      chainId: chainId,
      chainName: "Sepolia",
      rpcUrls: [
        `https://sepolia.infura.io/v3/${process.env.REACT_APP_INFURA_APIKEY}`,
      ],
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH", //통화 단위
        deciamls: 18, // 소수점 자리수
      },
    };
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [netWork],
    });
  };
  useEffect(() => {
    const init = async () => {
      try {
        const targetChainId = "0xaa36a7";
        const chainId = await getChainId(); // "1337"를 hex로 변경하면 "0x1e2a"로 변경이 된다.
        console.log("체인 아이디", chainId);
        if (targetChainId !== chainId) {
          addNetwork(targetChainId);
        }
        const [account] = await getRequestAccounts();
        const web3 = new Web3(window.ethereum);
        setAccount(account);
        setWeb3(web3);
      } catch (e) {
        console.log(e);
      }
    };
    if (window.ethereum) {
      init();
    }
  }, []);
  return [account, web3];
};
// useWeb3라는 커스텀 훅을 만든거다.
// useEffect나 useState처럼 커스텀 훅을 만들어서 사용하는것

export default useWeb3;
