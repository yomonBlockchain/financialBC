import React, { createContext, useEffect, useState } from "react";
// import Web3 from "../node_modules/web3/dist/web3.min.js";
import Web3 from "../../node_modules/web3/dist/web3.min.js";

// Web3 Context 생성
export const Web3Context = createContext();

// Web3 Provider 컴포넌트
export function WalletConnet({ children }) {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        setAccounts(accounts);
        if (accounts.length > 0) {
          setIsLogin(true);
        }
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
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        setAccounts(accounts);
        if (accounts.length > 0) {
          setIsLogin(true);
        }
      } else {
        console.log("MetaMask가 설치되지 않았습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Web3Context.Provider value={{ web3, accounts, isLogin, handleConnect }}>
      {children}
    </Web3Context.Provider>
  );
}
