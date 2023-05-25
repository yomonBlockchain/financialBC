import React, { createContext, useEffect, useState } from "react";
// import Web3 from "../node_modules/web3/dist/web3.min.js";
import Web3 from "../../node_modules/web3/dist/web3.min.js";
import abi from "../Abi/MyToken.json";
// Web3 Context 생성
export const Web3Context = createContext();
const contractAddress = "0x80dBe94a426600721fb0190DFbC4b43A72BD7d81";

// Web3 Provider 컴포넌트
export function WalletConnet({ children }) {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [contract, setContract] = useState();

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.requestAccounts();
        setAccounts(accounts);
        if (accounts.length > 0) {
          setIsLogin(true);
        }
        const contractInstance = new web3Instance.eth.Contract(
          abi,
          contractAddress
        );
        setContract(contractInstance);
        // MetaMask 계정 변경 시 이벤트 처리
        window.ethereum.on("accountsChanged", (newAccounts) => {
          setAccounts(newAccounts);
        });
      }
    };
    init();
  }, []);

  /**
   * 메타마스크 연결
   * --
   * @returns
   */
  const handleConnect = async () => {
    try {
      if (window.ethereum) {
        // MetaMask가 설치된 경우
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await web3.eth.requestAccounts();
        setAccounts(accounts);
        if (accounts.length > 0) {
          setIsLogin(true);
        }
        await window.ethereum.enable();
        return true;
      } else {
        console.log("MetaMask가 설치되지 않았습니다.");
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const loadNFT = async () => {
    if (contract !== undefined) {
      // await window.ethereum.enable();
      let nftTotalSuffly = await contract.methods.getTotalMintCount().call();
      const listPromise = [...new Array(Number(nftTotalSuffly))].map(
        async (_, idx) => {
          const nftInfo = await contract.methods.getTokenInfo(idx).call();
          return nftInfo;
        }
      );
      const result = await Promise.all(listPromise);
      return result;
    }
  };

  return (
    <Web3Context.Provider
      value={{ contract, web3, accounts, isLogin, handleConnect, loadNFT }}
    >
      {children}
    </Web3Context.Provider>
  );
}
