import React, { useEffect, useState } from 'react';
import { GroupAPI } from '../../../API';
import CreativesItem from '../../../Components/Swiper/CreativesItem';
import Creative01 from '../../../assets/images/creative-01.jpg';
import Creative02 from '../../../assets/images/creative-02.jpg';
import Creative03 from '../../../assets/images/creative-03.jpg';
import Creative04 from '../../../assets/images/creative-04.jpg';
import CreativeBg01 from '../../../assets/images/creative-bg-01.jpg';
import CreativeBg02 from '../../../assets/images/creative-bg-02.jpg';
import CreativeBg03 from '../../../assets/images/creative-bg-03.jpg';
import CreativeBg04 from '../../../assets/images/creative-bg-04.jpg';

const GroupPresenter = () => {
  const [resultData, setResultData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await GroupAPI.getGroupInfo();
      setResultData(response);
    };
    fetchData();
  }, []);
  const groupNames = resultData.map((item) => item.group_name);
  const groupMember = resultData.map((item) => item.group_member);
  const groupId = resultData.map((item) => item.group_id);

  const dbData = [
    {
      id: 1,
      BackSrc: CreativeBg01,
      AuthSrc: Creative01,
      Updown: true,
      GroupName: groupNames[0],
      GroupMember: groupMember[0],
      GroupId: groupId[0],
    },
    {
      id: 2,
      BackSrc: CreativeBg02,
      AuthSrc: Creative02,
      Updown: false,
      GroupName: groupNames[1],
      GroupMember: groupMember[1],
      GroupId: groupId[1],
    },
    {
      id: 3,
      BackSrc: CreativeBg03,
      AuthSrc: Creative03,
      Updown: true,
      GroupName: groupNames[2],
      GroupMember: groupMember[2],
      GroupId: groupId[2],
    },
    {
      id: 4,
      BackSrc: CreativeBg04,
      AuthSrc: Creative04,
      Updown: false,
      GroupName: groupNames[3],
      GroupMember: groupMember[3],
      GroupId: groupId[3],
    },
    {
      id: 5,
      BackSrc: CreativeBg01,
      AuthSrc: Creative01,
      Updown: true,
      GroupName: groupNames[4],
      GroupMember: groupMember[4],
      GroupId: groupId[4],
    },
    {
      id: 6,
      BackSrc: CreativeBg02,
      AuthSrc: Creative02,
      Updown: false,
      GroupName: groupNames[5],
      GroupMember: groupMember[5],
      GroupId: groupId[5],
    },
    {
      id: 7,
      BackSrc: CreativeBg03,
      AuthSrc: Creative03,
      Updown: true,
      GroupName: groupNames[6],
      GroupMember: groupMember[6],
      GroupId: groupId[6],
    },
    {
      id: 8,
      BackSrc: CreativeBg04,
      AuthSrc: Creative04,
      Updown: false,
      GroupName: groupNames[7],
      GroupMember: groupMember[7],
      GroupId: groupId[7],
    },
    {
      id: 9,
      BackSrc: CreativeBg04,
      AuthSrc: Creative04,
      Updown: false,
      GroupName: groupNames[8],
      GroupMember: groupMember[8],
      GroupId: groupId[8],
    },
  ];
  const chunkedData = [];
  const chunkSize = 3;
  for (let i = 0; i < dbData.length; i += chunkSize) {
    chunkedData.push(dbData.slice(i, i + chunkSize));
  }
  console.log(dbData);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Recruiting Groups</h2>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center">
            {/* Creatives cards */}
            <div
              className="flex flex-wrap"
              style={{ marginTop: '20px', marginBottom: '20px' }}
            >
              {/* Map through chunkedData */}
              {chunkedData.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {row.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <CreativesItem
                        data-aos="fade-down"
                        BackSrc={item.BackSrc}
                        AuthSrc={item.AuthSrc}
                        Updown={item.Updown}
                        GroupId={item.GroupId}
                        GroupName={item.GroupName}
                        GroupMember={item.GroupMember}
                      />
                      {index !== row.length - 1 && (
                        <div style={{ margin: '20px' }}></div>
                      )}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupPresenter;
