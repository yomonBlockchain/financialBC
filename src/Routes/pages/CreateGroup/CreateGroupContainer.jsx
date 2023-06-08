import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GroupAPI } from '../../../API';
import { getCookie } from '../../../utils';
import CreateGroupPresenter from './CreateGroupPresenter';

const CreateGroupContainer = () => {
  const navigate = useNavigate();
  const initialState = {
    group_leader: '',
    group_name: '',
    group_desc: '',
    group_region: '',
  };
  const [groupInfo, setGroupInfo] = useState(initialState);

  /**
   * 그룹 정보 입력
   * --
   * @param {*} e
   */
  const handleGroupInfo = (e, c = null) => {
    if (c) {
      setGroupInfo(c);
      return;
    }
    setGroupInfo({ ...groupInfo, [e.target.name]: e.target.value });
  };

  /**
   * 그룹 생성 요청
   * --
   * @returns
   */
  const handleCreateGroup = async (groupInfo) => {
    const { guard_id } = JSON.parse(getCookie('ISGUARD_USER'));
    console.log(guard_id);
    const patrol_id = 'patrol' + groupInfo.group_region;
    const keeper_id = 'keeper' + groupInfo.group_region;
    const createGroupData = {
      group_leader_id: guard_id,
      group_member: guard_id,
      group_name: groupInfo.group_name,
      group_desc: groupInfo.group_desc,
      patrol_id: patrol_id,
      keeper_id: keeper_id,
      is_part: false,
    };
    console.log(createGroupData);
    const createGroupResult = await GroupAPI.createGroup(createGroupData);
    if (createGroupResult) {
      console.log(createGroupResult);
      navigate('/');
      return true;
    }
    return false;
  };

  /* Hooks */
  useEffect(() => {}, [groupInfo]);

  return (
    <CreateGroupPresenter
      handleCreateGroup={handleCreateGroup}
      handleGroupInfo={handleGroupInfo}
      setGroupInfo={setGroupInfo}
      groupInfo={groupInfo}
    />
  );
};

export default CreateGroupContainer;
