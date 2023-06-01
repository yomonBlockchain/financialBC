import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layout";
import { Main, Signup } from "./pages";

const IndexRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default IndexRouter;
