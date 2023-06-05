import { Route, Routes } from "react-router-dom";
import { AdminLayout, MainLayout } from "../Layout";
import { DashBoard, Main, Mypage, Patrol, Signup } from "./pages";

const IndexRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route element={<AdminLayout />}>
        <Route path="/patrol" element={<Patrol />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
