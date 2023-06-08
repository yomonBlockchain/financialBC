import React, { useState } from "react";
import { tokenAbi } from "../../../Abi/tokenAbi";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
const contractInfo = {
  address: "0x80dBe94a426600721fb0190DFbC4b43A72BD7d81",
  abi: tokenAbi,
  chainId: 11155111,
};

const AdminMintPresenter = () => {
  /* Router */
  /* State */
  const initialState = {
    to: "",
    uri: "",
    name: "",
    description: "",
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [mintInfo, setMintInfo] = useState(initialState);
  /* Hooks */
  const { config } = usePrepareContractWrite({
    ...contractInfo,
    functionName: "safeMint",
    args: [mintInfo.to, mintInfo.uri, mintInfo.name, mintInfo.description],
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  /* Functions */
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  const handleMintInfo = (e) => {
    setMintInfo({ ...mintInfo, [e.target.name]: e.target.value });
  };
  const handleOnMint = (e) => {
    e.preventDefault();
    write?.();
  };

  /* Render */
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">
        <h2>Token Mint</h2>
      </div>
      <div className="font-inter antialiased text-gray-800 tracking-tight`}">
        <div className="flex flex-col min-h-screen overflow-hidden">
          <div className="max-w-sm mx-auto">
            <div className="flex flex-wrap mb-4">
              <div className="w-full mb-2">
                <label className="block text-gray-500 text-sm font-medium mb-1">
                  to(address)
                </label>
                <input
                  id="to"
                  name="to"
                  type="text"
                  className="form-input w-full text-gray-800"
                  value={mintInfo.to}
                  onChange={handleMintInfo}
                />
              </div>
              <div className="w-full mb-2">
                <label className="block text-gray-500 text-sm font-medium mb-1">
                  Token Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input w-full text-gray-800"
                  value={mintInfo.name}
                  onChange={handleMintInfo}
                />
              </div>
              <div className="w-full mb-2">
                <label className="block text-gray-500 text-sm font-medium mb-1">
                  Token Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  className="form-input w-full text-gray-800"
                  value={mintInfo.description}
                  onChange={handleMintInfo}
                />
              </div>
              <div className="w-full mb-2">
                <label className="block text-gray-500 text-sm font-medium mb-1">
                  uri
                </label>
                <input
                  id="uri"
                  name="uri"
                  type="text"
                  className="form-input w-full text-gray-800"
                  value={mintInfo.uri}
                  onChange={handleMintInfo}
                />
              </div>
              <div className="w-full mb-2">
                <label className="block text-gray-500 text-sm font-medium mb-1">
                  Image Upload
                </label>
                <input
                  id="user_id"
                  name="user_id"
                  type="file"
                  onChange={handleImageUpload}
                />
              </div>
              {selectedImage && (
                <div>
                  <img
                    className="w-full object-cover"
                    src={selectedImage}
                    width={300}
                    alt="upload_image"
                  />
                </div>
              )}
              <div className="w-full">
                <button
                  id="submit"
                  type="submit"
                  className="btn-sm text-white bg-[#1D9BF0] hover:bg-[#1A90DF] w-full relative flex items-center"
                  onClick={handleOnMint}
                >
                  {isLoading ? "Minting...." : "Mint"}
                </button>
              </div>
              <div>{isSuccess && data?.hash}</div>
              {isError && <div>Error: {error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMintPresenter;
