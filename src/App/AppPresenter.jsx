import React from "react";
import IndexRouter from "../Routes";
import { WalletConnet } from "../utils/WalletContext";
const AppPresenter = () => {
  return (
    <WalletConnet>
      <IndexRouter />
    </WalletConnet>
  );
};

export default AppPresenter;
