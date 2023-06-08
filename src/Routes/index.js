import { Route, Routes } from "react-router-dom";
import { AdminLayout, MainLayout } from "../Layout";
import {
  CreateGroup,
  DashBoard,
  Group,
  GroupDetail,
  Main,
  Mypage,
  Patrol,
  Signin,
  Signup,
} from "./pages";

const IndexRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/creategroup" element={<CreateGroup />} />
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
