import React from 'react';
import GroupDetailPresenter from './GroupDetailPresenter';
import { GroupAPI } from '../../../API';
import { useNavigate } from 'react-router-dom';

const GroupDetailContainer = () => {
  /* Router */
  /* State */
  const navigate = useNavigate();
  /* Hooks */
  /* Functions */

  const handleJoinGroup = async (joinInfo) => {
    const result = await GroupAPI.joinGroup(joinInfo);
    if (result) {
      navigate('/');
      return true;
    }
    return false;
  };

  return <GroupDetailPresenter handleJoinGroup={handleJoinGroup} />;
};

export default GroupDetailContainer;
