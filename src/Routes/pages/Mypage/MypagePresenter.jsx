import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import CREATIVE_BG from "../../../assets/images/creative-bg-01.jpg";
import CREATIVE_AVATAR from "../../../assets/images/creative-01.jpg";
import contractCall from "../../../utils/ContractCall";

const MypagePresenter = () => {
  /* Router */
  /* State */
  // const [nftList, setNftList] = useState("");
  const { address } = useAccount();
  const nftList = address && contractCall.loadNFTbyAddress(address);
  /* Hooks */
  /* Functions */
  /* Render */
  const nftListRender =
    nftList &&
    nftList.map((i, idx) => {
      console.log(i);
      const [name, description, uri] = i;
      return (
        <div
          className="my-3 mx-3 border-2 border-sky-950 h-auto overflow-hidden"
          key={idx}
        >
          <img src={uri} alt="test" width={250} className="mb-2" />
          <div className="h4">{name}</div>
          <h3>{description}</h3>
        </div>
      );
    });

  return (
    <section className="mt-24 h100vh">
      <div>
        <div
          className="text-center shadow-sm"
          data-aos-anchor="[data-aos-id-cards]"
          data-aos="fade-down"
        >
          <img
            className="w-full h-50 object-cover opacity-60"
            src={CREATIVE_BG}
            width="258"
            height="64"
            alt="Creative 01 bg"
          />
          <div className="bg-white px-4 pb-6">
            <div className="relative inline-flex -mt-8 mb-3">
              <img
                className="inline-flex rounded-full"
                src={CREATIVE_AVATAR}
                width="128"
                height="128"
                alt="Creative 01"
              />
            </div>
            <div className="mb-5">
              <div className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline">
                {address ? address : ""} (이름으로 변경 필요)
              </div>
              <div className="text-sm font-medium text-gray-500">
                @{address ? address : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="p-3 flex flex-wrap"></div>
        </div>
        <div className="w-full text-center">
          <div className="h3 mb-10">My NFT</div>
          {nftList ? (
            <div className="w-full flex justify-start align-middle">
              {nftListRender}
            </div>
          ) : (
            <div className="btn-sm text-white bg-red-500 shadow-sm m-6">
              You haven't NFT
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MypagePresenter;
