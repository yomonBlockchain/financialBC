import { Route, Routes } from 'react-router-dom';
import { AdminLayout, MainLayout } from '../Layout';
import {
  DashBoard,
  Group,
  GroupDetail,
  Main,
  Mypage,
  Patrol,
  Signup,
} from './pages';

const IndexRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/group" element={<Group />} />
      <Route path="/group/:group_id" element={<GroupDetail />} />
      <Route element={<AdminLayout />}>
        <Route path="/patrol" element={<Patrol />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
