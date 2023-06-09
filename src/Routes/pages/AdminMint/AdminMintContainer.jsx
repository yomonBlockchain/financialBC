import React from "react";
import AdminMintPresenter from "./AdminMintPresenter";
import { MintAPI } from "API";

const AdminMintContainer = () => {
  /* Router */
  /* State */
  /* Hooks */
  /* Functions */
  const handleCreateIpfs = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    const result = await MintAPI.sendIpfs(formData);
    return result;
  };
  /* Render */
  return <AdminMintPresenter handleCreateIpfs={handleCreateIpfs} />;
};

export default AdminMintContainer;
