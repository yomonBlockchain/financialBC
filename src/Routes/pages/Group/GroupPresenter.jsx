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

  const chunkedData = [];
  const chunkSize = 3;
  const dbData = resultData.map((item, index) => ({
    id: index + 1,
    BackSrc: [CreativeBg01, CreativeBg02, CreativeBg03, CreativeBg04][
      index % 4
    ],
    AuthSrc: [Creative01, Creative02, Creative03, Creative04][index % 4],
    Updown: item.is_part,
    GroupName: item.group_name,
    GroupMember: item.group_member,
    GroupId: item.group_id,
  }));
  for (let i = 0; i < dbData.length; i += chunkSize) {
    chunkedData.push(dbData.slice(i, i + chunkSize));
  }
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
