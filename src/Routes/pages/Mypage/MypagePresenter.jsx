import React, { useEffect, useState } from 'react';
import { GroupAPI } from '../../../API';
import CREATIVE_BG from '../../../assets/images/creative-bg-01.jpg';
import CREATIVE_AVATAR from '../../../assets/images/creative-01.jpg';
import contractCall from '../../../utils/ContractCall';
import GroupItem from '../../../Components/Swiper/GroupItem';
import PatrolItem from '../../../Components/Swiper/PatrolItem';
import Creative01 from '../../../assets/images/creative-01.jpg';
import Creative02 from '../../../assets/images/creative-02.jpg';
import Creative03 from '../../../assets/images/creative-03.jpg';
import Creative04 from '../../../assets/images/creative-04.jpg';
import CreativeBg01 from '../../../assets/images/creative-bg-01.jpg';
import CreativeBg02 from '../../../assets/images/creative-bg-02.jpg';
import CreativeBg03 from '../../../assets/images/creative-bg-03.jpg';
import CreativeBg04 from '../../../assets/images/creative-bg-04.jpg';
import { getCookie } from '../../../utils';

const MypagePresenter = () => {
  /* Router */
  /* State */

  const [groupData, setGroupData] = useState([]);
  const [guardData, setGuardData] = useState([]);
  const guard_nm = getCookie('User_name');
  const { guard_id, guard_ether_address } = JSON.parse(
    getCookie('ISGUARD_USER')
  );

  /* Hooks */
  useEffect(() => {
    const fetchData = async () => {
      const guardResponse = await GroupAPI.getGuardDetail(guard_id);
      const groupResponse = await GroupAPI.getGroupByGuard(guard_id);
      setGuardData(guardResponse);
      setGroupData(groupResponse);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nftList =
    guard_ether_address && contractCall.loadNFTbyAddress(guard_ether_address);

  const { guard_count_patrol } = guardData;
  const groupList = [];
  const patrolList = [];
  const dbData = groupData.map((item, index) => ({
    id: index + 1,
    BackSrc: [CreativeBg01, CreativeBg02, CreativeBg03, CreativeBg04][
      index % 4
    ],
    AuthSrc: [Creative01, Creative02, Creative03, Creative04][index % 4],
    Updown: item.is_part,
    GroupName: item.group_name,
    GroupMember: item.group_member,
    GroupId: item.group_id,
    GroupCount: item.group_count_patrol,
  }));
  for (let i = 0; i < dbData.length; i++) {
    let chunkedData = dbData.slice(i, i + 1);
    let { GroupCount } = chunkedData[0];
    console.log(chunkedData);
    console.log(GroupCount);
    if (GroupCount > 0) {
      if (patrolList.length < 3) patrolList.push(chunkedData);
    } else {
      if (groupList.length < 3) groupList.push(chunkedData);
    }
  }
  /* Functions */
  /* Render */
  const groupListRender =
    groupList &&
    groupList.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {row.map((item, index) => (
          <React.Fragment key={item.id}>
            <GroupItem
              data-aos="fade-down"
              BackSrc={item.BackSrc}
              AuthSrc={item.AuthSrc}
              Updown={item.Updown}
              GroupId={item.GroupId}
              GroupName={item.GroupName}
              GroupMember={item.GroupMember}
            />
            {index !== row.length - 1 && <div style={{ margin: '20px' }}></div>}
          </React.Fragment>
        ))}
      </React.Fragment>
    ));
  const patrolListRender =
    patrolList &&
    patrolList.map((row, rowIndex) => (
      <React.Fragment key={rowIndex}>
        {row.map((item, index) => (
          <React.Fragment key={item.id}>
            <PatrolItem
              data-aos="fade-down"
              BackSrc={item.BackSrc}
              AuthSrc={item.AuthSrc}
              Updown={item.Updown}
              GroupId={item.GroupId}
              GroupName={item.GroupName}
              GroupMember={item.GroupMember}
            />
            {index !== row.length - 1 && <div style={{ margin: '20px' }}></div>}
          </React.Fragment>
        ))}
      </React.Fragment>
    ));
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
                {guard_nm ? guard_nm : ''}
              </div>
              <div className="text-sm font-medium text-gray-500">
                @{guard_id ? guard_id : ''}
              </div>
              <div className="text-sm font-medium text-gray-500">
                ${guard_ether_address ? guard_ether_address : ''}
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

          {groupListRender ? (
            <div className="w-full flex justify-start align-middle px-32 mx-40">
              {groupListRender}
            </div>
          ) : (
            <div className="btn-sm text-white bg-red-500 shadow-sm m-6">
              You haven't join
            </div>
          )}
        </div>
        <div className="w-full text-center">
          <div className="h3 mb-10">My Completed Patrol</div>

          {patrolListRender ? (
            <div className="w-full flex justify-start align-middle px-32 mx-40">
              {patrolListRender}
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
