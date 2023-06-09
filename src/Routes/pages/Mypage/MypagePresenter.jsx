import React from "react";
import CREATIVE_BG from "../../../assets/images/creative-bg-01.jpg";
import CREATIVE_AVATAR from "../../../assets/images/creative-01.jpg";
import contractCall from "../../../utils/ContractCall";
import PatrolItem from "../../../Components/Swiper/PatrolItem";
import { getCookie } from "../../../utils";

const MypagePresenter = ({ userInfo, groupInfo, setGroupInfo }) => {
  /* Router */
  /* State */
  const guard_name = getCookie("User_name");
  const { guard_id, guard_ether_address, guard_count_patrol } = userInfo;
  const nftList =
    guard_ether_address && contractCall.loadNFTbyAddress(guard_ether_address);
  /* Hooks */
  /* Functions */
  /* Render */
  const nftListRender =
    nftList &&
    nftList.map((i, idx) => {
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
  const completedPatrolRender =
    groupInfo &&
    groupInfo
      .filter((item) => item.group_count_patrol)
      .map((i) => {
        return (
          <div key={i.group_id} className="mx-2 mb-4">
            <PatrolItem
              Status={i.group_count_patrol}
              groupId={i.group_id}
              data-aos="fade-down"
              isPart={i.is_part}
              GroupName={i.group_name}
              setGroupInfo={setGroupInfo}
              groupMember={i.group_member}
              desc={i.group_desc}
            />
          </div>
        );
      });
  const joiningGroupRender =
    groupInfo &&
    groupInfo
      .filter((item) => !item.group_count_patrol)
      .map((i) => {
        return (
          <div key={i.group_id} className="mx-2 mb-4">
            <PatrolItem
              Status={i.group_count_patrol}
              groupId={i.group_id}
              data-aos="fade-down"
              isPart={i.is_part}
              GroupName={i.group_name}
              guardId={i.guard_id}
              setGroupInfo={setGroupInfo}
              groupMember={i.group_member}
              desc={i.group_desc}
            />
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
            <div className="h2 mb-10">My Information</div>
            <div className="mb-5">
              <div className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline">
                {guard_name ? guard_name : ""}
              </div>
              <div className="text-sm font-medium text-gray-500">
                @{guard_id ? guard_id : ""}
              </div>
              <div className="text-sm font-medium text-gray-500">
                ${guard_ether_address ? guard_ether_address : ""}
              </div>
              <div className="text-sm font-medium text-gray-500">
                순찰 횟수: {guard_count_patrol}회
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <div className="p-3 flex flex-wrap"></div>
        </div>
        <div className="w-full text-center">
          <div className="h3 mb-10">My Joining Group</div>

          {joiningGroupRender ? (
            <div className="w-full flex justify-start align-middle px-32 mx-40">
              {joiningGroupRender}
            </div>
          ) : (
            <div className="btn-sm text-white bg-red-500 shadow-sm m-6">
              You haven't join
            </div>
          )}
        </div>
        <div className="w-full text-center">
          <div className="h3 mb-10">My Completed Patrol</div>

          {completedPatrolRender ? (
            <div className="w-full flex justify-start align-middle px-32 mx-40 flex-wrap">
              {completedPatrolRender}
            </div>
          ) : (
            <div className="btn-sm text-white bg-red-500 shadow-sm m-6">
              You haven't completed
            </div>
          )}
        </div>
        <div className="w-full text-center">
          <div className="h3 mb-10">My NFT</div>
          {nftList ? (
            <div className="w-full flex justify-start align-middle px-32 mx-40">
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
